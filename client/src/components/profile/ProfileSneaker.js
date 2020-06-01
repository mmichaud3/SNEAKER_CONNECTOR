import React from 'react';
import PropTypes from 'prop-types';

const ProfileSneaker = ({
  sneaker: { brand, model, size, condition, tradeAvailable, description },
}) => (
  <div>
    <h3 className='text-dark'>
      {brand} {model}
    </h3>
    <p>
      <strong>Size: </strong>
      {size}
    </p>
    <p>
      <strong>Condition: </strong>
      {condition}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
    <p>
      <strong>Available for trade: </strong>
      {tradeAvailable}
    </p>
  </div>
);

ProfileSneaker.propTypes = {
  sneaker: PropTypes.array.isRequired,
};

export default ProfileSneaker;
