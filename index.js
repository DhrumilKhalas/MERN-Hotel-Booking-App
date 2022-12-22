import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();
const PORT = process.env.PORT

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// serving the frontend
const __filename = fileURLToPath(import.meta.url);
app.use(express.static(path.join(__filename, "../client/booking/build")))

app.get("*", function(_,res) {
    res.sendFile(
        path.join(__filename, "../client/booking/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

// error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

connect();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
