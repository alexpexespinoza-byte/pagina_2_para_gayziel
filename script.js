let numero = 0;
let sumador = 1;

const el_contador = document.getElementById("contador");
const el_mostrador_de_cps = document.getElementById("mostrador_de_cps")

document.getElementById("boton_1").addEventListener("click", function () {
    numero += sumador;
    el_contador.innerHTML = numero;
});