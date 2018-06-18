# aws-nodejs8-koa

This is a template you can use to quickly create a Koa-based Serverless service with configured
`serverless-webpack`, `serverless-offline`, and optionally `serverless-dynamodb-local`. It uses
`serverless-http` to wrap a Koa application. We added AWS SDK for your convenience as well.

If you don't need Koa and just need configured Serverless plugins, check out our other template:
[aws-nodejs8-webpack-offline](https://github.com/aproint/aws-nodejs8-webpack-offline)

We assume you're using `yarn`.

## How to use

```
sls create --template-url https://github.com/aproint/aws-nodejs8-koa --path myservice
```

## Start Offline
Simply use yarn script: 
```
yarn start
```

## Dynamo DB Local

If you want to enable Dynamo DB local, simply uncomment relevant parts inside `serverless.yml`.
There is a known bug inside `serverless-dynamodb-local` which causes that the Dynamo DB Local package inside
`node_modules` disappears. The only workaround is remove it and delete it - we've got you covered with
yarn script:
```
yarn fixdb
```