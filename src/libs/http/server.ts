import express from "express";

export const app = express();

app.use(express.json());

export const server = (port: number = 3400) =>
  app.listen(port, () => console.log(`Server on port: ${port}`));
