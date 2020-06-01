import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSneaker } from '../../actions/profile';

const AddSneaker = ({ addSneaker, history }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    size: '',
    condition: '',
    tradeAvailable: false,
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    brand,
    model,
    size,
    condition,
    description,
    tradeAvailable,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your Sneaker</h1>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addSneaker(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Sneaker Brand'
            name='brand'
            value={brand}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Sneaker Model'
            name='model'
            value={model}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Sneaker Size'
            name='size'
            value={size}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Sneaker Condition'
            name='condition'
            value={condition}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='tradeAvailable'
              checked={tradeAvailable}
              value={tradeAvailable}
              onChange={(e) => {
                setFormData({ ...formData, tradeAvailable: !tradeAvailable });
                // toggleDisabled(!toDateDisabled);
              }}
            />{' '}
            Are these available for trade offers?
          </p>
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Sneaker Description'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddSneaker.propTypes = {
  addSneaker: PropTypes.func.isRequired,
};

export default connect(null, { addSneaker })(withRouter(AddSneaker));
