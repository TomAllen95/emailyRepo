const express = require("express");
const app = express();

// route handler for express
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT;
app.listen(PORT || 5000);
