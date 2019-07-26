const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const userRouter = new Router({ prefix: "/users" });

router.get("/", ctx => {
  ctx.body = "这是主页";
});

userRouter.get("/", ctx => {
  ctx.body = [{ name: "lilei" }, { name: "hanmeimei" }];
});

userRouter.post("/", ctx => {
  ctx.body = { name: "lilei" };
});

userRouter.get("/:id", ctx => {
  ctx.body = { name: "lilei" };
});

userRouter.put("/:id", ctx => {
  ctx.body = { name: "lilei2" };
});

userRouter.delete("/:id", ctx => {
  ctx.body = 204;
});

app.use(router.routes());
app.use(userRouter.routes());

app.use(userRouter.allowedMethods());
app.listen(3000);
