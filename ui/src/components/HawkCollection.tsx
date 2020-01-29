import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../redux/store';
import { Hawk } from '../types';
import { titleCase } from '../utils';
import './HawkCollection.css';

interface hawkProps {
  hawks: Hawk[];
}

const HawkCards = (props: hawkProps): any => {
  const hawks = props.hawks;

  const hawkCards = hawks.map((hawk) => (
    <div className="hawkCard" key={hawk.id}>
      <img src={hawk.pictureUrl} alt={hawk.name} className="hawkCardImg" />
      <div className="content">
        <h3>{hawk.name}</h3>
        <p>
          <strong>Size:</strong> {titleCase(hawk.size)}
        </p>
        <p>
          <strong>Gender:</strong> {titleCase(hawk.gender)}
        </p>
        <a href="/hawk/id">View {hawk.name}</a>
      </div>
    </div>
  ));

  return <div className="flex-row wrap hawkCardBlock">{hawkCards}</div>;
};

class HawkCollection extends Component<hawkProps> {
  render() {
    const { hawks } = this.props;
    return (
      <section className="hawkCollectionBlock">
        <h2>Your Hawks</h2>
        {!hawks.length && (
          <h3>
            You have no hawks! Click the Add Hawk button to start your
            collection!
          </h3>
        )}
        {hawks.length && <HawkCards hawks={hawks} />}
      </section>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    hawks: store.hawkState.hawks
  };
};

export default connect(mapStateToProps)(HawkCollection);
