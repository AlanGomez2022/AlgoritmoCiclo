alert("Bienvenido a EntradasAlan.com");
alert("Comencemos con el proceso de reserva de entradas");
let cantEntradas=prompt("Ingrese cantidad de entradas que desea comprar");
let personas= "1- Nombre: "+prompt("Ingrese su nombre y apellido:");
personas = personas +" DNI: "+ prompt ("Ingrese su DNI: ");
if (cantEntradas==1){
    alert("Su entrada se ha generado con los siguientes datos: \n"+personas);
}else{
    personas=personas+" - (entrada dominante)\n";
    for(let i=2;i<=cantEntradas;i++){
        personas= personas +i+"- Nombre: " + prompt("Ingrese nombre y apellido de la siguiente persona que lo acompañará: ");
        personas = personas +" DNI: "+ prompt ("Ingrese el DNI: ")+" \n";
    }
    alert("Se han generado "+cantEntradas+" entradas con los siguientes datos: \n"+personas+"\n\n Por favor contar con DNI en mano para ingresar el evento");    
}