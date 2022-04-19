import { Application, Router } from "express";

export const router = (app: Application, routersModule: Router[]) =>
  app.use(routersModule);
