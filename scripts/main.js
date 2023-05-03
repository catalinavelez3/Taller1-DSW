import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderSeriesInTable(dataSeries);
totalCreditElm.innerHTML = "".concat(getAverageSeassons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        console.log(serie);
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                            <td>").concat(serie.plataforma, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener('click', function () {
            document.getElementById('serie-nombre').textContent = serie.nombre;
            document.getElementById('serie-descripcion').textContent = serie.descripcion;
            var serieImage = document.getElementById('serie-imagen');
            serieImage.setAttribute('src', serie.imagen);
            var serieUrl = document.getElementById('serie-link');
            serieUrl.href = serie.link;
        });
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var seriesFiltered = searchSerieByName(text, dataSeries);
    renderSeriesInTable(seriesFiltered);
}
function searchSerieByName(nameKey, series) {
    return nameKey === '' ? dataSeries : series.filter(function (c) {
        return c.nombre.match(nameKey);
    });
}
function getAverageSeassons(series) {
    var averageSeassons = 0;
    series.forEach(function (serie) { return averageSeassons = averageSeassons + serie.temporadas; });
    averageSeassons / 6;
    return averageSeassons;
}
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
