alert("Bienvenido. Elija la opción deseada: \n1) Calculador de intereses de plazo fijo e interes compuesto\n2) Calculadora de actualización de valor alquiler")
let opcion = Number(prompt("Ingrese opción\n\n1) Calculador de intereses de plazo fijo e interes compuesto\n2) Calculadora de actualización de valor alquiler"))

if ( opcion != 1 && opcion != 2 && opcion != 3  ){
    alert("la opción ingresada es incorrecta:"+" "+opcion+" "+"Ingrese nuevamente la opción ")
    do{
        opcion = Number(prompt("Ingrese opción\n\n1) Calculador de intereses de plazo fijo e interes compuesto\n2) Calculadora de actualización de valor alquiler"))
    } while(opcion != 1 && opcion != 2 && opcion != 3)
}
    while (opcion != 0){
        switch (opcion){
        case 1: 
            plazoFijo();
        break
        case 2: 
            actualizacionAlquiler();
        break
        case 3: 
            
        break
        default:
            alert ("La opción ingresada es incorrecta")
        break
        }
        opcion = Number(prompt("Ingrese opción\n\n1) Calculador de intereses de plazo fijo e interes compuesto\n2) Calculadora de actualización de valor alquiler\n0) Para salir"))
    }   


function plazoFijo (){

    let monto
    let interesPlazoFijo
    let meses

    do{
        monto = Number(prompt ("Monto Inicial:"))
    } while ( monto<=0 )
   
    do {
        interesPlazoFijo = Number(prompt ("Ingrese porcentaje plazo fijo:"))
        
    } while (interesPlazoFijo<=0)
    
    

    do {
        meses = Number(prompt ("Ingrese meses de permanencia:"))
        
    } while (meses<=0)

    let plazoFijoRatioMensual = (interesPlazoFijo/100)/12
    let resultadoPlazoFijo = (monto*plazoFijoRatioMensual*meses)+monto
    let interesCompuesto = monto* (Math.pow(1+plazoFijoRatioMensual,meses))
   
    

    alert("Resultado de plazo fijo de"+" "+meses+" es: "+resultadoPlazoFijo+"\nEl interes compuesto es: "+interesCompuesto.toFixed(2))
}

function actualizacionAlquiler(){
    
    alert("Por favor, visite el siguiente link https://www.bcra.gob.ar para encontrar el ICL")
    
    let iclInicial = Number(prompt ("Indice ICL inicial o de la última renovación:"))
    if (iclInicial <= 0){
        alert("El valor del ICL no puede ser menor o igual a cero")
        do{
        
            iclInicial = Number(prompt ("Indice ICL inicial o de la última renovación:"))

        }while (iclInicial<=0)
    }

    let iclActualizado = Number(prompt ("Indice ICL actualizado:"))
    if (iclActualizado <= 0){
        alert("El valor del ICL no puede ser menor o igual a cero")
        do{
        
            iclActualizado = Number(prompt ("Indice ICL actualizado:"))
        }while (iclActualizado<=0)
    }

    let valorAlquiler = Number(prompt ("Valor actual de Alquiler:"))
    if (valorAlquiler <= 0){
        alert("El valor ser menor o igual a cero")
        do{
            valorAlquiler = Number(prompt ("Valor actual de Alquiler:"))
        }while (valorAlquiler<=0)
    }

    let valorActualizado = valorAlquiler*(iclActualizado/iclInicial)

    alert ("Valor de alquiler actualizado:"+valorActualizado.toFixed(2))

}