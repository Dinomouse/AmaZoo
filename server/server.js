import express from "express";
import ordersRouter from "./routes/amazooRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
