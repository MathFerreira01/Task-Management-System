import { Request, Response } from "express";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 4003;

app.route("/").get((req: Request, res: Response) => {
  res.status(200).send({ title: "Task Manager" });
});

app.use(express.json(), cors());

app.listen(PORT, () => console.log("Server is running on PORT 4003"));
