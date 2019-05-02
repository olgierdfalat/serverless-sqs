'use strict';
const AWS = require('aws-sdk');
const config = require('./services/config');
const sqs = new AWS.SQS({region: config.AWS.region});

module.exports.handler = async (event, context, callback) => {
  console.log('ACCOUNT_ID:', process.env.accountId);
  console.log('REGION:', process.env.region);
  const queueUrl = `https://sqs.${config.AWS.region}.amazonaws.com/${config.AWS.accountId}/TestQueue`;
  const params = {
    MessageBody: event.body,
    QueueUrl: queueUrl
  };

  try {
    const data = await sqs.sendMessage(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        description: 'Message successfully sent.',
        messageId: data.MessageId
      })
    };
    callback(null, response);
  }
  catch(err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message  
      })
    };
    callback(null, response);
  }
};
