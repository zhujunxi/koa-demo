const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
  ctx.body = "hello zhihu API";
});

app.listen(3000);
