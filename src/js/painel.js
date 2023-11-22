const imagensFundo = document.querySelectorAll(".fundo");
const setaVoltar = document.getElementById ("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemFundoAtual = 0;

setaVoltar.addEventListener("click", function(){
    if(imagemFundoAtual === 0){
        return;
    }
    escondendoFundoDeImagemAtual();
    imagemFundoAtual--;
    atualizandoFundoDeImagemAtual()
    mostrarOuEsconderSetas();
});

setaAvancar.addEventListener("click", function(){
    if(imagemFundoAtual === imagensFundo.length-1){
        return;
    }
    escondendoFundoDeImagemAtual();
    imagemFundoAtual++;
    atualizandoFundoDeImagemAtual()
    mostrarOuEsconderSetas();
});

function mostrarOuEsconderSetas(){
    if(imagemFundoAtual === 0){
        setaVoltar.classList.add("opacidade");
    }else{
        setaVoltar.classList.remove("opacidade");
    }
    if(imagemFundoAtual === imagensFundo.length - 1){
        setaAvancar.classList.add("opacidade");
    }else{
        setaAvancar.classList.remove("opacidade");
    }
}

function escondendoFundoDeImagemAtual(){
    imagensFundo[imagemFundoAtual].classList.remove("mostrar");
}
function atualizandoFundoDeImagemAtual(){
    imagensFundo[imagemFundoAtual].classList.add("mostrar");
}