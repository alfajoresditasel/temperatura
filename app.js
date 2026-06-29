//==================================
// TEMPERATURA
//==================================

let temperatura = 0;

//==================================

function actualizarTermometro(temp)
{

    if(temp<0)
        temp=0;

    if(temp>150)
        temp=150;

    document.getElementById("temperatura").innerHTML =
    temp.toFixed(1)+" °C";

    let porcentaje=(temp/150)*100;

    document.getElementById("barra").style.height=
    porcentaje+"%";

}

//==================================

// SOLO PARA PRUEBAS

setInterval(function(){

    temperatura++;

    if(temperatura>150)
        temperatura=0;

    actualizarTermometro(temperatura);

},500);