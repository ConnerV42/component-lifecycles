import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    console.log("Called before any HTML is rendered");
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const baseUrl = 'https://swapi.co/api/people/?page=';
    let page = 1;
    let people = [];

    fetch(`${baseUrl}${page}`)
      .then(data => data.json())
      .then((data) => {
        data.results.forEach(person => {
          people.push(person.name);
        });
      })
      .then(() => this.setState({ people }));
  }

  render() {
    let views = <div>Loading...</div>
    const { people } = this.state;
    if (people && people.length > 0) {
      views = people.map((p, index) => (
        <p key={index}>
          {p}
        </p>
      ));
    }

    return (
      <div className="App">
        <h2>All Star Wars Characters</h2>
        {views}
      </div>
    );
  }
}

export default App;
