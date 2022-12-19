var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtIdModificar").value = parts[0][1]
document.getElementById("txtNombreModificar").value = parts[1][1]
document.getElementById("txtValoracionModificar").value = parts[2][1]
document.getElementById("txtImgModificar").value = parts[3][1]

function modificar() {
    let id = document.getElementById("txtIdModificar").value
    let n = document.getElementById("txtNombreModificar").value
    let p = parseFloat(document.getElementById("txtValoracionModificar").value)
    let i = document.getElementById("txtImgModificar").value
    let favorito = {
        id : id,
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

var modalId = document.getElementById('modalId');
        
            modalId.addEventListener('show.bs.modal', function (event) {
                  // Button that triggered the modal
                  let button = event.relatedTarget;
                  // Extract info from data-bs-* attributes
                  let recipient = button.getAttribute('data-bs-whatever');
        
                // Use above variables to manipulate the DOM
            });