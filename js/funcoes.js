function TrocarImagem(imagemNova){
//document.querySelector(".starbucks").src = imagemNova;
let copo =document.querySelector(".starbucks");
copo.src = imagemNova
}


function MudarCirculo(CorNova){
let circulo =document.querySelector(".circulo");
circulo.style.background = CorNova;




let titulo =document.querySelector(".caixa-texto span");
titulo.style.color = CorNova;

let botao =document.querySelector(".caixa-texto a");
botao.style.background = CorNova;
}