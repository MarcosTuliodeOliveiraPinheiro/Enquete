let encremento = 0;
let largura = 0;
let mover = 540;
let count = 0;
let largura2 = 0;
let pegasus1 = 5;
let pegasus2 = 5;
function simpi(){
    encremento++;
    largura = largura + 20;
    document.getElementById("all").innerHTML = encremento;
    document.querySelector("#all").style.width = largura+"px";
    if (encremento > pegasus2){
        pegasus1 = encremento;
        mover = mover - 8;
        document.querySelector(".resultado").style.left = mover+"px";
        document.querySelector("#all").style.left = mover+"px";
        document.querySelector("#aln").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    }   
}   
function naopi(){
    count++;
    document.getElementById("aln").innerHTML = count;
    largura2 = largura2 + 20;
    document.querySelector("#aln").style.width = largura2+"px";
    if (count > pegasus1){
        pegasus2 = count;
        mover = mover - 8;
        document.querySelector(".resultado").style.left = mover+"px";
        document.querySelector("#all").style.left = mover+"px";
        document.querySelector("#aln").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    }
}   