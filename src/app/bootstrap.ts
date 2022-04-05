import { HttpServer } from "./server";

HttpServer.server((req, res, next) => {
  res.json({
    message: "Hellow",
  });
  res.end();
}).listen(3400, () => console.log("Server running on port: 3400"));
