const express = require('express');
const app = express();

const mongo = require("./models/db");

const port = 3000;
app.listen(port, () => {
    console.log("server is run on port: ", port);
})