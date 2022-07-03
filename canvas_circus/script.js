
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");



let x = 200;
let y = 200;
let raio = 120;
let inicio = 0  ;
let fim = 2 * Math.PI;

ctx.beginPath();

ctx.strokeStyle = "red";
ctx.fillStyle = "blue";
ctx.arc(x,y,raio,inicio,fim);
ctx.fill();
ctx.stroke();
