function circulo(){
    const figura = document.getElementById ("figura");      /*get=obtener*/

    figura.classList.toggle("circulo")   /*toggle= Al presionar el boton se  devuelve lo ejecutado*/
}

function rectangulo(){
    const element = document.getElementById("figura");
    
    element.classList.toggle("rectangulo")
}

function degradado(){
    const element=document.getElementById("figura");

    element.classList.toggle("degradado")
}

function ondas(){
    const element=document.getElementById("figura");
    element.classList.toggle("ondas")
}

function rombo(){
    const element=document.getElementById("figura");
    element.classList.toggle("rombo")
}

function triangulo(){
    const element= document.getElementById("figura");
    element.classList.toggle("triangulo")
}

function gif(){
    const element=document.getElementById("figura");
    element.classList.toggle("gif")
}

function fondofigura(){
    const element=document.getElementById("figura");
    element.classList.toggle("fondofigura")
}

function pacman(){
    const element=document.getElementById("figura");
    element.classList.toggle("pacman")
}

function panel_lateral(){
    const elemento = document.getElementById('panel-lateral');
    elemento.classList.toggle('active')
}

function fondo(){
    const elemento = document.getElementById('body');
    elemento.classList.toggle('bg2')
}

function panel_superior(){
    const elemento = document.getElementById('panel-superior');
    elemento.classList.toggle('active2')
}
