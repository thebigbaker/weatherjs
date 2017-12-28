class Weather {
  constructor(city, state) {
    this.apiKey = '20e58d896b7c2f66';
    this.city = city
    this.state = state
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    // Add current observatoin to this since all data needed is in the c-o section 
    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
    
}