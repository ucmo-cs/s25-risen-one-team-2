'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

module.exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);

  const params = {
    TableName: 'users',
    Key: {
      username: requestBody.username
    }
  };

  try {
    const data = await dynamoDb.get(params).promise();

    if (!data.Item || data.Item.password !== requestBody.password) {
      return {
        statusCode: 401,
        "headers": {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
        body: JSON.stringify({ message: 'Invalid username or password' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Login successful' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};
