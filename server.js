const Koa = require("koa");
const Router = require('koa-router')
const next = require("next");
const { async } = require("regenerator-runtime");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();


  router.get('/a/:id', async ctx => {
    const id = ctx.params.id
   await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query:{id}
    })
    ctx.respond = false;
  })
  server.use(router.routes())
  // router.get('/test/:id', (ctx) => {
  //   // ctx.body = `<p>request /test${ctx.params.id}</p>`
  //   ctx.body = {age : 10}
  //   ctx.set('Content-Type', 'application/json')
  // })

  // server.use(async (ctx, next) => {
    // const path = ctx.path
    // const method = ctx.method
    // ctx.body = `<span>Koa Render${path}${method}</span>`
    // await next();
  // })
  // server.use(router.routes())
  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Render 2</span>'
  // })
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log('success on 3000');
  })
});
