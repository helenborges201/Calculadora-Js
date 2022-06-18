let numeros = document.querySelectorAll(".numero");
let operadores = document.querySelectorAll(".operador")
let resultado = document.querySelector("#resultado");



// Colocando valores na tela 
for(let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", () => {
        resultado.innerHTML += numeros[i].value.toString()
       
    });
};

// Colocando operadores na tela
for(let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener("click", () => {
        if(operadores[i].value != "=" && operadores[i].value != "c" && operadores[i].value != "=>") {
            resultado.textContent += operadores[i].value

        } else if(operadores[i].value == "=>"){
            apagar()
        }
         else if (operadores[i].value == "=") {
            Calcular()
        } else if(operadores[i].value == "c") {
            zerar()
        }
    })
}

function Calcular() {
    resultado.textContent = Function("return " + resultado.textContent)();
}

function apagar() {
    resultado.textContent = resultado.textContent.slice(0, -1)
}
function zerar() {
    resultado.textContent = ""
}