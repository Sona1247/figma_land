function initMap() {
  const azerbaijan = { lat: 40.39031076086174, lng: 49.83018757137912 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: azerbaijan,
    disableDefaultUI: true,
  });
  const marker = new google.maps.Marker({
    position: azerbaijan,
    map: map,
  });
  navigator.geolocation.getCurrentPosition(onLocationSuccess);
}

function onLocationSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
}
