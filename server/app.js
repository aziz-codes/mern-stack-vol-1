import express from "express";
import bodyParser from "body-parser";
import useRoutes from "./routes/user.js";
import connectDB from "./connection.js";
const PORT = 5000;

const app = express();
connectDB();
app.use(bodyParser.json());
app.use("/users", useRoutes);
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
