
function initMap() {
    // Coordenadas iniciais do mapa
    var myLatLng = {lat: -19.869199379077436, lng: -43.96267620982048};

    // Opções do mapa
    var mapOptions = {
        zoom: 15, // Nível de zoom inicial
        center: myLatLng // Coordenadas do centro do mapa
    };

    // Criar o mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adicionar um marcador no mapa
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Escola de Engenharia - UFMG' // Título do marcador
    });

}
