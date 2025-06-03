import express from "express";
import authRoutes from "./routes/auth.routes.js"
import env from "dotenv";
import dbconnection from "./config/connectdbConnection.js";

env.config();
const app = express();
const port = 3000;
dbconnection();

app.use(express.json());
app.use("/api/auth", authRoutes)


app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`);
})