
/*let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let operacion = prompt("Ingrese la operacion(+,-,*,/")
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))

switch (operacion){
    case "+":
        alert("El resultado de la suma es:"+ (numero1 + numero2))
        break
    case "-":
        alert("El resultado de la resta es:"+ (numero1 - numero2))
        break
    case "*":
        alert("El resultado de la multiplicacion es:"+ (numero1 * numero2))
        break
    case "/":
        alert("El resultado de la division es:"+ (numero1 / numero2))
        break
    default:
        alert("La operación ingresada no es válida")
}*/


function calcularImpuestos(ValorBase, ImpPais = 0.30, ImpGanancias = 0.45, ImpBP = 0.25){
    let impuestos = ValorBase * ImpPais + ValorBase * ImpGanancias + ValorBase * ImpBP
    alert("La suma de sus impuestos es " + impuestos)
    return ValorBase + impuestos
}

let confirmacion = true

do {
    let valorProducto = parseFloat(prompt("Ingrese el valor del producto y reciba el total con impuestos"))

    let costoTotal = calcularImpuestos(valorProducto, 0.30, 0.45, 0.25)
    alert("El costo total es " + costoTotal)

    let respuesta = prompt("¿Desea realizar otra operacion?")

    if(respuesta == "no") {
        confirmacion = false
    }
} while (confirmacion == true)

