'use strict';

module.exports.handler = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'SQS event processed.',
        input: event,
    }),
  };
  console.log('event: ', JSON.stringify(event));
  const body = event.Records[0].body;
  console.log("text: ", JSON.parse(body).text);

  callback(null, response);
};
