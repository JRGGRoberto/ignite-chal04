import express from "express";
import swaggerUI from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";
// import swaggerJsDoc from "swagger-jsdoc";

// const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
