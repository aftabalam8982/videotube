import dotEnv from "dotenv";
import { connectDB } from "./db/index.js";
dotEnv.config({ path: "./env" });

// connect to database

connectDB();

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
