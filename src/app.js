import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

const app = express();

// Handle cors allow the origin request.
app.use(cors({ origin: process.env.CORS_ORIGIN, Credential: true }));

// set the limit of json data
app.use(express.json({ limit: "16kb" }));

// use to parse incoming requests with URL-encoded payloads.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to serve image, css, script file or pdf etc from the public folder to user.
app.use(express.static("public"));

// it will parse the cookies sent by client
app.use(cookieParser());

export { app };
