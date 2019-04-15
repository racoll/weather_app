import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    temp:"",
    day:"",
    image:"",
    location:"",
  }

  // handleClick = async(e) => {
  //   e.preventDefault();
  //   const city = e.target.elements.city.value;
  //   const country = e.target.elements.country.value;
  //   // inject the city and country variables above into the api fetch below
  //   const api = await fetch(`http........./${country}/${city}`);
  //   const rtrn = await api.json();

  //   if(city && country) {
  //     this.setState({
  //       temp:rtrn.current_obvservation.temp_c, 
  //       // { or whatever the JOSN object is from the API }
  //       day: rtrn.current_obvservation.day,
  //       // { or whatever the JOSN object is from the API }
  //       image:rtrn.current_obvservation.image,
  //       // { or whatever the JOSN object is from the API }
  //       location:rtrn.current_obvservation.location,
  //       // { or whatever the JOSN object is from the API }
  //       error:"",
  //     });
  //   } else {
  //     this.setState({
  //       temp:"",
  //       day:"",
  //       image:"",
  //       location:"",
  //       error:"Wrong Input",
  //     }); 
  //   }
    
  // }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      temp:"10",
      day:"Monday",
      image: "./weather.jpg",
    });
    
  }


  render() {
    return (
      <div className="App">
        <center>
          <div className="card" id="card1">
          <h1>Weather App</h1>
            <form onSubmit={this.handleClick}>
              <input type="text" placeholder="enter city" name="city" className="form-control"/><br></br>
              <input type="text" placeholder="enter country" name="country" className="form-control"/><br></br>
              <button className="btn btn-info">Get Weather</button>
            </form>
            {this.state.temp!==''?<h1>Temperature: {this.state.temp} degrees celcius</h1>:''}
            {this.state.day!==''?<h1>Day: {this.state.day} </h1>:''}
            {this.state.location!==''?<h1>Location: {this.state.location} </h1>:''}
            {this.state.image!==''?<img src={this.state.image} width="50px" height="50px" />:''}
            {/* {this.state.error!==''?<h1>Error! {this.state.error} </h1>:''} */}
          </div>
        </center>
      </div>
    );
  }
}

export default App;
