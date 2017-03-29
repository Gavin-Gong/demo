navigator.geolocation.getCurrentPosition(function(geoPosition) {
	console.log(geoPosition);
}, function(err) {
	console.log(err.message);
}, {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
})