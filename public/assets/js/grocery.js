// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhZI-g5KRMum-cgklXm4j8H8bbagmhJws",
  authDomain: "dowhat-946f1.firebaseapp.com",
  databaseURL: "https://dowhat-946f1.firebaseio.com",
  projectId: "dowhat-946f1",
  storageBucket: "dowhat-946f1.appspot.com",
  messagingSenderId: "39741177926"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Create variables for input values
var activityName;
var streetNumber;
var streetName;
var address;
var city;
var state;
var activityType;
var activityDuration;
var activityTimeOfDay;
var activityPrice;
var activityDescription;
var activityID = 0;


$(document).ready(function() {

  // When add-activity button is clicked, grab input values and push to Firebase
  $("#add-activity").on("click", function() {

    // get the input values
    activityName = $("#name").val().trim();
    streetNumber = $("#street_number").val().trim();
    streetName = $("#route").val().trim();
    city = $("#locality").val().trim();
    state = $("#administrative_area_level_1").val().trim();
    activityType = $("#type").val().trim();
    activityDuration = $("#duration").val().trim();
    activityTimeOfDay = $("#timeOfDay").val().trim();
    activityPrice = $("#price").val().trim();
    activityDescription = $("#description").val().trim();


    // Consolidate address
    address = (streetNumber + " " + streetName);

    console.log(address);

    // Push input values to firebase
    database.ref().push({
      activityName: activityName,
      address: address,
      city: city,
      state: state,
      activityType: activityType,
      activityDuration: activityDuration,
      activityTimeOfDay: activityTimeOfDay,
      activityPrice: activityPrice,
      activityDescription: activityDescription,
    });
  });
});

// Link to Google address auto-complete API
var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
};