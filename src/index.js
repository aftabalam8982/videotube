import dotEnv from "dotenv";
import { connectDB } from "./db/index.js";

import express from "express";

dotEnv.config({ path: "./env" });
const app = express();

// connect to database

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running on Port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Database Connection Failed:`, error);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.listen(process.env.PORT, () => {
      console.log(`port are listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Connection Error:", error);
    app.exit(1);
  }
})();
*/
