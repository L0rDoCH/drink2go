const map = L.map('map')
  .setView({
    lat: 59.968300,
    lng: 30.317430,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mapPinIcon = L.icon({
  iconUrl: './img/icons/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.968300,
    lng: 30.317430,
  },
  {
    icon: mapPinIcon,
  },
);

marker.addTo(map);

