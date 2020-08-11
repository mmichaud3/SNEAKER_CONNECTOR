import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { CloudinaryContext, Image } from 'cloudinary-react';

import './profile.css';
import { Link } from 'react-router-dom';

const ProfileSneaker = ({
  sneaker: {
    brand,
    model,
    size,
    condition,
    tradeAvailable,
    description,
    image,
  },
}) => (
  <div>
    <Card>
      <div className='card-img-top'>
        {' '}
        <CloudinaryContext cloudName='dcmlzd9bi'>
          <Image
            className='profile-sneaker-image'
            // style={{ height: '5rem', width: '5rem' }}
            publicId={image[0]}
          ></Image>
        </CloudinaryContext>
      </div>

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
          {tradeAvailable ? 'Yes' : 'No'}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {tradeAvailable ? (
            <Link to='/trading-floor'>Propose A Trade</Link>
          ) : null}
        </div>
      </Card.Body>
    </Card>
    {/* <h3 className='text-dark'>
      
    </h3> */}
  </div>
);

ProfileSneaker.propTypes = {
  sneaker: PropTypes.object.isRequired,
};

export default ProfileSneaker;
