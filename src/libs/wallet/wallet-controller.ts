import { Request, Response } from "express";
import { walletRepository } from "./wallet-repository";
import { walletRequest } from "./wallet-request";
import { walletService, WalletServiceInterface } from "./wallet-service";

export const serviceProvider = walletService(walletRepository());

export function index(service: WalletServiceInterface) {
  return async (_req: Request, res: Response) =>
    res.json({
      data: await service.repository.list(),
    });
}

export function create(service: WalletServiceInterface) {
  return async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await walletRequest(body);
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
