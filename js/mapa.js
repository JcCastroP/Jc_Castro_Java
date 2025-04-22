document.addEventListener("DOMContentLoaded", function () {
    var negocioLat = 40.4168;
    var negocioLng = -3.7038;

    var map = L.map('map').setView([negocioLat, negocioLng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([negocioLat, negocioLng]).addTo(map)
        .bindPopup("<b>JCC Studio</b><br>Calle Central 391, Madrid, España")
        .openPopup();

    let routingControl;

    window.getUserLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var userLat = position.coords.latitude;
                var userLng = position.coords.longitude;

                L.marker([userLat, userLng]).addTo(map)
                    .bindPopup("Tu Ubicación")
                    .openPopup();

                if (routingControl) {
                    map.removeControl(routingControl);
                }

                routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(userLat, userLng),
                        L.latLng(negocioLat, negocioLng)
                    ],
                    routeWhileDragging: true,
                    language: 'es',
                    show: false 
                }).addTo(map);

            }, function () {
                alert("No se pudo obtener tu ubicación.");
            });
        } else {
            alert("Geolocalización no soportada en este navegador.");
        }
    };
});