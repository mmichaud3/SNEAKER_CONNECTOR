import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteSneaker } from '../../actions/profile';
import { fetchPhotos, openUploadWidget } from '../../CloudinaryService';
import { CloudinaryContext, Image } from 'cloudinary-react';
import '../profile/profile.css';

const Sneaker = ({ sneaker, deleteSneaker }) => {
  // const [images, setImages] = useState([]);

  const sneakers = sneaker.map((item) => (
    <tr key={item._id}>
      <td>{item.brand}</td>
      <td>{item.model}</td>
      <td>{item.size}</td>
      <td>{item.condition}</td>
      <td>
        {item.image.map((i) => (
          <CloudinaryContext cloudName='dcmlzd9bi'>
            <Image
              style={{ height: '5rem', width: '5rem' }}
              publicId={i}
            ></Image>
          </CloudinaryContext>
        ))}
      </td>

      <td>
        <button
          onClick={() => deleteSneaker(item._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  // useEffect(() => {
  //   setImages(
  //     ...images,
  //     sneaker.map((item) => item.image)
  //   );
  //   // fetchPhotos('image', setImages);
  // }, []);

  return (
    <Fragment>
      <h2 className='my-2'>My Sneakers</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Brand</th>
            <th className='hide-sm'>Model</th>
            <th className='hide-sm'>Size</th>
            <th className='hide-sm'>Condition</th>
            <th className='hide-sm sneaker img'>Image</th>
          </tr>
        </thead>
        <tbody>{sneakers}</tbody>
      </table>
    </Fragment>
  );
};

Sneaker.propTypes = {
  sneaker: PropTypes.array.isRequired,
  deleteSneaker: PropTypes.func.isRequired,
};

export default connect(null, { deleteSneaker })(Sneaker);
