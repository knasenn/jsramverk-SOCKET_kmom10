//connection
var socket = io.connect("http://localhost:4000");
//Dom element
var output = document.getElementById("output");
//Listen
console.log("test");
socket.on("korv", function(data){
    let korv = data.toFixed(2);
    output.innerHTML = "<p>"+String(korv);+"</p>";
});
