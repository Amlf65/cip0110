function esta_vacio(dato){
    if(dato.length==0){
        return true;
    }else{
        return false;
    }
}
function sololetras(dato){
    let abc="abcdefghijklmnopqrstuvwxyzáéíóúü";
    dato=dato.toLowerCase();
    let flag=true;
    for(let i=0;i<dato.length;i++){
        car=dato[i];
        pos=abc.indexOf(car)
        // console.log("car: "+car+ " pos: "+pos)
        if(pos==-1){
            flag=false;
        }
    }
    if(flag){
        return true
    }else{
        return false
    }
}
function dnivalido(dato){
    let letras="TRWAGMYFPDXBNJZSQVHLCKE"
    let car_dni=dato.substring(0,8)%23;
    let car_dat=dato.charAt(8).toUpperCase();
    if(letras[car_dni]==car_dat){
        return true;
    }else{
        return false;
    }
}
function fecha_valida(dato){
    dato=dato.replaceAll("-","/")
    let trozos=dato.split("/")
    let pos_b1=dato.indexOf("/")
    let pos_b2=dato.lastIndexOf("/")
    
    if(pos_b1==-1 || pos_b2==-1 || trozos.length!=3){
        return false
    }else{
        let dia=parseInt(dato.substring(0,pos_b1))
        let mes=parseInt(dato.substring(pos_b1+1,pos_b2))
        // console.log(nombre_mes(mes))
        let ayo=parseInt(dato.substring(pos_b2+1))
        // console.log(dia+ "-" + mes+ "-" + ayo)
        flag=true
        flag_dia=false
        if (ayo<1000){flag=false}
        // console.log("flag1"+flag)
        if (mes<1 || mes>12) {flag=false}
        // console.log("flag2"+flag)
        if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && dia > 0 && dia <= 31)) {flag_dia=true}
        // console.log("flag"+flag_dia)
        if ((mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia > 0 && dia <= 30)) { flag_dia=true }
        // console.log("flag"+flag_dia)
        if ((mes == 2 && esBisiesto(ayo) && dia > 0 && dia <= 29)) { flag_dia=true }
        // console.log("flag"+flag_dia)
        if ((mes == 2 && !esBisiesto(ayo) && dia > 0 && dia <= 28)) { flag_dia=true}
        // console.log("flag"+flag_dia)
    }
    return flag && flag_dia
}
function esBisiesto(año) {
    if (año % 4 !== 0) {
        return false;
    } else if (año % 100 !== 0) {
        return true;
    } else if (año % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

function nombre_mes(dato){
    let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
    return meses[dato-1]
}

function nombre_dia(dato){
    let dias=["lunes","martes","miércoles","jueves","viernes","sábado","domingo"]
    return dias[dato-1]
}
function tel_valida(dato){
    let dato2=""
    for(i=0;i<dato.length;i++){
        if(!isNaN(dato.charAt(i))){
            dato2=dato2+dato.charAt(i)
        }
    }
    // console.log(dato + " ---> " +dato2)
    if(dato2.length!=9){
        return false
    }else{
        return true
    }
}

function email_valido(dato) {
    let pos_1 = dato.indexOf("@")
    let pos_2 = dato.lastIndexOf(".")
    flag = true
    if (pos_1 < 2 || pos_2 < 0) { flag = false }
    if (pos_2 - pos_1 < 3) { flag = false }
    if (dato.length - pos_2 < 3) { flag = false }
    return flag
}

function select_valido(dato){
    return dato.value!="0"
}

function check_valido(dato){
    return dato.checked
}