const mongodb = require("./db");

mongodb.once("connect", () => {
    console.log('init........connect');    
})