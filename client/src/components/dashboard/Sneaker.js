import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteSneaker } from '../../actions/profile';

const Sneaker = ({ sneaker, deleteSneaker }) => {
  const sneakers = sneaker.map((item) => (
    <tr key={item._id}>
      <td>{item.brand}</td>
      <td>{item.model}</td>
      <td>{item.size}</td>
      <td>{item.condition}</td>
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
