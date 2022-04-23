import { server, app, router } from "@libs/http";
import { swaggerRouter } from "@libs/swagger/router";
import { userRouter } from "@libs/user";

server();
router(app, [userRouter, swaggerRouter]);
