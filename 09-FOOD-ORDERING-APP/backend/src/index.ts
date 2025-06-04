import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv"

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});