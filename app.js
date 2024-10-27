require("dotenv").config();
const express = require("express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
})