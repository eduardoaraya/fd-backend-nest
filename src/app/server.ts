import http, { IncomingMessage, ServerResponse } from "http";

export namespace HttpServer {
  const next = () => console.log("> Next handler");

  export type Request = IncomingMessage & {};

  export type Response = ServerResponse & {
    json: (data: Object) => boolean;
  };

  export type HandleRequest = (
    request: Request,
    response: Response,
    next: () => void
  ) => void;

  function assignResponse(res: ServerResponse): Response {
    return Object.assign(res, {
      json: (data: Object) => res.write(JSON.stringify(data)),
    });
  }

  function assignRequest(req: IncomingMessage): Request {
    return Object.assign(req, {});
  }

  export function handleRequest(stack: HandleRequest) {
    return (req: IncomingMessage, res: ServerResponse) =>
      stack(assignRequest(req), assignResponse(res), next);
  }

  export const server = (stack: HandleRequest) =>
    http.createServer(handleRequest(stack));
}
