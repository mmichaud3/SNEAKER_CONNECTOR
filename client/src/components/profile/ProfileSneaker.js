import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './profile.css';

const ProfileSneaker = ({
  sneaker: { brand, model, size, condition, tradeAvailable, description },
}) => (
  <div>
    <Card>
      <Card.Img className='image' variant='top' />
      <Card.Body>
        <Card.Title className='title'>
          {brand} {model}
        </Card.Title>
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
          {tradeAvailable === true ? 'Yes' : 'No'}
        </p>
      </Card.Body>
    </Card>
    {/* <h3 className='text-dark'>
      
    </h3> */}
  </div>
);

ProfileSneaker.propTypes = {
  sneaker: PropTypes.array.isRequired,
};

export default ProfileSneaker;
