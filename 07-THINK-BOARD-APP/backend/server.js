import express from "express"
import env from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import dbconnection from "./config/connectdbConnection.js";


env.config();
const app = express();
dbconnection();

app.use(express.json());
app.use("/api/notes", notesRoutes);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});