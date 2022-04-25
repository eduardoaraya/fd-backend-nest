import { server, app, router } from "@libs/http";
import { categoryRouter } from "@libs/category";
import { swaggerRouter } from "@libs/swagger/router";
import { userRouter } from "@libs/user";
import { walletRouter } from "@libs/wallet";
import { releaseRouter } from "@libs/release";

server();
router(app, [
  swaggerRouter,
  userRouter,
  walletRouter,
  categoryRouter,
  releaseRouter,
]);
