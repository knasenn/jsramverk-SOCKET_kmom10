//Dep
const express = require('express');
const socket = require('socket.io');

var app = express();
var server = app.listen(4000, () => console.log('Server started on port 4000'));

//Static
app.use(express.static("public"));

//global varriables
var korv = 30;
var korvar = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]];

//Socket setup
var io = socket(server);


setInterval(function(){
    let random = Math.random() * (1.1 - 0.9) + 0.9;
    en_korv = korv * random;
    korv = en_korv;

    alla_korvar = korvar;
    //lägger till nytt värde och tar bort första
    alla_korvar.push([7,en_korv]);
    alla_korvar.shift();
    //justerar index
    alla_korvar[0][0] = 0;
    alla_korvar[1][0] = 1;
    alla_korvar[2][0] = 2;
    alla_korvar[3][0] = 3;
    alla_korvar[4][0] = 4;
    alla_korvar[5][0] = 5;
    alla_korvar[6][0] = 6;

    io.sockets.emit("korv", alla_korvar);
}, 1000);

io.on("connection", function(socket){
    console.log("socket connect with ID ", socket.id);

    socket.on('disconnect', function() {
        console.log(socket.id, " disconnected", );
    });

});
