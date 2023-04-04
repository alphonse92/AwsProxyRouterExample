# simple-lambda-api-router AWSProxyRouter example

This project is a ussage example of https://www.npmjs.com/package/simple-lambda-api-router
It will use the AWSProxyRouter with [middy](https://middy.js.org/) middlewares.

# Requeriments

1. SAM cli: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html
2. Node
3. Docker

# Installation

1. npm install

# Run the project

1. npm run local

After running that, it will deploy the api gateway in your local. The next endpoints will return the event object:


1. POST/health/:parameter/status/:optional?
2. GET/health/:parameter/status/:optional?

User endpoints

1. GET/user/
2. GET/user/:id
3. POST/user/
4. DELETE/user/

Clients endpoints

5. GET/user/clients/
6. GET/user/clients/:id
7. POST/user/clients/
8. DELETE/user/clients/

Otherwise the lambda will return 404
