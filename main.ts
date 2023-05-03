import { Series } from './serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();

renderSeriesInTable(dataSeries);

totalCreditElm.innerHTML = `${getAverageSeassons(dataSeries)}`


function renderSeriesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.plataforma}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
    trElement.addEventListener('click', () => {
      document.getElementById('serie-nombre')!.textContent = serie.nombre;
      document.getElementById('serie-descripcion')!.textContent = serie.descripcion;
      const serieImage = document.getElementById('serie-imagen')!
          serieImage.setAttribute('src', serie.imagen);
      const serieUrl = document.getElementById('serie-link') as HTMLAnchorElement;
          serieUrl.href = serie.link;
        })
  });
}
 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let seriesFiltered: Series[] = searchSerieByName(text, dataSeries);
  renderSeriesInTable(seriesFiltered);
}

function searchSerieByName(nameKey: string, series: Series[]) {
  return nameKey === '' ? dataSeries : series.filter( c => 
    c.nombre.match(nameKey));
}


function getAverageSeassons(series: Series[]): number {
  let averageSeassons: number = 0;
  series.forEach((serie) => averageSeassons = averageSeassons + serie.temporadas);
  averageSeassons/6;
  return averageSeassons;
}

function clearCoursesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
        seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}       