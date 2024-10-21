import { series } from './data.js';
let tbodySeries = document.getElementById("tbodySeries");
let serieDetail = document.getElementById("serieDetail");
let serieImage = document.getElementById("serieImage");
let serieName = document.getElementById("serieName");
let serieDescription = document.getElementById("serieDescription");
let serieLink = document.getElementById("serieLink");
let totalSeasons = 0;
series.forEach((serie, index) => {
    agregarSerie(index, serie);
    totalSeasons += serie.seasons;
});
agregarPromedio(totalSeasons, series.length);
function agregarSerie(i, serie) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td><a href="#" class="serie-link">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    tbodySeries.appendChild(row);
    // Agregar evento de clic para mostrar detalles de la serie
    row.querySelector(".serie-link")?.addEventListener("click", () => {
        mostrarDetalleSerie(serie);
    });
}
function agregarPromedio(total, numSeries) {
    let average = total / numSeries;
    let promedioContainer = document.getElementById("seasonsAverage");
    promedioContainer.innerHTML = `Seasons average: ${average.toFixed(2)}`;
}
function mostrarDetalleSerie(serie) {
    // Actualizar la tarjeta con los detalles de la serie
    serieImage.src = serie.image;
    serieName.innerText = serie.name;
    serieDescription.innerText = serie.description;
    serieLink.href = serie.link;
    // Mostrar la tarjeta (Card)
    serieDetail.style.display = "block";
}
