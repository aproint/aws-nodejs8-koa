import serverless from 'serverless-http'
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

const getResult = async (id) => new Promise((resolve, reject) => {
  resolve((id % 2 === 0) ? 'odd' : 'even')
})

router.get('/:id', async (ctx) => {
  ctx.body = await getResult(ctx.params.id)
})

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

export const server = serverless(app)