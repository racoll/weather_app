import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    temp:"",
    day:"",
    condition:"",
    image:"",
    location:"",
    cities:[],
    prompt: false,
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { value } = this.select
    if (!value) {
      this.setState({
        prompt: true,
      })
      return null
    }
    console.log('select', value);

    const fakeAPI = await fetch(`./${value}.json`)
    const city = await fakeAPI.json()
    
    this.setState({
      ...city
    }) 
  }


  getCities = async (e) => {
    e.preventDefault();

    const fakeAPI = await fetch(`./${e.target.value}.json`)
    const cities = await fakeAPI.json()
    console.log(cities);
    
    
    this.setState({
      cities: cities
    })    
  }

  getConditions = async (e) => {
    e.preventDefault();

    const fakeAPI = await fetch(`./${e.target.value}.json`)
    const city = await fakeAPI.json()
    console.log(city);

    this.setState({
      ...city
    })
    

  }


  render() {
    return (
      <div className="App">
        <center>
          <div className="card" id="card1">
          <h1>Weather App</h1>
            <form onSubmit={this.handleClick}>
              <p>Select Country</p>
                <select onChange={this.getCities} name="country" className="dropdown">
                  <option value="">(Select Country)</option>
                  <option value="england">England</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                </select>
                <br></br>
              <div><p>Select City</p>

                <select
                  ref={node => this.select = node}
                  // onChange={this.getConditions}
                  name="city"
                  placeholder="enter city"
                  className="dropdown"
                >
                  {this.state.cities.length === 0 && <option disabled value="city">---</option>}
                  <option value="">(Select City)</option>
                  {(this.state.cities).map((keyName, i) => (
                    <option key={i} value={keyName}>{keyName} </option>
                  ))}
                </select>

                <br></br></div>
              <button className="btn btn-info">Get Weather</button>
            </form>
            {this.state.temp!==''?<h1>Temperature: {this.state.temp} degrees celcius</h1>:''}
            {this.state.day!==''?<h1>Day: {this.state.day} </h1>:''}
            {this.state.condition!==''?<h1>Condition: {this.state.condition} </h1>:''}
            {this.state.image!==''?<img src={this.state.image} width="50px" height="50px" />:''}
            {this.state.prompt && 'please enter a city'}
          </div>
        </center>
      </div>
    );
  }
}

export default App;
