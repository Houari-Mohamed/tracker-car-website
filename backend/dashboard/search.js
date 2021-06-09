function showMap(){
    let map = document.getElementById('map');
    let place = document.getElementById('search').value;
    map.innerHTML = `
        <iframe width="100%" height="500" src="https://maps.google.com/maps?q=${place};&output=embed">
        </iframe>
    `;
}


function searchCoordinates(){
    let map = document.getElementById('map');
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;
    map.innerHTML = `
        <iframe width="100%" height="500" src="https://maps.google.com/maps?q=${latitude},${longitude}&output=embed">
        </iframe>
    `;
}


let searchBar = document.querySelector('input');
searchBar.addEventListener('keydown' , function(){
    let code = event.keyCode || event.which;
    if(code == 13){
        showMap();
    }
});



