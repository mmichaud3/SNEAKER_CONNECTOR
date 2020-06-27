import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle '></i> Edit Profile
      </Link>
      <Link to='/add-sneaker' className='btn btn-light'>
        <i className='fas fa-dizzy '></i> Add Sneaker
      </Link>
    </div>
  );
};

export default DashboardActions;
