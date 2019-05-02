# serverless-sqs
Serverless framework and Simple Queue Service boilerplate 

Based on [Serverless blog](https://serverless.com/blog/aws-lambda-sqs-serverless-integration/) and [Medium article](https://medium.com/@brunowatt/implementing-sqs-in-serverless-the-right-way-a416f73e94da)
#### Prerequisites

* Install node 8.10.0

  ```
  nvm install 8.10.0
  nvm use
  ```

* Install the serverless cli

  `npm install -g serverless`

* [Configure the AWS CLI](https://serverless-stack.com/chapters/configure-the-aws-cli.html)

* Modify **stage**, **region** and **profile** settings in **serverless.yml** file. 

#### Deploy to AWS

    serverless deploy

or 

    sls deploy

After first deployment create **env.yml** file at the project root level and copy the following settings:

```
# Add the environment variables for the various stages

dev: 

prod:

default:
  accountId: "*****************"
```



