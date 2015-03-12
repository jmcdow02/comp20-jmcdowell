//loads symbols and definitions for Google Maps API
type="text/javascript";
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCfFhLqUf-sQ7ks6w-c-DRMZs1DFq0m_jQ";

function initialize() {
	//map object
  	var mapOptions = {
    	zoom: 8,
    	center: new google.maps.LatLng(-34.397, 150.644)
  	};

  	var map = new google.maps.Map(document.getElementById('map-canvas'),
      	mapOptions);
	}

function loadScript() {
  	var script = document.createElement('script');
  	script.type = 'text/javascript';
  	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      	'&signed_in=true&callback=initialize';
  	document.body.appendChild(script);
}

window.onload = loadScript;