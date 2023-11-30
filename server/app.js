import express from "express";
import bodyParser from "body-parser";

const PORT = 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
