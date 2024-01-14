import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import postRoutes from './routes/posts.js';
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import loginRouter from "./routes/login.js";
import registerCustomerRouter from "./routes/customerRegister.js";
import registerBusinessRouter from "./routes/businessRegister.js";
import customerRouter from "./routes/customerUsers.js";
import businessRouter from "./routes/businessUsers.js";



const app = express();

dotenv.config();


mongoose.set('strictQuery', false);

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Include this line for SSL
});

// check mongodb connection
mongoose.connection.on("open", () =>
  console.log("Database connection established!")
);
mongoose.connection.on("error", () => console.error);

// allow cors requests
app.use(cors());

// parse JSON data received
app.use(express.json());

// Use morgan to make a small log every time a request is received
app.use(morgan("tiny"));

// app.use("/home", enterPage);
app.use('/posts', postRoutes);

// register customer user
app.use("/registerCustomer", registerCustomerRouter);

// register business user
app.use("/registerBusiness", registerBusinessRouter);

// login post
app.use("/login", loginRouter);

// customer Users
app.use("/customerUsers", customerRouter);

// business Users
app.use("/businessUsers", businessRouter);


app.use(globalErrorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server has started on port ${port}!`);
});



