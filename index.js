var express = require('express');
var app = express();
app.use(express.static("./"));
app.get("/", (req, res) => {
    res.send(__dirname + "/index.html");
});
app.listen(8081, function () {
    console.log("Servidor rodando na porta 8080");
});