import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { CloudinaryContext, Image } from 'cloudinary-react';

import './sneakerThumbs.css';
import { Link } from 'react-router-dom';

const SneakerThumbs = ({
  sneaker: {
    brand,
    model,
    size,
    condition,
    tradeAvailable,
    description,
    image,
    tradeOffered,
  },
  trade,
}) => (
  <div>
    {/* <Card> */}
    <div className='sneaker-thumbs-container'>
      <div className='sneaker-thumbs-img-container'>
        <CloudinaryContext cloudName='dcmlzd9bi'>
          <Image
            className='sneaker-thumbs-sneaker-image'
            publicId={image[0]}
          ></Image>
        </CloudinaryContext>
      </div>

      <div className='sneaker-thumbs-sneaker-info'>
        <h5>
          {brand} {model}
        </h5>
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
        <h4 className='sneaker-thumb-trade' onClick={trade}>
          Add Trade
        </h4>
      </div>
    </div>
  </div>
);

SneakerThumbs.propTypes = {
  sneaker: PropTypes.object.isRequired,
  trade: PropTypes.func.isRequired,
};

export default SneakerThumbs;
