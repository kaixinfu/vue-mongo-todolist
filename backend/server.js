const express = require('express');
const app = express();

const mongo = require("./models/db");

const port = 3000;
app.listen(port, () => {
    console.log("server is run on port: ", port);
})

app.get("/persons/list", async (req, res) => {
    const data = await mongo.col("persons").find().toArray();    
    res.json({
        code: 200,
        success: true,
        result: data
    })
})
