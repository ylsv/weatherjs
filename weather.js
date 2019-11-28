class Weather {
  constructor(city) {
    this.apiKey = 'c3e5a695e376ff691fe58186cd47113e';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}