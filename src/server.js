import express from "express";
import { routes } from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const port = process.env.PORT || 3333;

app.listen(port, console.log.bind(console, "Server is running"));
