import { Handler } from "express";

export function Api(target: Handler) {
  return ({ path, method }: { path: string; method: string }) => {
    return {
      target,
      path,
      method,
    };
  };
}
