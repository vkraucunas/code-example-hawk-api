import React, { Component } from 'react';

export default class HawkDetail extends Component<{}> {
  render() {
    return (
      <section>
        <h1>Hawk Form</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="size">Size</label>
          <select name="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="">
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="unidentified">Unidentified</option>
          </select>
          <fieldset>
            <legend>Length</legend>
            <label htmlFor="lengthBegin">From</label>
            <input type="number" name="lengthBegin" />
            <label htmlFor="lengthEnd">To</label>
            <input type="number" name="lengthEnd" />
          </fieldset>
          <fieldset>
            <legend>Wingspan</legend>
            <label htmlFor="wingspanBegin">From</label>
            <input type="number" name="wingspanBegin" />
            <label htmlFor="wingspanEnd">To</label>
            <input type="number" name="wingspanEnd" />
          </fieldset>
          <fieldset>
            <legend>Weight</legend>
            <label htmlFor="weightBegin">From</label>
            <input type="number" name="weightBegin" />
            <label htmlFor="weightEnd">To</label>
            <input type="number" name="weightEnd" />
          </fieldset>
          <label htmlFor="url">URL</label>
          <input type="text" name="url" />
          <label htmlFor="colorDescription">Color Description</label>
          <textarea name="colorDescription"></textarea>
          <label htmlFor="habitatDescription">Habitat Description</label>
          <textarea name="habitatDescription"></textarea>
          <button type="submit">Save Hawk</button>
        </form>
      </section>
    );
  }
}
