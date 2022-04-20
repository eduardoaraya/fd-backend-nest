import { Request, Response } from "express";
import { userRepository } from "./user-repository";
import { userService } from "./user-service";

const service = userService(userRepository());

export function index(_req: Request, res: Response) {
  return res.json({
    data: service.repository.list(),
  });
}
