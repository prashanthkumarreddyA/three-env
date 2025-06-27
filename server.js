import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Test branch!",
    environment: ENV,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${ENV} environment)`);
});
