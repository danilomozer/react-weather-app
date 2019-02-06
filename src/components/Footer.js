import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
    <div className="mt-5 col-md-6 mx-auto">
      <div className="">
      <hr></hr>
        <p className="mb-1"><strong>Material de apoio</strong></p>
           <a target="blank" href="https://www.youtube.com/watch?v=sBws8MSXN7A">YouTube : React JS Crash Course - 2019</a>
           <a target="blank" href="https://medium.com/@peterekeneeze/build-a-react-js-weather-app-with-stateless-functional-components-e61567004b54">Medium : Build a React.Js weather app with stateless functional components</a>
           <a target="blank" href="https://openweathermap.org/api">API : Open Weather Map</a>
           <a target="blank" href="https://github.com/facebook/react/">React JS GitHub   </a>     
           <hr></hr>
      </div>
    </div>
    );
  }
}

export default Footer;
