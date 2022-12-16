let map;
let marker;
function initMap() {
  const position = {
    lat: -27.50192,
    lng: -58.81289,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
  });

  marker = new google.maps.Marker({
    position: {
      lat: -27.475109579424487,
      lng: -58.85210868734177,
    },
    map,
    title: "Santo Domingo Bar",
  });

  let marker2 = new google.maps.Marker({
    position: {
      lat: -27.46515904342498,
      lng: -58.848369546859075,
    },
    map,
    title: "Costanera Corrientes",
  });

  let marker3 = new google.maps.Marker({
    position: {
      lat: -27.474424227626276,
      lng: -58.84521004584472,
    },
    map,
    title: "Sabbia Resto Bar",
  });

  let marker4 = new google.maps.Marker({
    position: {
      lat: -27.47373172717562,
      lng: -58.8232728866434,
    },
    map,
    title: "Pelado Motos",
  });
}
