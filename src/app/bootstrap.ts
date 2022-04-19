import { server, app, router } from "@libs/http";
import { customerRouter } from "@libs/customer";

server();
router(app, [customerRouter]);
