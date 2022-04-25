import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./schema.json";

const router = Router();

const ROOT_PATH = "/api";

router.use(`${ROOT_PATH}`, swaggerUi.serve);
router.get(`${ROOT_PATH}`, swaggerUi.setup(swaggerDocument));

export const swaggerRouter = router;
