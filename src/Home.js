import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCampaigns } from './actions';

function Home() {
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(fetchCampaigns())}>Load Campaigns data</button>
    </div>
  );
}

export default Home;
