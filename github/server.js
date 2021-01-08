const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  router.get('/a/:id', async (ctx) => {
      const id = ctx.params.id;
      await handle(ctx.req, ctx.res, {
          pathname: '/a',
          query: {id}
      })
  })
  // router.get('/test/:id', (ctx) => {
  //     // ctx.body = `<p> ${ctx.params.id}</p>`
  //     ctx.body = { success: true}
  //     ctx.set('Content-Tpye', 'application/json')
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.use(router.routes())
  server.listen(3000, () => {
    console.log("koa Server listening on 3000");
  });
});
// server.use(router.routes())
// server.use(async (ctx, next) => { //ctx请求返回内容
//     const path = ctx.path;
//     const method = ctx.method;
//     ctx.body = `<span>Koa Render ${path} ${method}</span>`
//     await next()
// })

// server.use(async (ctx, next) => { //ctx请求返回内容
//     ctx.body = '<span>Koa Render222</span>'
// })
// server.use(async (ctx, next) => {
//     await handle(ctx.req, ctx.res)
//     ctx.respond = false;
// })
// })
