import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";

// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// const PORT = process.env.PORT || 5000;

// connectDB();

const app = express();
// app.use(cors());

// app.use(cookieParser());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/users", userRoutes);
// app.use(notFound);
// app.use(errorHandler);
// app.get("/", async (req, res) => res.send("server is ready"));

app.listen(PORT, () => console.log("server started on port ", PORT));
