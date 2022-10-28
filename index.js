const boton= document.getElementById("boton");
const ocultarvaca= document.getElementById("ocultarvaca");
const mostrarvaca= document.getElementById("mostrarvaca");
const seccionvaca= document.getElementById("seccionvacaciones");
const seccionvaca2= document.getElementById("seccionvacaciones2");
seccionvaca.setAttribute("style", "display:none;");
seccionvaca2.setAttribute("style", "display:none;");

ocultarvaca.addEventListener('click',() => {
    console.log("hola")
    seccionvaca.setAttribute("style", "display:none;");
    seccionvaca2.setAttribute("style", "display:none;");
})
mostrarvaca.addEventListener('click',() => {
    console.log("hola")
    seccionvaca.setAttribute("style", "display:block;");
    seccionvaca2.setAttribute("style", "display:block;");
})

boton.addEventListener('click', () => {
/*nombre y apellido*/
var nombre= document.getElementById("nombre").value;
document.getElementById("empleado").innerHTML= 'Liquidacion de: ' + nombre;
    /*Sueldo bruto*/
    /*Declaracion de variables*/
    var descuentofaltas= 0;
    var horaslaborales= 192;
    let faltas= document.getElementById("faltas").value;
    let faltaslicencia= document.getElementById("faltaslicencia").value;
    var horasextra50= document.getElementById("horasextra50").value;
    var horasferiado= document.getElementById("feriadoshora").value;
    var horasextra100= document.getElementById("horasextra100").value;
    let sueldo= document.getElementById("sueldobasico").value;
    let antiguedad= document.getElementById("antiguedad").value;
    let feriadostrabajados= document.getElementById("feriadostrabajados").value;
    var valorhora= sueldo/horaslaborales;
    var antiguedadcuenta= antiguedad*sueldo/100;
    var cct = 10*sueldo/100
    faltas - faltaslicencia; 
    var aguinaldo= document.getElementById("aguinaldo").value; 
        aguinaldo=aguinaldo/2
    /*dias no trabajados justifcados y no*/
    document.getElementById('diasnotrabajadosuni').innerHTML= faltas;
    document.getElementById('licenciauni').innerHTML= faltaslicencia;
    var descuentohoras = (faltas*8) * valorhora
    document.getElementById('diasnotrabajadosdescu').innerHTML= '-'+ descuentohoras.toFixed(2);
    sueldo = sueldo-descuentohoras;

    /*Insertamos en el HTML algunos valores*/
    document.getElementById('sueldobasicoremu').innerHTML=sueldo.toFixed(2);
    document.getElementById('antiguedadunidad').innerHTML=antiguedad;
    document.getElementById('antiguedadcuenta').innerHTML=antiguedadcuenta;
    /*Calculamos el presentimos*/
    if (faltas==0){
        var descuentofaltas= 25;
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltas==1){
        var descuentofaltas= 20;
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltas==2){
        var descuentofaltas= 15;
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltas==3){
        var descuentofaltas=10;
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltas==4){
        var descuentofaltas=5;
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltas>=5){
        var descuentofaltas=0;
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltaslicencia==1){
        descuentofaltas= descuentofaltas-5
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltaslicencia==2){
        descuentofaltas= descuentofaltas-10
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltaslicencia==3){
        descuentofaltas= descuentofaltas-15
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
        if (faltaslicencia==4){
        descuentofaltas= descuentofaltas-20
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (faltaslicencia==5){
        descuentofaltas= descuentofaltas-25
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }
    if (descuentofaltas<0){
        descuentofaltas= 0
        document.getElementById('porcentajepresentismo').innerHTML=descuentofaltas + '%';
        /*Se realizan las cuentas de los porcentajes a descontar y se agregan al HTML*/
        var presentismo= descuentofaltas*sueldo/100;
        document.getElementById('presentimremu').innerHTML= presentismo.toFixed(2);
    }

    /*Calculos y variables para las horas extra del 50% y 100%*/
    document.getElementById('feriadosuni').innerHTML= feriadostrabajados;
    var sumal50= valorhora*1.50
    var sumal100= valorhora*2
    var totalhorasal50 = horasextra50*sumal50;
    var totalhorasal100 = horasextra100*sumal100 + horasferiado*sumal100;
    var totalhorasextra= totalhorasal50 + totalhorasal100;
    var horastotales= parseFloat(horasextra100) + parseFloat(horasextra50)+ parseFloat(horasferiado);
    document.getElementById('horasextraunidad').innerHTML= horastotales;
    document.getElementById('horasextraremu').innerHTML=totalhorasextra.toFixed(2);
    /*Agregamos al HTML el 10% del CCT*/
    document.getElementById('CCT').innerHTML= cct;
    /*Sumamos todos los valores para el sueldo bruto*/
    var totalremu= parseFloat(sueldo) + parseFloat(antiguedadcuenta) + 
    parseFloat(presentismo) + parseFloat(cct) + parseFloat(totalhorasextra.toFixed(2))
    /*Agregamos el sueldo bruto al HTML*/
    document.getElementById('sueldobruto').innerHTML= totalremu.toFixed(2);
    /*Aguinaldo*/
    document.getElementById('aguinaldoremu').innerHTML= aguinaldo;
    /*Descuentos */
    /*Declaracion de variables para la obra social*/
    let hijosobrasocial= document.getElementById("hijosobrasocial").value;
    let parejaobrasocial= document.getElementById("parejaobrasocial").value;
    let obrasocialcuenta= (3*sueldo/100) + (hijosobrasocial*1.5*sueldo/100) + (parejaobrasocial*1.5*sueldo/100)
    /*Insertamos los valores de la obra social al HTML*/
    document.getElementById('obrasocialuni').innerHTML= parseFloat(hijosobrasocial) + parseFloat(parejaobrasocial) + parseFloat(1);
    document.getElementById('obrasocialremu').innerHTML= '-' + obrasocialcuenta;
    /*Checkeamos que el boton de afiliado al sindicato este pulsado y agregamos al HTML*/
    if(document.querySelector('input[id="sindicatosi"]:checked')){
        document.getElementById('sindicatouni').innerHTML= 'si';
        var sindicatoremu = 2.5*sueldo/100;
        document.getElementById('sindicatoremu').innerHTML= '-'+ sindicatoremu.toFixed(2);
    }
    else{
        document.getElementById('sindicatouni').innerHTML= 'no';
        var sindicatoremu = 0;
        document.getElementById('sindicatoremu').innerHTML= '-'+ sindicatoremu.toFixed(2);
    }
    /*Declaracion de variables de la jubilacion e insercion al HTML*/
    var jubilacion= 11*sueldo/100;
    document.getElementById('jubilacion').innerHTML= '-'+ jubilacion.toFixed(2);
    /*Declaracion de variables del INNSJP e insercion al HTML*/
    var INNSJP= 3*sueldo/100;
    document.getElementById('INNSJP').innerHTML= '-'+ INNSJP;
    /*Calculamos el total de todos los duescuentos*/
    var totaldes= parseFloat(obrasocialcuenta) +
    parseFloat(sindicatoremu) + parseFloat(jubilacion) + parseFloat(INNSJP) + parseFloat(presentismo) 
    /*Declaramos la variable donde se guarda el suelo neto*/
    var sueldoneto= parseFloat(totalremu) - parseFloat(totaldes)+ parseFloat(aguinaldo);
    /*Se agrega los descuentos y el sueldo neto al HTML*/
    document.getElementById('totaldes').innerHTML= '-' + totaldes.toFixed(2);
    document.getElementById('neto').innerHTML= sueldoneto.toFixed(2) ;
    


/*VACACIONES*/
var vacacionesunidad= document.getElementById("vacaciones").value;
if(document.querySelector('input[id="semanas"]:checked')){

    document.getElementById('vacas').innerHTML= 'Semanas';
    if(vacacionesunidad<4 ){
        document.getElementById('vacacionesunidad').innerHTML="0";
        var diasvaca= 0;

        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=4 && vacacionesunidad <=7){
        document.getElementById('vacacionesunidad').innerHTML="1";
        var diasvaca= 1;

        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=8 && vacacionesunidad <=11){
        document.getElementById('vacacionesunidad').innerHTML="2";
        var diasvaca= 2;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=12 && vacacionesunidad <=15){
        document.getElementById('vacacionesunidad').innerHTML="3";
        var diasvaca= 3;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=16 && vacacionesunidad <=19){
        document.getElementById('vacacionesunidad').innerHTML="4";
        var diasvaca= 4;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=20){
        document.getElementById('vacacionesunidad').innerHTML="5";
        var diasvaca= 5;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=24 && vacacionesunidad<=240){
        document.getElementById('vacacionesunidad').innerHTML="14";
        var diasvaca= 14;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
}

if(document.querySelector('input[id="anios"]:checked')){
    document.getElementById('vacas').innerHTML= 'Años';
    
    
    if(vacacionesunidad<=5){
        document.getElementById('vacacionesunidad').innerHTML="14";
        var diasvaca= 14;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=5 && vacacionesunidad<=10){
        document.getElementById('vacacionesunidad').innerHTML="21";
        var diasvaca= 21;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=10 && vacacionesunidad<=20){
        document.getElementById('vacacionesunidad').innerHTML="28";
        var diasvaca= 28;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    if(vacacionesunidad>=20){
        document.getElementById('vacacionesunidad').innerHTML="35";
        var diasvaca= 35;
        var vacacionesremu= totalremu/25 * diasvaca;
        document.getElementById('vacacionesremu').innerHTML=vacacionesremu.toFixed(2);
    }
    
}

});
