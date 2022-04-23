import { Request, Response } from "express";
import { userRepository } from "./user-repository";
import { UserRequestInterface } from "./user-request";
import { userService, UserServiceInterface } from "./user-service";

export const serviceProvider = userService(userRepository());

export function index(service: UserServiceInterface) {
  return async (_req: Request, res: Response) =>
    res.json({
      data: service.repository.list(),
    });
}

export function create(
  service: UserServiceInterface,
  userRequest: UserRequestInterface
) {
  return async (req: Request, res: Response) => {
    try {
      const { body } = req;
      console.log(body);
      const data = await userRequest(body);
      await service.create(data);
      res.status(201).json({
        message: "Success",
        data,
      });
    } catch (_err) {
      res.status(400).json({
        erro: "Bad request",
      });
    }
  };
}
