import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const port = process.env.PORT;
const corsOption = {
  origin: "http://localhost:5173/",
  Credential: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.get("/user", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("Server is running at port", port);
});
