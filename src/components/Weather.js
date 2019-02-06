import React, { Component } from 'react';
import logo from './weather-icon.jpg';


class Weather extends Component {
  render() {
      console.log(this.props.weatherState)
    return (
      <div className="container">
         <div className="">
            <div className="mx-auto col-md-6 mt-5 p-1 box">
             <h1 className="text-center text-primary"><strong>Weather App</strong></h1>
             <img className="img-weather mx-auto d-block rounded-circle"src={logo} alt-text=""></img>

        <table className="table table-striped mt-3">
            <tbody>
                <tr>
                    <th scope="row">Cidade</th>
                    <td>{this.props.weather.city}</td>
                </tr>
                <tr>
                    <th scope="row">País</th>
                    <td>{this.props.weather.country}</td>
                </tr>
                <tr>
                    <th scope="row">Temperatura</th>
                    <td>{this.props.weather.temperature} Cº</td>
                </tr>
                <tr>
                    <th scope="row">Humidade</th>
                    <td>{this.props.weather.humidity}%</td>
                </tr>
                <tr>
                    <th scope="row">Descrição</th>
                    <td>{this.props.weather.description}</td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>

      </div>
    );
  }
}

export default Weather;
