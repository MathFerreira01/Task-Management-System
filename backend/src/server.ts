import { Request, Response } from "express";
import { router } from "./routes/route";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 4003

app.route("/").get((req: Request, res: Response) => {
  res.status(200).send({ title: "task management" });
});

app.use(express.json(), router, cors());

app.listen(PORT, () => console.log("Server is running on PORT 4003"));
