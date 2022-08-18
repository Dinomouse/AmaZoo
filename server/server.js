import express from "express";
import ordersRouter from "./routes/amazooRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/orders", ordersRouter);

app.listen(PORT, () => {
  console.log(`example app listening on port ${PORT}`);
});
