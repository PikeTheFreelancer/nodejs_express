const express = require('express');
const app = express();
const port = 3300;

app.get('/', function(req, res){
    res.send("Hello World");
})

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})
