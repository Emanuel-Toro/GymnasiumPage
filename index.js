
window.alert("Bienvenido a mi página");
function calcular() {
    var peso = prompt("Cual es tu peso en (kg)");
    var altura = prompt("Cual es tu altura en (m)");;
    var IMC;
    IMC = peso / (altura * altura);

    if (IMC == 18.5) {
        alert("Resultado = "+IMC + " = Bajo peso");
    }
    if (IMC > 18.4 && IMC < 24.8) {
        alert("Resultado = "+IMC + " = Peso adecuado");
    }
    if (IMC > 24.9 && IMC < 29.8) {
        alert("Resultado = "+IMC + " = Sobrepeso");
    }
    if (IMC > 29.9 && IMC < 34.8) {
        alert("Resultado = "+IMC + " = Obesidad grado 1");
    }
    if (IMC > 34.9 && IMC < 39.8) {
        alert("Resultado = "+IMC + " = Obesidad grado 2");
    }
    if (IMC > 40){
        alert("Resultado = "+IMC+" = Obesidad mórbida");
    }

}