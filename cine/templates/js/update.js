var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtNombre").value = parts[0][1]
document.getElementById("txtValoracion").value = parts[1][1]
document.getElementById("txtImg").value = parts[2][1]

function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtValoracion").value)
    let i = document.getElementById("txtImg").value
    let favorito = {
        nombre: n,
        valoracion: p,
        img: i
    }
    let url = "http://localhost:5000/favoritos/"+id
    var options = {
        body: JSON.stringify(favorito),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
