import React, { Component } from 'react';
import map from 'lodash/map';
import './styles.css';

class VehicleCards extends Component {
  render() {
    return (
      <div className="quake-list">
        <div className="row">
          {map(this.props.vehicles.results, (vehicle) => (
            <div className="col-sm-4" key={vehicle.name}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">Vehicle: {vehicle.name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
                  <div className="specs">
                    <h6 className="card-subtitle mb-2 text-muted">Specs</h6>
                    <hr />
                    <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
                    <hr />
                    <p className="card-text">Class: {vehicle.class}</p>
                    <p className="card-text">Passengers: {vehicle.passengers}</p>
                    <p className="card-text">Crew: {vehicle.crew}</p>
                    <p className="card-text">Length: {vehicle.length}</p>
                    <p className="card-text">Max Speed: {vehicle.max_atmosphering_speed}</p>
                    <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VehicleCards;
