import React, { Component } from 'react';
import Weather from './components/Weather';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }

    componentDidMount(){
     this.getWeather();
    }

    getWeather = async (e) => {

      const Api_Key = 'cba2385ff633399b4894f72971c60331'
      const city = "Ribeirão Preto"
      const country = "Brazil"

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
      const response = await api_call.json();
      console.log(response);
      if(city && country){
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })
      }else{
        this.setState({
          error: "Please input search values..."
        })
      }
    }

  render() {
    return (
      <div className="App">
        <Weather weather = {this.state}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
