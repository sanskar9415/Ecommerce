const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use("/", (req,res) => {
  res.send("This message is from server");
});


app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});