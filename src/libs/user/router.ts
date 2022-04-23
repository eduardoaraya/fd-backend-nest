import { Router } from "express";
import { serviceProvider, index, create } from "./user-controller";
import { userRequest } from "./user-request";

const router = Router();

const ROOT_PATH = "/user";

router.get(`${ROOT_PATH}`, index(serviceProvider));
router.post(`${ROOT_PATH}/create`, create(serviceProvider, userRequest));

export const userRouter = router;
