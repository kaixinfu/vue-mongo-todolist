const express = require('express');
const app = express();

const mongo = require("./models/db");

const port = 3000;
app.listen(port, () => {
    console.log("server is run on port: ", port);
})

app.get("/persons/list", (req, res) => {
    console.log("req", req);
    console.log("res", res);
    res.json({code: 200, data: [1, 2, 3]})
})
