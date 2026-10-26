function Snake(longitud,direccion,x,y) {
    this.longitud = longitud;
    this.direccion = direccion;
    this.x = x;
    this.y = y;
}

const serpiente = new Snake(1,"derecha",0,0);

let intervalSerpiente;
let intervalManzana;
let jugando = false;
let snake = [];
let dificultadActual;
let derrotado = false;

function reiniciarSerpiente(){
    snake = [];
    serpiente.x = 0;
    serpiente.y = 0;
    serpiente.longitud = 1;
    serpiente.direccion = "derecha";
}

document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W'){
        if(serpiente.direccion == "abajo"){

        }else{
            serpiente.direccion = "arriba"
        }
        //console.log(serpiente.direccion);
    }else if(event.key === 'ArrowDown' || event.key === 's' || event.key === 'S'){
        if(serpiente.direccion == "arriba"){

        }else{
            serpiente.direccion = "abajo"
        }
        serpiente.direccion = "abajo"
        //console.log(serpiente.direccion);
    }else if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'){
        if(serpiente.direccion == "derecha"){

        }else{
            serpiente.direccion = "izquierda"
        }
        //console.log(serpiente.direccion);
    }else if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        if(serpiente.direccion == "izquierda"){

        }else{
            serpiente.direccion = "derecha"
        }
        //console.log(serpiente.direccion);
    }else if(event.key === 'Escape'){
        if(jugando){
            document.getElementById("pausa").toggleAttribute("hidden");
            document.getElementById("tablero").toggleAttribute("hidden");
            pausar()
        }
    }
});
pintarSerpiente();
function pintarSerpiente(){
    let posicion = String(serpiente.x) + String(serpiente.y);
    snake.push(posicion);
    if(document.getElementById(posicion).style.backgroundColor === 'red'){
        serpiente.longitud= serpiente.longitud+1;
    }else if(document.getElementById(posicion).style.backgroundColor === 'black'){
        derrota();
    }
    document.getElementById(posicion).style.backgroundColor = 'black';
};
function borrarSerpiente(){
    if(snake.length == serpiente.longitud){
        let posicion = snake.shift();
        document.getElementById(posicion).style.backgroundColor = 'white';
    }
    
};
function moverSerpiente(){
    borrarSerpiente()
    if(serpiente.direccion === "arriba"){
        if(serpiente.x>0){
            serpiente.x = serpiente.x -1;
            pintarSerpiente();
        }else{
            derrota()
        }
    }else if(serpiente.direccion === "izquierda"){
        if(serpiente.y>0){
            serpiente.y = serpiente.y -1;
            pintarSerpiente();
        }else{
            derrota()
        }
    }else if(serpiente.direccion === "derecha"){
        if(serpiente.y<9){
            serpiente.y = serpiente.y +1;
            pintarSerpiente();
        }else{
            derrota()
        }
    }else if(serpiente.direccion === "abajo"){
        if(serpiente.x<9){
            serpiente.x = serpiente.x +1;
            pintarSerpiente();
        }else{
            derrota()
        }
    }
};
function randomCasilla(){
    let random = 0;
    do{
        random = Math.floor(Math.random() * 99)
        if (random < 10){
            random = 0 + String(random);
        }
    }while(document.getElementById(random).style.backgroundColor === 'red' || document.getElementById(random).style.backgroundColor === 'black');
    return String(random);
};
function generarManzana(){
    let casilla = randomCasilla();
    document.getElementById(casilla).style.backgroundColor = 'red';
};

function jugar(dificultad){
    document.getElementById("menu").toggleAttribute("hidden");
    document.getElementById("tablero").toggleAttribute("hidden");
    jugando = true;
    dificultadActual=dificultad;
    if (!intervalSerpiente) {
        intervalSerpiente = setInterval(() => {
                            moverSerpiente();
                            }, dificultad);
    }
    if (!intervalManzana) {
        intervalManzana = setInterval(()=>{
                            generarManzana();
                            },5000);
    }  
};
function pausar(){
    jugando = false;
    clearInterval(intervalSerpiente);
    clearInterval(intervalManzana);
    intervalSerpiente = null;
    intervalManzana = null;
};
function reanudar(){
    jugando = true;
    document.getElementById("pausa").toggleAttribute("hidden");
    document.getElementById("tablero").toggleAttribute("hidden");
    setTimeout(2000);
    if (!intervalSerpiente) {
        intervalSerpiente = setInterval(() => {
                            moverSerpiente();
                            }, dificultadActual);
    }
    if (!intervalManzana) {
        intervalManzana = setInterval(()=>{
                            generarManzana();
                            },5000);
    }  
};
function derrota(){
    pausar();
    document.getElementById("tablero").toggleAttribute("hidden");
    document.getElementById("derrota").toggleAttribute("hidden");
    vaciarTablero()
    derrotado=true;
};
function menuPrincipal(){
    reiniciarSerpiente()
    vaciarTablero()
    if(derrotado == true){
        document.getElementById("derrota").toggleAttribute("hidden");
        derrotado = false;
    }else{
        document.getElementById("pausa").toggleAttribute("hidden");
    }
    document.getElementById("menu").toggleAttribute("hidden");
};
function reiniciar(){
    vaciarTablero()
    reiniciarSerpiente();
    document.getElementById("pausa").toggleAttribute("hidden");
    document.getElementById("menu").toggleAttribute("hidden");
    jugar(dificultadActual);
};
function vaciarTablero(){
    const casillas = document.querySelectorAll(".casilla");
                        casillas.forEach(casilla => {
                            casilla.style.backgroundColor = 'white';
                        });
};

