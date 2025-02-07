import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectdb from "./src/db/index.js";
const port = process.env.PORT;
const corsOption = {
  origin: "http://localhost:5173/",
  Credential: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/user", (req, res) => {
  res.send("hello user");
});


connectdb()
.then(() => {
  app.listen(port, () => {
    console.log("Server Is Running At Port", port);
  });
})
.catch((err) => {
  console.log(err);
});