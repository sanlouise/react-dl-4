import React, {Component} from 'react';
import Header from '../Header/index.js';
import Search from '../Search/index.js';
import VehicleCards from '../VehicleCards/index.js';
import StarshipCards from '../StarshipCards/index.js';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      starships: [],
      value: '',
      pilot: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(pilot, value) {
    this.setState({ pilot: value });
  }

  handleSubmit(name) {
    console.log('name', name);
    this.setState({ pilot: name });
  }

  componentWillMount() {
    this.fetchStarWarsVehicles();
    this.fetchStarWarsStarships();
  }

  fetchStarWarsVehicles() {
    fetch('https://swapi.co/api/vehicles/?format=json')
    	.then((res) => {
    		return res.json();
    	})
      .then((vehicles) => {
        this.setState({ vehicles });
      })
  }

  fetchStarWarsStarships() {
    fetch('https://swapi.co/api/starships/?format=json')
    	.then((res) => {
    		return res.json();
    	})
      .then((starships) => {
        this.setState({ starships });
      })
  }

  render(){
    return (
      <div className="App container">
        <Header />
        <Search
          onSubmit={this.handleSubmit}
          pilot={this.state.pilot}
        />
        <div className="divider">Vehicles</div>
        <VehicleCards vehicles={this.state.vehicles} />
        <div className="divider">Starships</div>
        <StarshipCards starships={this.state.starships} />
      </div>
    );
  }
}

export default App;
