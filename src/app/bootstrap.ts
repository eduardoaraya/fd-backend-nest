import { server, app, router } from "@libs/http";
import { userRouter } from "@libs/user";

server();
router(app, [userRouter]);
