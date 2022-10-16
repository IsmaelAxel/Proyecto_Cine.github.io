let url = "../json/Film.json";
let datos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then( json => { pelis(json);})
    }


let pelis = (_data) =>{
    let html = '';
    _data.forEach(m => {
        html += `<div>
        <div class="tarjeta fondoFooter">
        <img src= "${m.Poster}" alt="${m.Title}">
        <div class= "cuerpo">
        <h4>${m.Title}</h4>
        <br>
        <h5>Director: ${m.Director}</h5>
        <h5>Lanzamiento: ${m.Released}</h5>
        <h5>Duracion: ${m.Runtime}</h5>
        <h5>Tipo: ${m.Type}</h5>
        <br>
        <a href="${m.Trailer}" target="_blank"><button class="btn">Más información</button></a> 
    </div>
    </div>
    </div>`;
    });
    document.getElementById('card').innerHTML = html
}

datos(url);