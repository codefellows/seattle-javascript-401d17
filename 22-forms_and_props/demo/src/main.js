import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL='http://pokeapi.co/api/v2';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePokemonNameChange = this.handlePokemonNameChange.bind(this);
  }

  handlePokemonNameChange(e) {
    this.setState({ pokeName: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.pokemonSelect(this.state.pokeName)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='pokemonName'
          placeholder='search for a pokemon'
          value={this.state.pokeName}
          onChange={this.handlePokemonNameChange} />
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonLookup: {},
      pokemonSelected: null,
      pokemonNameError: null
    }

    this.pokemonSelect = this.pokemonSelect.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  componentDidMount() {
    if (localStorage.pokemonLookup) {
      try {
        let pokemonLookup = JSON.parse(localStorage.pokemonLookup);
        this.setState({pokemonLookup})
      } catch (err) {
        console.error(err);
      }
    } else {
      superagent.get(`${API_URL}/pokemon/`)
      .then( res => {
        let pokemonLookup = res.body.results.reduce((lookup, n) => {
          lookup[n.name] = n.url;
          return lookup;
        }, {});

        try {
          localStorage.pokemonLookup = JSON.stringify(pokemonLookup);
          this.setState({ pokemonLookup });
        } catch (err) {
          console.error(err);
        }
      })
      .catch(console.error)
    }
  }

  pokemonSelect(name) {
    if (!this.state.pokemonLookup[name]) {
      this.setState({
        pokemonSelected: null,
        pokemonNameError: name
      });
    } else {
      superagent.get(this.state.pokemonLookup[name])
      .then( res => {
        this.setState({
          pokemonSelected: res.body,
          pokemonNameError: null
        })
      })
      .catch(console.error);
    }
  }

  render() {
    return (
      <section>
        <h1>Pokemon Form Demo</h1>
        <PokemonForm pokemonSelect={this.pokemonSelect} />

        { this.state.pokemonNameError ?
          <div>
            <h2>Selected: {this.state.pokemonNameError} does not exist.</h2>
            <h3>Please make another request</h3>
          </div> :
          <div>
          { this.state.pokemonSelected ?
            <div>
              <h2>Selected: {this.state.pokemonSelected.name}</h2>
              <h3>Abilities:</h3>
              <ul>
                {this.state.pokemonSelected.abilities.map((item, i) => {
                  return (
                    <li key={i}>
                      <p>{item.ability.name}</p>
                    </li>
                  )
                })}
              </ul>
            </div> :
            <div>
              <p>please make a request to see pokemon data</p>
            </div>
          }
          </div>
        }
      </section>
    )
  }
}

const container = document.createElement('main');
document.body.appendChild(container);
ReactDom.render(<App />, container);
