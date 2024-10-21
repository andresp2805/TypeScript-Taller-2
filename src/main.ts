import { series } from './data.js';

let tbodySeries: HTMLElement = document.getElementById("tbodySeries")!;
let serieDetail: HTMLElement = document.getElementById("serieDetail")!;
let serieImage: HTMLImageElement = document.getElementById("serieImage") as HTMLImageElement;
let serieName: HTMLElement = document.getElementById("serieName")!;
let serieDescription: HTMLElement = document.getElementById("serieDescription")!;
let serieLink: HTMLAnchorElement = document.getElementById("serieLink") as HTMLAnchorElement;
let totalSeasons = 0;

series.forEach((serie, index) => {
    agregarSerie(index, serie);
    totalSeasons += serie.seasons;
});

agregarPromedio(totalSeasons, series.length);

function agregarSerie(i: number, serie: { id: number, name: string, channel: string, seasons: number, description: string, link: string, image: string }): void {
    let row: HTMLElement = document.createElement("tr");

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

function agregarPromedio(total: number, numSeries: number): void {
    let average: number = total / numSeries;
    let promedioContainer: HTMLElement = document.getElementById("seasonsAverage")!;

    promedioContainer.innerHTML = `Seasons average: ${average.toFixed(2)}`;
}

function mostrarDetalleSerie(serie: { name: string, description: string, link: string, image: string }): void {
    // Actualizar la tarjeta con los detalles de la serie
    serieImage.src = serie.image;
    serieName.innerText = serie.name;
    serieDescription.innerText = serie.description;
    serieLink.href = serie.link;

    // Mostrar la tarjeta (Card)
    serieDetail.style.display = "block";
}
