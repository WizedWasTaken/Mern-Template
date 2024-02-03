import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/userRoutes";
import dotenv from "dotenv";

// ENV Setup
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {});

// Body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

// Routes
routes(app);

app.get("/", (req, res) => {
  res.send(`API is online...`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
