import express from "express";
import { routes } from "./routes/routes.js";
import { connect } from "./database/db.js";
import e from "express";

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const port = process.env.PORT || 3333;

app.listen(port, console.log.bind(console, "Server is running"));
