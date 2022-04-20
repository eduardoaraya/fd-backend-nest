import { Router } from "express";
import { index } from "./user-controller";

const router = Router();

const ROOT_PATH = "/customer";

router.get(`${ROOT_PATH}`, index);

export const userRouter = router;
