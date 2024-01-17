import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import postRoutes from './routes/posts.js';
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import loginRouter from "./routes/login.js";
import customerRegisterRouter from "./routes/customerRegister.js";
import registerBusinessRouter from "./routes/businessRegister.js";
import customerRouter from "./routes/customerUsers.js";
import businessRouter from "./routes/businessUsers.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

mongoose.set('strictQuery', true); // or true based on your preference

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () =>
  console.log("Database connection established!")
);
mongoose.connection.on("error", (err) =>
  console.error("MongoDB connection error:", err)
);

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req, res) => {
  res.send('Hello, this is the root!');
});
// Routes

app.use('/customer', customerRegisterRouter);
app.use('/posts', postRoutes);
console.log("Before using customer router");
//app.use("/customer", registerCustomerRouter);
app.use("/business", registerBusinessRouter);
app.use("/login", loginRouter);
app.use("/customerUsers", customerRouter);
app.use("/businessUsers", businessRouter);

// Global error handler
app.use(globalErrorHandler);

app.use(globalErrorHandler);


app.listen(port, () => {
  console.log(`Server has started on port ${port}!`);
});
