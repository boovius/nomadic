Nomadic.factory('GeolocationService', [function() {
  var currentPosition = {
    latitude: "",
    longitude: ""
  }

  // function getCurrentPosition(){
  //   if (navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(setLatLong)
  //   }
  //   else {
  //     alert("Geolcation not supported")
  //   }
  // }
  // function setLatLong(position){
  //   currentPosition.latitude = position.coords.latitude
  //   currentPosition.longitude = position.coords.longitude
  // }

  // function latitude(){
  //   return currentPosition.latitude
  // }

  // function longitude(){
  //   return currentPosition.longitude
  // }

  return {
    currentPosition: currentPosition
  }
}])
