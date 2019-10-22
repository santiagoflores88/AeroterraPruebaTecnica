var express = require("express");
var app = express();


//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/PUBLIC'));




app.listen(3000);