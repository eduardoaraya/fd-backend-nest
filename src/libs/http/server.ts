import express from "express";

export const app = express();

export const server = (port: number = 3400) =>
  app.listen(port, () => console.log(`Server on port: ${port}`));
