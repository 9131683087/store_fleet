import express from "express";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./src/product/routes/product.routes.js";
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from "./middlewares/errorHandlerMiddleware.js";
import userRoutes from "./src/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
import orderRoutes from "./src/order/routes/order.routes.js";

// Load environment variables from the default location
dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cookieParser());

// configure routes
app.use("/api/storefleet/product", productRoutes);
app.use("/api/storefleet/user", userRoutes);
app.use("/api/storefleet/order", orderRoutes);

// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;
