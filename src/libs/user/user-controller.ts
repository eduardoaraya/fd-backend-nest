import { Request, Response } from "express";
import { userRepository } from "./user-repository";
import { userService, UserServiceInterface } from "./user-service";
import { userRequest } from "./user-request";

export const serviceProvider = userService(userRepository());

export function index(service: UserServiceInterface) {
  return async (_req: Request, res: Response) =>
    res.json({
      data: await service.repository.list(),
    });
}

export function create(service: UserServiceInterface) {
  return async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await userRequest(body);
      await service.create(data);
      res.status(201).json({
        message: "Success",
        data,
      });
    } catch (_err) {
      res.status(400).json({
        erro: "Bad request",
        details: _err,
      });
    }
  };
}
