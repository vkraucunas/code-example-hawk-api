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
      showAddForm: false,
      searchTerm: '',
      sizeSort: '',
      nameSort: '',
      genderFilter: ''
    };

    this.toggleAddForm = this.toggleAddForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleAddForm() {
    const newValue = !this.state.showAddForm;
    this.setState({ showAddForm: newValue });
  }

  render() {
    const state = this.state;
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
            <label htmlFor="searchTerm">Search Hawks</label>
            <input
              type="text"
              name="searchTerm"
              className="search-input"
              value={state.searchTerm}
              onChange={this.handleChange}
            />
            <button type="submit" className="pure-button pure-button-secondary">
              Search
            </button>
          </form>
          <form className="pure-form pure-form-stacked">
            <fieldset>
              <legend>Sorting</legend>
              <label htmlFor="nameSort">Sort by Name</label>
              <select
                name="nameSort"
                value={state.nameSort}
                onChange={this.handleChange}
              >
                <option value="name-default"></option>
                <option value="name-asc">A to Z</option>
                <option value="name-desc">Z to A</option>
              </select>
              <label htmlFor="sizeSort">Sort by Size</label>
              <select
                name="sizeSort"
                value={state.sizeSort}
                onChange={this.handleChange}
              >
                <option value="size-default"></option>
                <option value="size-asc">Small to Large</option>
                <option value="size-desc">Large to Small</option>
              </select>
              <label htmlFor="genderFilter">Filter by Gender</label>
              <select
                name="genderFilter"
                value={state.genderFilter}
                onChange={this.handleChange}
              >
                <option value="gender-default"></option>
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
              </select>
            </fieldset>
          </form>
        </header>
        <main>
          <HawkCollection
            sizeSort={this.state.sizeSort}
            nameSort={this.state.nameSort}
            genderFilter={this.state.genderFilter}
            searchTerm={this.state.searchTerm}
          />
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
