/** @format */

const express = require("express");
const app = express();
const port = 3000;

app.use("/trangchu", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log(`Example app listening on port ${port}!`));
