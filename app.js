//======================================
// CONFIGURACIÓN FIREBASE
//======================================

const firebaseConfig =
{
    apiKey: "AIzaSyDKrY0YFxSpzsy5gYKFSwTz60AA2zmMTBE",
    authDomain: "temperatura-esp32-bd68c.firebaseapp.com",
    databaseURL: "https://temperatura-esp32-bd68c-default-rtdb.firebaseio.com",
    projectId: "temperatura-esp32-bd68c",
    storageBucket: "temperatura-esp32-bd68c.firebasestorage.app",
    messagingSenderId: "941827526197",
    appId: "1:941827526197:web:cd61466118474ecc6beb7c"
};

//======================================
// INICIALIZAR FIREBASE
//======================================

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//======================================
// ACTUALIZAR TERMÓMETRO
//======================================

function actualizarTermometro(temp)
{

    if(temp < 0)
        temp = 0;

    if(temp > 150)
        temp = 150;

    document.getElementById("temperatura").innerHTML =
    temp.toFixed(1) + " °C";

    let porcentaje = (temp / 150) * 100;

    document.getElementById("barra").style.height =
    porcentaje + "%";

}

//======================================
// ESPERANDO DATOS
//======================================

document.getElementById("temperatura").innerHTML =
"-- °C";

//======================================
// LEER TEMPERATURA DE FIREBASE
//======================================

database.ref("temperatura").on("value", function(snapshot)
{

    let temp = snapshot.val();

    if(temp != null)
    {
        actualizarTermometro(parseFloat(temp));
    }

});