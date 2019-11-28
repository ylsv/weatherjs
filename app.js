// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // change location
  weather.changeLocation(city);
  // set location in LS
  storage.setLocationData(city);
  // get and display weather
  getWeather();
  // close modal window
  $('#locModal').modal('hide');
})

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results)
  })
  .catch(err => console.log(err));
}
