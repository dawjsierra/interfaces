function comprobarContrasena(){
    //recogemos el nombre de usuario pasado por el boton de formulario
    var strUsuario = document.getElementById("usuario").value;
    //recogemos el valor de contraseña pasado por el boton de formulario
    var strContr = document.getElementById("password").value;
    //creamos una cadena con mayusculas
    var mayus = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    //creamos una cadena con minusculas
    var minus = "abcdefghijklmnñopqrstuvwxyz";
    //creamos una cadena con digitos
    var nums = "0123456789";
    //creamos una cadena con los caracteres especiales indicados
    var esp = "-_@#$%&";
    //booleanos inicializados a false. Si coinciden = true
    var longitud = false;
    var mayuscula = false;
    var minuscula = false;
    var caracEsp = false;
    var numeros = false;

    //comprobar longitud contraseña
    if(strContr.length > 7 && strContr.length<17){
        longitud = true;
    }

    //comprobar mayusculas. Lo comparamos con la cadena de mayusculas
    //¿Coincide algun caracter entre ellas? mayusculas pasa a true
    for(var i = 0; i<=strContr.length-1;i++){
        for(var j = 0; j<=mayus.length-1;j++){
            if(strContr[i] === mayus[j]){
                mayuscula = true;
            }
        }
    }

    //comprobar minusculas, mismo funcionamiento que el anterior, pero con minusculas
    for(var i = 0; i<=strContr.length-1;i++){
        for(var j = 0; j<=minus.length-1;j++){
            if(strContr[i] === minus[j]){
                minuscula = true;
            }
        }
    }

    //comprobar digitos
    for(var i = 0; i<=strContr.length-1;i++){
        for(var j = 0; j<=nums.length-1;j++){
            if(strContr[i] === nums[j]){
                numeros = true;
            }
        }
    }

    //comprobar caracteres especiales
    for(var i = 0; i<=strContr.length-1;i++){
        for(var j = 0; j<=esp.length-1;j++){
            if(strContr[i] === esp[j]){
                caracEsp = true;
            }
        }
    }

    //si todas las variables están en true, quiere decir que la contraseña es segura
    if(mayuscula && caracEsp && minuscula && numeros && longitud){
        alert ("HOLA "+strUsuario+"CONTRASEÑA SEGURA!");
    }else{
        //si todas las variables booleanas no son true, aquí te dice en que criterio(s) has fallado
        if(!longitud){
            alert("ERROR: La contraseña debe contener minimo 8 caracteres y máximo 16 caracteres");
        }
        if(!mayuscula){
            alert("ERROR: La contraseña debe contener mínimo una letra MAYÚSCULA");
        }
        if(!minuscula){
            alert("ERROR: La contraseña debe contener mínimo una letra MINÚSCULA");
        }
        if(!caracEsp){
            alert("ERROR: La contraseña debe contener mínimo un CARACTER ESPECIAL (@-_#%&$)");
        }
        if(!numeros){
            alert("ERROR: La contraseña debe contener mínimo un DÍGITO");
        }
    }
}


function init(){
    var actividades = ["Crossfit","Zumba","Bodypump","Spinning","Pilates","Yoga"];
                var fisios = ["Marta","Marcos","Sergio","Laura","Ivan","Pablo"];

                
                var tablaAct = document.getElementById("tablaActividades");
                var tablaFisios = document.getElementById("tablaFisios");
                tablaAct.setAttribute("border",1);
                tablaFisios.setAttribute("border",1);

                var filasAct = tablaAct.getElementsByTagName("tr");
                var filasFis = tablaFisios.getElementsByTagName("tr");

                //tabla de actividades
                for(var i = 1; i<7;i++){//filas
                    for(j = 1; j<7;j++){//columnas
                        if(i%2==0){
                            filasAct[i].innerHTML += "<td>"+actividades[i-1]+"</td>";
                        }else{
                            filasAct[i].innerHTML += "<td>"+actividades[j-1]+"</td>";
                        }
                    }
                }

                //tabla de fisios
                for(var i = 1; i<11;i++){//filas
                    for(j = 1; j<6;j++){//columnas
                        if(i%2==0){
                            filasFis[i].innerHTML += "<td>"+fisios[i/2]+"</td>";
                        }else{
                            filasFis[i].innerHTML += "<td>"+fisios[j-1]+"</td>";
                        }
                    }
                }
}

function mostrarAct(){
    var activ = document.getElementsByName("actividades");
    var tablaActiv = document.getElementById("tablaActividades");
    var celdasActiv = tablaActiv.getElementsByTagName("td");
    var selects = [];
    
    //Recoge los valores marcados y los mete en un array
    for(var i = 0; i<activ.length;i++){
        if(activ[i].checked==true){
            selects.push(activ[i].value);
        }
    }

    //Tenemos el array. Machacamos el estilo de las celdas, así no se nos acoplarán las celdas seleccionadas si queremos volver a elegir otras distintas...
    for(var i = 0; i<=5;i++){
        for(var j=0; j<=celdasActiv.length-1;j++){
            celdasActiv[j].style.backgroundColor="white";
            celdasActiv[j].style.color="black";
            celdasActiv[i].style.fontWeight="normal";
        }
    }

    //Recorremos for de celdas y el de los valores. Les damos el estilo.
    for(var i = 0; i<=celdasActiv.length-1;i++){
        for(var j = 0; j<=selects.length-1;j++){
            if(celdasActiv[i].innerHTML == selects[j]){
                celdasActiv[i].style.backgroundColor="black";
                celdasActiv[i].style.color="gold";
                celdasActiv[i].style.fontWeight="bold";
            }
        }
    }
}

function mostrarFis(){
    //Variable fisio para recoger los elementos con nombre "fisio" del documento
    var fisio = document.getElementsByName("fisio");
    //Variable tablaFisios para recoger el elemento por ID "tablafisios" del documento
    var tablaFisios = document.getElementById("tablaFisios");
    //Recogemos todas las celdas (td) de la tabla anterior
    var celdasFisios = tablaFisios.getElementsByTagName("td");
    var seleccionado = "";

    //Recogemos valor seleccionado
    for(var i = 0; i<fisio.length;i++){
        if(fisio[i].checked==true){
            //Si coincide (checked) es true y lo almacena en "seleccionado"...
            seleccionado =fisio[i].value;
        }
    }

    //recorremos el array de celdas
    for(var i = 0; i<=6;i++){
        for(var j=0;j<=celdasFisios.length-1;j++){
            //Si coincide con el valor guardado aplicamos estilo...
            if(celdasFisios[j].innerHTML == seleccionado){
                celdasFisios[j].style.backgroundColor="black";
                celdasFisios[j].style.color="gold";
                celdasFisios[j].style.fontWeight="bold";
                celdasFisios[j].style.textAlign="center";
            }else{
                //en este caso, al solo poder seleccionar 1, no hace falta machacar el estilo. Si no coincide, entonces...
                celdasFisios[j].style.backgroundColor="white";
                celdasFisios[j].style.color="black";
                celdasFisios[j].style.textAlign="center";
                celdasFisios[i].style.fontWeight="normal";
            }
        }
    }
}


function calcularfcm(){
    var edad;
    var sexo;
    var aux;
    //He creado un patrón que solo pueda ser H o M, porque no sabía si se podían comparar cadenas como en Java.
    //En cualquier caso... Funciona.
    var patSexo = /[MH]/;
    
    //Mientras que edad sea una cadena... Lo va a pedir
    do{
        edad = parseInt(prompt("Introduzca su edad:"));
    }while(isNaN(edad)==true);
    

    //Mientras la comprobación del patrón de false, lo pedirá
    do{
        sexo = prompt("Introduzca su sexo. Hombre (H) - Mujer (M)");
        aux = patSexo.test(sexo);
    }while( aux==false);
    
    //Almacenamos y calculamos la fcm
    var fcm = 220 - edad;
    

    //Calculamos porcentajes
    var sesenta = fcm*0.6;
    //Fijamos los decimales a dos
    sesenta = sesenta.toFixed(2);
    var setenta = fcm*0.7;
    setenta = setenta.toFixed(2);
    var ochenta = fcm*0.8;
    ochenta = ochenta.toFixed(2);
    var noventa = fcm*0.9;
    noventa = noventa.toFixed(2);


    //En li, almacenamos todos los elementos <li> del documento
    var ul = document.getElementById("listafcm");
    var li = ul.getElementsByTagName("li");
    //Nos creamos una variable para indicar la FCM de cada usuario...
    var tufcm = document.createTextNode(fcm);

    //Accedemos al array de li mediante [posicion] y con .innerHTML añadimos la frase
    li[0].innerHTML += sesenta +" - "+setenta;
    li[1].innerHTML += setenta +" - "+ochenta;
    li[2].innerHTML += ochenta +" - "+noventa;
    li[3].innerHTML += noventa +" - "+fcm;
    document.getElementById("fcmpersonal").appendChild(tufcm);
    document.getElementById("body").appendChild(tabla);
}
