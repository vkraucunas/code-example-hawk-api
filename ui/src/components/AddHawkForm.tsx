import React, { Component } from 'react';
import './AddHawkForm.css';

type myProps = any;
type myState = any;

export default class AddHawkForm extends Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      formObj: {
        name: '',
        size: '',
        gender: '',
        wingspanBegin: undefined,
        wingspanEnd: undefined,
        weightBegin: undefined,
        weightEnd: undefined,
        lengthBegin: undefined,
        lengthEnd: undefined,
        colorDescription: '',
        behaviorDescription: '',
        habitatDescription: '',
        pictureUrl: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: any) {
    const formObj = { ...this.state.formObj };
    formObj[e.target.name] = e.target.value;
    this.setState({
      formObj
    });
  }
  handleSubmit(e: any) {
    e.preventDefault();
    console.log('you submitted');
  }
  render() {
    const formObj = this.state.formObj;

    if (!this.props.shown) {
      return null;
    }
    return (
      <section className="AddHawkModal">
        <div className="dialog">
          <button className="exit-button" onClick={this.props.onClose}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#9B9B9B"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
              >
                <path d="M2.5 16.5l14-14M2.5 2.5l14 14" />
              </g>
            </svg>
          </button>
          <h1>Add Hawk</h1>
          <form
            className="pure-form pure-form-stacked"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formObj.name}
              onChange={this.handleChange}
            />
            <label htmlFor="size">Size</label>
            <select
              name="size"
              value={formObj.size}
              onChange={this.handleChange}
            >
              <option value="" selected disabled>
                Select One
              </option>
              <option value="SMALL">Small</option>
              <option value="MEDIUM">Medium</option>
              <option value="LARGE">Large</option>
            </select>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={formObj.gender}
              onChange={this.handleChange}
            >
              <option value="" selected disabled>
                Select One
              </option>
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
            </select>
            <label htmlFor="pictureUrl">Image URL</label>
            <input
              type="text"
              name="pictureUrl"
              value={formObj.pictureUrl}
              onChange={this.handleChange}
            />
            <label htmlFor="colorDescription">Color Description</label>
            <textarea
              name="colorDescription"
              value={formObj.colorDescription}
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="habitatDescription">Habitat Description</label>
            <textarea
              name="habitatDescription"
              value={formObj.habitatDescription}
              onChange={this.handleChange}
            ></textarea>
            <fieldset>
              <legend>Length in cm (optional)</legend>
              <div className="flex-row">
                <label htmlFor="lengthBegin">
                  From
                  <input
                    type="number"
                    name="lengthBegin"
                    value={formObj.lengthBegin}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="lengthEnd">
                  To
                  <input
                    type="number"
                    name="lengthEnd"
                    value={formObj.lengthEnd}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Wingspan in cm (optional)</legend>
              <div className="flex-row">
                <label htmlFor="wingspanBegin">
                  From
                  <input
                    type="number"
                    name="wingspanBegin"
                    value={formObj.wingspanBegin}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="wingspanEnd">
                  To
                  <input
                    type="number"
                    name="wingspanEnd"
                    value={formObj.wingspanEnd}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Weight in grams (optional)</legend>
              <div className="flex-row">
                <label htmlFor="weightBegin">
                  From
                  <input
                    type="number"
                    name="weightBegin"
                    value={formObj.weightBegin}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="weightEnd">
                  To
                  <input
                    type="number"
                    name="weightEnd"
                    value={formObj.weightEnd}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </fieldset>
            <button
              type="submit"
              className="pure-button pure-button-secondary"
              onClick={this.props.onClose}
            >
              Cancel
            </button>
            <button type="submit" className="pure-button pure-button-primary">
              Save Hawk
            </button>
          </form>
        </div>
      </section>
    );
  }
}
