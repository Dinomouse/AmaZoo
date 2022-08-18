import { getOrders } from "../models/amazooModel.js";
import express from "express";
import { postOrders } from "../models/amazooModel.js";
const ordersRouter = express.Router();

ordersRouter.get("/:id", async function (req, res) {
  const id = req.params.id;
  let result = await getOrders(id);
  return res.json({
    success: true,
    payload: result,
  });
});

ordersRouter.post("/", async function (req, res) {
  const newOrder = req.body;

  let result = await postOrders(newOrder);
  return res.json({
    success: true,
    payload: result,
  });
});

export default ordersRouter;
