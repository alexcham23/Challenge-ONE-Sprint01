function encriptarMensaje(resultado) {
    const encriptar = document.getElementById('texto1').value;
    let encriptar1=encriptar.toLowerCase();
    const encriptado = encriptar1.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("box1").innerHTML ="<p class=\"info\" id=\"texto2\">" +encriptado+"</p>" ;
    document.getElementById ("texto1").value="";
}


function desencriptarMensaje(resultado){
    const desencriptar= document.getElementById ("texto1").value;
    let desencriptar1=desencriptar.toLowerCase();
    const desencriptado= desencriptar1.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("box1").innerHTML ="<p class=\"info\" id=\"texto2\">" +desencriptado+"</p>" ; 
    document.getElementById ("texto1").value="";
}

function copiarMensaje(mensaje){
    navigator.clipboard.writeText(document.getElementById("texto2").innerHTML);
    document.getElementById("action").style.background="red";
    document.getElementById("btn").style.background="red";
    document.getElementById("action").innerHTML="Copiado..";
    document.getElementById("texto2").innerHTML="";
    setTimeout(actionButton,2000)
}

function inicio(){
    var dato="";
    dato+="<img src=\"./image/imagen.svg\" class=\"logo2\">\n";
    dato+="<div class=\"sms\">\n";
    dato+="\t<p class=\"sms1\">Ningún mensaje fue encontrado</p>\n";
    dato+="\t<p class=\"sms2\">Ingrese el texto que desees encriptar o desencriptar.</p>\n";
    dato+="</div>"
    document.getElementById("box1").innerHTML =dato;
}

function actionButton(){
    document.getElementById("action").innerHTML="Copiar";
    document.getElementById("action").style.background="#F3F5FC"
    document.getElementById("btn").style.background="#F3F5FC"
}