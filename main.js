

// // /**************************************************************/

// Primera pre-entrega -- Simulador de impuestos

function calcularImpuestos(ValorBase, ImpPais = 0.30, ImpGanancias = 0.45, ImpBP = 0.25){
    let impuestos = ValorBase * ImpPais + ValorBase * ImpGanancias + ValorBase * ImpBP
    alert("La suma de sus impuestos es " + impuestos)
    return ValorBase + impuestos
}

let confirmacion
do {
    let valorProducto = parseFloat(prompt("Ingrese el valor del producto y reciba el total con impuestos"))

    let costoTotal = calcularImpuestos(valorProducto, 0.30, 0.45, 0.25)
    alert("El costo total es " + costoTotal)

    let respuesta = prompt("¿Desea realizar otra operacion?").toLowerCase

    if(respuesta == "no") {
        confirmacion = false
    }
} while (confirmacion == true)



/**************************************************************/

// Segunda pre-entrega -- Array de objetos, Carrito de productos

// class producto {
//     constructor(titulo, descripcion, precio, stock){
//         this.titulo = titulo,
//         this.descripcion = descripcion,
//         this.precio = precio,
//         this.stock = stock
//     }
// }

// const producto1 = new producto("Gel de limpieza", "Limpia y elimina impurezas", 2590, 20)
// const producto2 = new producto("Serum H", "Hidrata y retrasa el envejecimiento de la piel", 3250, 15)
// const producto3 = new producto("Crema hidratante", "Ilumina y mantiene la humedad de la piel", 2890, 30)
// const producto4 = new producto("Crema humectante", "Mejora la elasticidad de la piel", 2000, 45)
// const producto5 = new producto("Protector solar", "Protege la piel de los rayos UV sin acabado oleoso", 5200, 20)


// const productos = [producto1, producto2, producto3, producto4, producto5]

// console.table(productos)

// let nombreProducto = prompt("Ingrese el producto deseado").toLowerCase()

// const indice = productos.findIndex(item => item.titulo.toLowerCase() === nombreProducto)

// if(indice != -1){
//     console.log("Producto disponible")
//     console.log(productos[indice])
// } else{
//     console.log("Producto no disponible")
// }