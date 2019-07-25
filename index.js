const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const userRouter = new Router({ prefix: "/users" });

router.get("/", ctx => {
  ctx.body = "这是主页";
});

router.get("/users", ctx => {
  ctx.body = "这是用户列表";
});

userRouter.post("/users", ctx => {
  ctx.body = "这是创建用户";
});

userRouter.get("/users/:id", ctx => {
  ctx.body = ctx.params.id;
});
app.use(router.routes());
app.use(userRouter.routes());
app.listen(3000);
