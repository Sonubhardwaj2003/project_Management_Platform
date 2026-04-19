import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
