alert("Bienvenido a LCTOOLS");
let option = prompt("Elija una opción: \n1) Liquidador de impuestos Aduana - Importación\n2) Conversor de unidades\n0) Salir")

while (option != 0){
    switch(option){
        case "1":
            /*Aplicativo para calculo de derechos a pagar en aduana para oficializar el despacho de importación*/
            alert("Liquidador de impuestos Aduana - Importación");
            let fobprice= Number (prompt ("Ingrese el valor FOB de la mercadería a importar:"));
            let freightprice = Number(prompt ("Ingrese el valor del flete:"));
            let importduties = Number(prompt ("Ingrse los derechos de importación:"));
            let icustomsduties=iduties(fobprice, freightprice, importduties);
            alert("Monto a cancelar en aduana: "+icustomsduties);
            break;

        case "2": 
            /*Aplicativo de conversión de unidades de uso habitual en la operatoria de comercio exterior*/
            alert ("Conversor de unidades COMEX - longitud, peso, volumen");
            let unit = prompt ("Ingrese la opción de la magnitud a convertir:\n1) Longitud\n2) Peso\n3) Volumen\n0) Salir");
            while ( unit != 0){
                let valuetoC= Number(prompt ("Ingrese el valor a convertir: "));
                alert("El valor de "+ converter(valuetoC, unit));
                unit = prompt ("Ingrese la opción de la magnitud a convertir:\n1) Longitud\n2) Peso\n3) Volumen\n0) Salir");
            }
            break;
        default:
            alert("La opción ingresada no es correcta");
            break;
    }
    option = prompt ("Elija una opción: \n1) Liquidador de impuestos Aduana - Importación\n2) Conversor de unidades\n0) Salir")
}


function iduties(fp, frp, id){
    
    let cif = ((fp+frp)+(fp+frp)*0.01);
    let baseiva= cif+(cif*(id/100))+cif*0.005;
    let total = (baseiva*0.21)+(baseiva*0.2)+(baseiva*0.06)+(baseiva*0.03)+(cif*(id/100))+10+28+cif*0.005;
    return total;
}

function converter (val, optC){
        let lunit = "";
        switch (optC){
            case "1":
                lunit = prompt ("Elija la opción de conversión de unidad de longitud:\na) pulgadas a cm,\nb) cm a pulgadas");
                do {
                    if (lunit == "a"){
                        let unitC = val * 2.54;
                        return unitC+"cm";
                    } else if (lunit =="b"){
                        unitC = val / 2.54;
                        return unitC+"\"" 
                    } else{
                        alert("La opción es incorrecta");
                        lunit = prompt ("Elija la opción de conversión de unidad de longitud:\na) pulgadas a cm,\nb) cm a pulgadas");
                    }
                } while (( lunit !="a") || (lunit != "b"));
                brake;

            case "2":
                lunit = prompt ("Elija la opción de conversión de unidad de peso:\na) libras a kg,\nb) kg a libras");
                do {
                    if (lunit == "a"){
                        unitC = val * 0.4545;
                        return unitC+"kg";
                    } else if (lunit == "b"){
                        unitC = val / 0.4545;
                        return unitC+"lb" 
                    } else{
                        alert("La opción es incorrecta");
                        lunit = prompt ("Elija la opción de conversión de unidad de peso:\na) libras a kg,\nb) kg a libras");
                    }
                } while (( lunit != "a") || (lunit != "b"));
                brake;

            case "3":
                lunit = prompt ("Elija la opción de conversión de unidad de volumen:\na) ft3 o cu ft a m3 o CBM,\nb) m3 o CBM a ft3 o cu ft");
                do {
                    if (lunit == "a"){
                        unitC = val * 0.4545;
                        return unitC +"m3 o CBM"
                    } else if (lunit == "b"){
                        unitC = val / 0.4545;
                        return unitC +"ft3 o cu ft" 
                    } else{
                        alert("La opción es incorrecta");
                        lunit = prompt ("Elija la opción de conversión de unidad de volumen:\na) ft3 o cu ft a m3 o CBM,\nb) m3 o CBM a ft3 o cu ft");
                    }
                } while (( lunit !="a") || (lunit != "b"));
                brake;
            default:
                alert("La opción ingresada no es correcta");
                brake;
        }
}