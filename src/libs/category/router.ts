import { Router } from "express";
import { serviceProvider, index, create } from "./category-controller";

const router = Router();

const ROOT_PATH = "/category";

router.get(`${ROOT_PATH}`, index(serviceProvider));
router.post(`${ROOT_PATH}/create`, create(serviceProvider));

export const categoryRouter = router;
