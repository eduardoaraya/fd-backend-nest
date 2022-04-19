import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  return res.json({
    message: "Hellow API",
  });
});

export const customerRouter = router;
