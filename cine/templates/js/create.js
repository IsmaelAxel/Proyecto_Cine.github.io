function guardar() {

    let n = document.getElementById("txtNombre").value
    let v = parseFloat(document.getElementById("txtValoracion").value)
    let i = document.getElementById("txtImg").value

    let favorito = {
        nombre: n,
        valoracion: v,
        img: i
    }

    let url = "http://localhost:5000/favoritos"
    var options = {
        body: JSON.stringify(favorito),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Su pelicula se agrego exitosamente! :D")
            window.location.href = "./favoritos.html"
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("No se pudo agregar su pelicula :(")
            console.error(err);
        })
}
const btnAbrirModal = 
document.querySelector("#btn-abrir-modal");
const cerrarModal = 
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
cerrarModal.addEventListener("click",()=>{
    modal.close();
})
