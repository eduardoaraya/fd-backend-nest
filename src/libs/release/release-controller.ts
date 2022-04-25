import { Request, Response } from "express";
import { releaseRepository } from "./release-repository";
import { releaseRequest } from "./release-request";
import { releaseService, ReleaseServiceInterface } from "./release-service";

export const serviceProvider = releaseService(releaseRepository());

export function index(service: ReleaseServiceInterface) {
  return async (_req: Request, res: Response) =>
    res.json({
      data: await service.repository.list(),
    });
}

export function createOutput(service: ReleaseServiceInterface) {
  return async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await releaseRequest(body);
      await service.createOutput(data);
      res.status(201).json({
        message: "Success",
        data,
      });
    } catch (_err) {
      console.log(_err);
      res.status(400).json({
        erro: "Bad request",
        details: _err,
      });
    }
  };
}

export function createInput(service: ReleaseServiceInterface) {
  return async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await releaseRequest(body);
      await service.createInput(data);
      res.status(201).json({
        message: "Success",
        data,
      });
    } catch (_err) {
      console.log(_err);
      res.status(400).json({
        erro: "Bad request",
        details: _err,
      });
    }
  };
}
