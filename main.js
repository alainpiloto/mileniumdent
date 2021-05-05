document.getElementById('formulario').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    var nombre = getInputVal('nombre');
    var apellido = getInputVal('apellido');
    var celular = getInputVal('celular');
    var email = getInputVal('email');
    var mensaje = getInputVal('mensaje');

console.log(nombre);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}