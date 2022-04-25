import { Request, Response } from "express";
import { categoryRepository } from "./category-repository";
import { categoryRequest } from "./category-request";
import { categoryService, CategoryServiceInterface } from "./category-service";

export const serviceProvider = categoryService(categoryRepository());

export function index(service: CategoryServiceInterface) {
  return async (_req: Request, res: Response) =>
    res.json({
      data: await service.repository.list(),
    });
}

export function create(service: CategoryServiceInterface) {
  return async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await categoryRequest(body);
      await service.create(data);
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
