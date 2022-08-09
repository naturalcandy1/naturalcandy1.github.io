
var user1 = {
    nombre: 'Alejadro',
    correo: 'alejo9017@gmail.com',
    contraseña: '12345',
    activo: false,
    videoQueLeGustan: [1, 4, 6]
}


var user2 = {
    nombre: 'Sofia',
    correo: 'sofia08@gmail.com',
    contraseña: '12345',
    activo: false,
    videoQueLeGustan: [3, 4, 8, 9]
}


var user3 = {
    nombre: 'Paola',
    correo: 'mccarolcn@gmail.com',
    contraseña: '123456personal@1',
    activo: false,
    videoQueLeGustan: [3, 6, 8]
}


var user4 = {
    nombre: 'Darcy Torres',
    correo: 'andr33aamartinez@gmail.com',
    contraseña: '246proyecto',
    activo: false,
    videoQueLeGustan: [1, 3, 5, 7]
}

var user5 = {
    nombre: 'Nicol',
    correo: 'nicolperez878@gmail.com',
    contraseña: 'Calabazita31',
    activo: false,
    videoQueLeGustan: [2,4,5]
}


var user6 = {
    nombre: 'Adriana',
    correo: 'al6004554@gmail.com',
    contraseña: '456proyecto01',
    activo: false,
    videoQueLeGustan: []
}

var user7 = {
    nombre: 'Sharik',
    correo: 'tatiana06@gmail.com',
    contraseña: '456proyecto02',
    activo: false,
    videoQueLeGustan: []
}



var usuarios = [user1, user2, user3, user4, user5, user6, user7];
var usuarioAValidar = [];

function login() {
    var user, pass;

    user = document.getElementById("correo").value;
    pass = document.getElementById("contraseña").value;

    usuarioAValidar = buscarElUsuarioRegistrado(user);



    if (usuarioAValidar[0]) {
        if (usuarioAValidar[0].contraseña == pass) {
            sessionStorage.setItem('usuario', usuarioAValidar[0].correo);
            sessionStorage.setItem('nombre', usuarioAValidar[0].nombre);

            console.log(usuarioAValidar);
            window.location = "inicio.html";
        } else {
            window.alert("Contraseña incorrecta");
        }

    } else {
        window.alert("Usuario no registrado");
    }

    sessionStorage.setItem('usuario', usuarioAValidar[0].correo);
}

function buscarElUsuarioRegistrado(user) {

    return usuarios.filter(usuario => usuario.correo == user)

}


function registrar() {

    var name, user, pass;
    name = document.getElementById("nombre").value;
    user = document.getElementById("correo").value;
    pass = document.getElementById("contraseña").value;


    sessionStorage.setItem('usuario', user);
    sessionStorage.setItem('nombre', name);
    sessionStorage.setItem("cargadaUnaVez", true);
    var arregloDeLikes = [0];
    sessionStorage.setItem("data", JSON.stringify(arregloDeLikes));

    window.location = "inicio.html";



}


function cargarLikes() {

    if (sessionStorage.getItem("cargadaUnaVez")) {

        var arregloDeLikes = JSON.parse(sessionStorage.getItem("data"));
        if (arregloDeLikes[0] > 0) {
            for (let i = 0; i < arregloDeLikes.length; i++) {
                var atributo = 'like-image';
                atributo = atributo + arregloDeLikes[i];
                document.getElementById(atributo).src = './images/PERASINFONDO.png';
            }
        }


    } else {
        var usuario = sessionStorage.getItem('usuario');
        usuarioAValidar = buscarElUsuarioRegistrado(usuario);
        console.log(usuario);
        var data = [];
        for (let i = 0; i < usuarioAValidar[0].videoQueLeGustan.length; i++) {
            var atributo = 'like-image';
            data[i] = usuarioAValidar[0].videoQueLeGustan[i];
            atributo = atributo + data[i];
            document.getElementById(atributo).src = './images/PERASINFONDO.png';
        }
        sessionStorage.setItem("cargadaUnaVez", true);
        sessionStorage.setItem("data", JSON.stringify(usuarioAValidar[0].videoQueLeGustan));
        sessionStorage.setItem("nombre", usuarioAValidar[0].nombre);


    }
    cambiarNombreDeUsuario();





}

function like(video, atributo) {
    var arregloDeLikes = JSON.parse(sessionStorage.getItem("data"));
    var index = arregloDeLikes.indexOf(video);
    if (index < 0) {
        arregloDeLikes.push(video)
        document.getElementById(atributo).src = './images/PERASINFONDO.png';
        sessionStorage.setItem("data", JSON.stringify(arregloDeLikes));
    } else {
        var newarregloDeLikes = arregloDeLikes.filter(function (f) { return f !== video })
        document.getElementById(atributo).src = './images/PERABLANCOYNEGRO.png';
        sessionStorage.setItem("data", JSON.stringify(newarregloDeLikes));
    }

}

function eliminar() {

    sessionStorage.clear();
    window.location = "index.html";
}


function cambiarNombreDeUsuario() {
    document.getElementById("perfil-name").innerHTML = sessionStorage.getItem('nombre');
}

function cargarVideos() {
    cambiarNombreDeUsuario();
    var arregloDeLikes = JSON.parse(sessionStorage.getItem("data"));

    for (let i = 1; i <= 10; i++) {
        var index = arregloDeLikes.indexOf(i);
        var atributo = '';
        if (index < 0) {
            atributo = '' + i;
            document.getElementById(atributo).remove();
        } else {
            atributo = 'like-image';
            atributo = atributo + i;
            document.getElementById(atributo).src = './images/PERASINFONDO.png';
        }


    }

}

function unLike(video) {
    var arregloDeLikes = JSON.parse(sessionStorage.getItem("data"))
    var atributo = '' + video;
    document.getElementById(atributo).remove();
    var newarregloDeLikes = arregloDeLikes.filter(function (f) { return f !== video });
    sessionStorage.setItem("data", JSON.stringify(newarregloDeLikes));



}