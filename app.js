// Initialize UI
const ui = new UI();

// Initialize Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather to load on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //Change location
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close Modal - jquery
  $('#locModal').modal('hide');
})

function getWeather(){
  weather.getWeather() //returns promise due to async from weather.js
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
