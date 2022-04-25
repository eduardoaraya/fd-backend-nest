import { Router } from "express";
import {
  serviceProvider,
  index,
  createInput,
  createOutput,
} from "./release-controller";

const router = Router();

const ROOT_PATH = "/release";

router.get(`${ROOT_PATH}`, index(serviceProvider));
router.post(`${ROOT_PATH}/input`, createInput(serviceProvider));
router.post(`${ROOT_PATH}/output`, createOutput(serviceProvider));

export const releaseRouter = router;
