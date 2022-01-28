import { Router } from "express";

const routes = Router();

routes.get("/clients", (req, res) => {
  return res.json({ message: "ok" });
});

export { routes };
