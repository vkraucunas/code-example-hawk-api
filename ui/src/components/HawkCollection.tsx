import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../redux/store';
import { Hawk } from '../types';
import { titleCase } from '../utils';
import './HawkCollection.css';

interface HawkProps {
  hawks: Hawk[];
  searchTerm: string;
  nameSort: string;
  sizeSort: string;
  genderFilter: string;
}

interface HawkCollectionProps {
  searchTerm: string;
  nameSort: string;
  sizeSort: string;
  genderFilter: string;
}

interface HawkCardProps {
  hawks: Hawk[];
}

const HawkCards = (props: HawkCardProps): any => {
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

class HawkCollection extends Component<HawkProps, any> {
  constructor(props: HawkProps) {
    super(props);
    console.log('hawks', props);
    this.state = {
      hawks: props.hawks
    };
  }
  render() {
    const { hawks } = this.props;
    return (
      <section className="hawkCollectionBlock">
        <h2>Your Hawks</h2>
        {!hawks.length ? (
          <h3>
            <em>
              You have no hawks! Click the Add Hawk button to start your
              collection!
            </em>
          </h3>
        ) : null}
        {hawks.length ? <HawkCards hawks={hawks} /> : null}
      </section>
    );
  }
}

const mapStateToProps = (store: IAppState, ownProps: HawkCollectionProps) => {
  return {
    hawks: store.hawkState.hawks,
    ...ownProps
  };
};

export default connect(mapStateToProps)(HawkCollection);
