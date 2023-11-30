import express from "express";
import bodyParser from "body-parser";
import useRoutes from "./routes/user.js";
const PORT = 5000;

const app = express();
app.use(bodyParser.json());
app.use("/users", useRoutes);
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
