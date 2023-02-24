window.onload = function(){
    document.getElementById("formSub").onsubmit = validar;
    document.getElementById("nombre").focus();
}

function validar(evento){

    nombre = document.getElementById("nombre").value;
    if(nombre == null || nombre.length == 0){
        evento.preventDefault();
        document.getElementById("nombre").focus();
    }

    telefono = document.getElementById("telefono").value;
    if(telefono == null || telefono.length == 0 || !(/^\d{9}$/.test(telefono)) ) {
        evento.preventDefault();
        document.getElementById("telefono").focus();
    }

    email = document.getElementById("email").value;
    if ( email == null || email.length == 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){        evento.preventDefault();
        document.getElementById("email").focus();
    }

    var opinion = document.getElementById("opinion").value;
    if( opinion == null || opinion.length == 0 || opinion.value.length >= 5 ) {
        evento.preventDefault();
        document.getElementById("opinion").focus();
    }
}