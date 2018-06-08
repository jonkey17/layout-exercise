import React from 'react';

import CardList from '../CardList';
import './Dashboard.scss';

const Dashboard = () => {
  return(
    <div className="Dashboard">
      <CardList />
      <div className="Map"></div>
    </div>
  );
}

export default Dashboard;