# aws-nodejs8-koa

This is a template you can use to quickly create a Koa-based Serverless service with configured
`serverless-webpack`, `serverless-offline`, and optionally `serverless-dynamodb-local`. It uses
`serverless-http` to wrap a Koa application. We added AWS SDK for your convenience as well.

If you don't need Koa and just need configured Serverless plugins, check out our other template:
[aws-nodejs8-webpack-offline](https://github.com/aproint/aws-nodejs8-webpack-offline)

## How to use

```
sls create --template-url https://github.com/aproint/aws-nodejs8-koa --path myservice
```