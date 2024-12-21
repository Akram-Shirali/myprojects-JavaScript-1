const btnEl = document.querySelector('.btn');
const locatEl = document.querySelector('.locat');

btnEl.addEventListener('click',()=> {
    navigator.geolocation.getCurrentPosition(getLocate);
});

function getLocate(location) {
    locatEl.innerHTML = `
    $Latitude: ${location.coords.latitude} <br>
    $Longtiude: ${location.coords.longtiude} <br>`
}