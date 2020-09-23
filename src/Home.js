import React from 'react';
import { connect } from 'react-redux';

import { fetchCampaigns } from './actions';

function Home({ fetchCampaigns }) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={fetchCampaigns}>Load Campaigns data</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  fetchCampaigns,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
