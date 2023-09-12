const mybutton = document.getElementById('guess-button');
const palabras = ["actor", "altar","arbol","ropas","manis"];
const htmPalabra = document.getElementById('palabra');
const indiceAleatorio = palabras [Math.floor(Math.random() * palabras.length)];
let intentos = 6;
console.log(indiceAleatorio);
const palabraD = indiceAleatorio.split('');
console.log(palabraD);
 // Crear un nuevo elemento div
 const nuevoDiv = document.createElement("div");

 // Crear un nuevo párrafo
 const nuevoParrafo = document.createElement("p");
 nuevoParrafo.textContent = "Este es un nuevo párrafo";

 // Agregar el párrafo al div
 nuevoDiv.appendChild(nuevoParrafo);

 // Agregar el div al documento, por ejemplo, al cuerpo (body)
 document.body.appendChild(nuevoDiv);

function wordlePPY(){
   

    const myInput = document.getElementById('guess-input').value;
    const myInputD = myInput.split('');
    console.log(myInputD);
    let verdadero;
    for(let i = 0; i< palabraD.length; i++){
        console.log(palabraD[i]);
        verdadero = false;
        for (let j = 0; j < myInputD.length; j++) {
            
            if(myInput[j] === palabraD[i]){
                console.log ("letra coincide");
                if(j === i){
                    console.log("letra verde");
                    /*htmPalabra.appendChild = palabraD[i];
                    const nuevoParrafo = document.createElement("p");
                    nuevoParrafo.textContent = palabraD[i];
                    nuevoDiv.appendChild(nuevoParrafo);*/
                }else{
                    console.log("letra amarilla");
                }
                verdadero = true;
            }
            
        }
        if(!verdadero){
            console.log("no usar "+ myInput[j]);
            console.log ("letra no coincide");
        }
    }
    
    if(myInput.includes(indiceAleatorio)){
        console.log("GANASTE");
    }else{
        console.log("Te quedan "+ --intentos, "intentos");
    }
}