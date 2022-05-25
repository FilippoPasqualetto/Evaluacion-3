function validar() {
    var result_val_email = validar_email();
    var result_val_password = validar_password();
    var result_val_password2 = validar_password2();
    var result_val_direccion = validar_direccion();
    var result_val_comuna = validar_comuna();
    var result_val_ciudad = validar_ciudad();
    var result_val_postal = validar_postal();
    var result_val_celular = validar_celular();
    var result_val_aficion = validar_aficion();
    return (result_val_email && result_val_aficion && result_val_password && result_val_password2 && result_val_direccion && result_val_comuna && result_val_ciudad && result_val_postal && result_val_celular);
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_fto_password(password) {
    var letra = /[A-z]/g;
    var idx_letra = password.match(letra);
    if (idx_letra < 1) {
        return false;
    } else {
        var numero = /[0-9]/g;
        var idx_numero = password.match(numero);
        if(idx_numero < 1) {
            return false;
        }        
        return true;
    }
}

function validar_password() {
    var password = document.getElementById("password").value;
    var div = document.getElementById("msj-password");
    if  (password.length > 2 && password.length < 7) {
        if (validar_fto_password(password)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "La Contraceña debe tener minimo un dígito y una letra";
            div.className = "text-danger";
            return false;  
        }
    } else {
        div.innerHTML = "La Contraseña debe ser de 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    }
}
function validar_password2() {
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var div = document.getElementById("msj-password2");
    if (password2 == "") {
        div.innerHTML = "Repita la Contraceña";
        div.className = "text-danger";
        return false; 
        } if  (password == password2) {
            div.innerHTML = "";
            return true;  
        } else {
            div.innerHTML = "Las Contraseñas deben ser iguales";
            div.className = "text-danger";
            return false;
        }
}

function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("msj-direccion");
    if (direccion != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La Dirección no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("msj-comuna");
    if (comuna != "Seleccione una comuna ...") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La Comuna no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_ciudad() {
    var ciudad = document.getElementById("ciudad").value;
    var div = document.getElementById("msj-ciudad");
    if (ciudad != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La Ciudad no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_postal() {
    var postal = document.getElementById("postal").value;
    var div = document.getElementById("msj-postal");
    if  (postal.length == 7) {
        if (postal>=0 && postal<=9999999) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato no es el correcto";
            div.className = "text-danger";
            return false;  
        }
    } else {
        div.innerHTML = "El Codigo Postal son 7 dígitos";
        div.className = "text-danger";
        return false;
    }
}

function validar_celular() {
    var celular = document.getElementById("celular").value;
    var div = document.getElementById("msj-celular");
    if  (celular.length == 9) {
        if (celular>=0 && celular<=999999999) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato no es el correcto";
            div.className = "text-danger";
            return false;  
        }
    } else {
        div.innerHTML = "El Celular son 9 dígitos";
        div.className = "text-danger";
        return false;
    }
}

function validar_aficion() {
    var c1 = document.getElementById("check1");
    var c2 = document.getElementById("check2");
    var c3 = document.getElementById("check3");
    var c4 = document.getElementById("check4");
    var c5 = document.getElementById("check5");
    var c6 = document.getElementById("check6");
    var div = document.getElementById("msj-afi");
    if (c1.checked == true && c2.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c1.checked == true && c3.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c1.checked == true && c4.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c1.checked == true && c5.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c1.checked == true && c6.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c2.checked == true && c3.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c2.checked == true && c4.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c2.checked == true && c5.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c2.checked == true && c6.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c3.checked == true && c4.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c3.checked == true && c5.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c3.checked == true && c6.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c4.checked == true && c5.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c4.checked == true && c6.checked == true) {
        div.innerHTML = "";
        return true;
    }if (c5.checked == true && c6.checked == true) {
        div.innerHTML = "";
        return true;
    }else{
        div.innerHTML = "Seleccione minimo dos Aficiones";
        div.className = "text-danger";
        return false;
    }
}
