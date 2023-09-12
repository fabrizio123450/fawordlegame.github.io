const mybutton = document.getElementById('guess-button');
const palabras = ["actor", "altar","arbol","ropas","manis"];
const indiceAleatorio = palabras [Math.floor(Math.random() * palabras.length)];
let intentos = 6;
console.log(indiceAleatorio);
const palabraD = indiceAleatorio.split('');
console.log(palabraD);
function wordlePPY(){
    const myInput = document.getElementById('guess-input').value;
    const myInputD = myInput.split('');
    for(let i = 0; i< palabraD.length; i++){
        console.log(palabraD[i]);
        for (let j = 0; i < myInputD.length; i++) {
            console.log(myInputD[j]);
            if(palabraD[i] === myInput[j]){
                console.log ("letra coincide");
            }else{
                console.log ("letra no coincide");
            }
            
        }
    }
    
    if(myInput.includes(indiceAleatorio)){
        console.log("GANASTE");
    }else{
        console.log("Te quedan "+ --intentos, "intentos");
    }
}