import express from "express";
import connectDB from "./DB/connection.js";
import {apiError} from './validators/apiErrorHandler.js';
import {router as postRouter} from './routers/posts.js';

const app = express();
const port = 8888;

connectDB();
app.use(express.json());

app.use("/posts", postRouter);


app.all("*", (req, res, next) => {
  next(new apiError(`can't find this route: ${req.originalUrl}`, 400));
});
app.listen(port, () => console.log(`app listening on port ${port}`));

process.on("unhandledRejection", (err) => {
  console.log(`unhandled error: ${err.name} | ${err.message}`);
  listen.close(() => {
    console.log("shutting down the server");
    process.exit(1);
  });
});
