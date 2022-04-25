import { Router } from "express";
import { serviceProvider, index, create } from "./wallet-controller";

const router = Router();

const ROOT_PATH = "/wallet";

router.get(`${ROOT_PATH}`, index(serviceProvider));
router.post(`${ROOT_PATH}/create`, create(serviceProvider));

export const walletRouter = router;
