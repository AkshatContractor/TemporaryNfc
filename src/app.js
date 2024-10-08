import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// Routes Import
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Accept JSON files
app.use(express.json({ limit: "16kb" }));
// Data came in the form of URL-encoded form data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// static files : PDF, DOCX, MP4, etc
app.use(express.static("public"));
// Perform CRUD operations on cookies
app.use(cookieParser());

// Routes Declaration
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

export default app;
