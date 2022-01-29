import express from "express";
import cors from "cors";

import { routes } from "./routes/routes.js";
import { connect } from "./database/db.js";

const app = express();

connect();

const allowedOrigins = ["http://127.0.0.1:5500"];

app.use(
  cors({
    origin: function (origin, callback) {
      let allowed = true;

      if (!origin) allowed = true;

      if (!allowedOrigins.includes(origin)) allowed = false;

      callback(null, allowed);
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const port = process.env.PORT || 3333;

app.listen(port, console.log.bind(console, "Server is running"));
