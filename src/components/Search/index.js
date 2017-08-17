import React, { Component, PropTypes } from 'react';
import './styles.css';
const ENTER = 13;

class Search extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    pilot: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEnter(event) {
    if (event.keyCode === ENTER) {
      const { onSubmit } = this.props;
      const { name } = this.state;
      onSubmit(name);
    }
  }

  render() {
    const { onSubmit, pilot } = this.props;
    const { name } = this.state;

    return (
      <div className='jumbotron text-center'>
        <h1>What's your name, pilot?</h1>
        <input
          name="name"
          onChange={this.onNameChange}
          onKeyDown={this.onEnter}
          type="text"
          value={name}
        />
        <button onClick={() => onSubmit(name)}>Update!</button>
      {pilot && <p>Ah, so you're <strong>{pilot}</strong>... We've been waiting you.</p>}
      </div>
    );
  }
}

export default Search;
