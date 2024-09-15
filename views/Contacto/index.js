let map = L.map('map').setView([9.5, -68.0], 10); // Coordenadas aproximadas del estado Cojedes en Venezuela

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([9.5, -68.0]).addTo(map)
        .bindPopup('Estado Cojedes, Venezuela')
        .openPopup();