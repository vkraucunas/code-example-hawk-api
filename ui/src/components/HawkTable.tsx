import React, { Component } from 'react';
import { Hawk } from '../types';

interface hawkCardProps {
  hawks: Hawk[];
}

const HawkCards = (props: hawkCardProps): any => {
  const hawks = props.hawks;
  const hawkCards = hawks.map((hawk) => (
    <div className="hawkCard">
      <h2>{hawk.name}</h2>
      <p>
        <strong>Size:</strong> {hawk.size}
      </p>
      <p>
        <strong>Gender:</strong> {hawk.gender}
      </p>
      <a href="/hawk/id">View {hawk.name}</a>
    </div>
  ));

  return <div className="flex-row wrap hawk-card-block">{hawkCards}</div>;
};

export default class HawkTable extends Component<{}> {
  hawks: Hawk[] = [
    {
      id: 1,
      name: 'American Kestral',
      gender: 'female',
      size: 'medium'
    }
  ];
  render() {
    return (
      <section>
        <form>
          <label htmlFor="filter">Filter Hawks</label>
          <input type="text" name="filter" />
          <button type="submit">Filter</button>
        </form>
        <div className="row sorting">
          <form>
            <fieldset>
              <legend>Sorting</legend>
              <select>
                <option value="name-default">Name</option>
                <option value="name-asc">Name - Ascending</option>
                <option value="name-desc">Name - Descending</option>
              </select>
              <select>
                <option value="size-default">Size</option>
                <option value="size-asc">Size - Ascending</option>
                <option value="size-desc">Size - Descending</option>
              </select>
              <select>
                <option value="gender-default">Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="unidentified">Unidentified</option>
              </select>
            </fieldset>
          </form>
        </div>
        <HawkCards hawks={this.hawks} />
      </section>
    );
  }
}
