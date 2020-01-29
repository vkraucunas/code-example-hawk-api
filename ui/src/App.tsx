import React, { Component } from 'react';
import './App.css';
import HawkCollection from './components/HawkCollection';
import AddHawkForm from './components/AddHawkForm';

type myProps = any;
type myState = any;

class App extends Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showAddForm: false
    };

    this.toggleAddForm = this.toggleAddForm.bind(this);
  }
  toggleAddForm() {
    const newValue = !this.state.showAddForm;
    this.setState({ showAddForm: newValue });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="brand">Hawk Collection</h1>
          <button
            className="pure-button pure-button-primary add-hawk-button"
            onClick={this.toggleAddForm}
          >
            Add Hawk
          </button>
          <form className="pure-form pure-form-stacked">
            <label htmlFor="filter">Search Hawks</label>
            <input type="text" name="filter" className="search-input" />
            <button type="submit" className="pure-button pure-button-secondary">
              Search
            </button>
          </form>
          <form className="pure-form pure-form-stacked">
            <fieldset>
              <legend>Sorting</legend>
              <label htmlFor="sortName">Sort by Name</label>
              <select>
                <option value="name-default"></option>
                <option value="name-asc">A to Z</option>
                <option value="name-desc">Z to A</option>
              </select>
              <label htmlFor="sortName">Sort by Size</label>
              <select>
                <option value="size-default"></option>
                <option value="size-asc">Small to Large</option>
                <option value="size-desc">Large to Small</option>
              </select>
              <label htmlFor="sortName">Gender</label>
              <select>
                <option value="gender-default"></option>
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
              </select>
            </fieldset>
          </form>
        </header>
        <main>
          <HawkCollection />
          <AddHawkForm
            shown={this.state.showAddForm}
            onClose={this.toggleAddForm}
          />
        </main>
      </div>
    );
  }
}

export default App;
