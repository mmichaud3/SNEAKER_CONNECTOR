import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CloudinaryContext, Image } from 'cloudinary-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSneaker } from '../../actions/profile';
import { fetchPhotos, openUploadWidget } from '../../CloudinaryService';
import '../profile/profile.css';

// const fileInput = React.createRef();

const AddSneaker = ({ addSneaker, binaryStr, history }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    size: '',
    condition: '',
    tradeAvailable: false,
    description: '',
    image: [],
  });

  // const [files, setFiles] = useState([]);
  // const onDrop = (acceptedFiles) => {
  //   setFiles(
  //     acceptedFiles.map((file) =>
  //       Object.assign(file, {
  //         preview: URL.createObjectURL(file),
  //       })
  //     )
  //   );
  // };

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    brand,
    model,
    size,
    condition,
    description,
    tradeAvailable,
    image,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const upload = () => {
  //   const uploadURL = 'https://api.cloudinary.com/v1_1/dcmlzd9bi/image/upload';
  //   const uploadPreset = 'liifuOii';

  //   files.forEach((file) => {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('upload_preset', uploadPreset);
  //     axios({
  //       url: uploadURL,
  //       method: 'POST',
  //       body: formData,
  //       // headers: {
  //       //   'Content-Type': 'application/x-www-form-urlencoded',
  //       // },
  //       data: formData,
  //     })
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   });
  // };
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: 'dcmlzd9bi',
      tags: [tag],
      uploadPreset: 'upload',
      maxFiles: 1,
      maxImageFileSize: 5000000,
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === 'success') {
          setImages([...images, photos.info.public_id]);
          setFormData({
            ...formData,
            image: image.concat(photos.info.public_id),
          });
        }
      } else {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    fetchPhotos('image', setImages);
  }, []);

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your Sneaker</h1>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addSneaker(formData, history);
          // alert(`Selected file - ${fileInput.current.files[0].name}`);
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
            placeholder='* Sneaker Size'
            name='size'
            value={size}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <select
            name='condition'
            value={condition}
            onChange={(e) => onChange(e)}
            required
          >
            <option value='0'>* Select Sneaker Condition</option>
            <option value='Brand New (In Box)'>Brand New (In Box)</option>
            <option value='Brand New (No Box)'>Brand New (No Box)</option>
            <option value='Like New'>Like New</option>
            <option value='Lightly Used'>Lightly Used</option>
            <option value='Used'>Used</option>
            <option value='Well Worn'>Well Worn</option>
          </select>
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='tradeAvailable'
              checked={tradeAvailable}
              value={tradeAvailable}
              onChange={(e) => {
                setFormData({ ...formData, tradeAvailable: true });
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

        {/* <div className='form-group'>
          <p>
            Add Image:{'   '}
         
          </p>
          <ImageUpload files={files} onDrop={onDrop} />
          <button onClick={() => upload()}>Upload</button>
        </div> */}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='dashboard'>
          Go Back
        </Link>
      </form>
      <CloudinaryContext cloudName='dcmlzd9bi'>
        <div className='App'>
          <button onClick={() => beginUpload('image')}>Upload Image</button>
          <section className='add-sneaker-image-continer' required>
            {images.map((i) => (
              <Image
                className='add-sneaker-image'
                key={i}
                publicId={i}
                fetch-format='auto'
                quality='auto'
                value={image}
                onChange={(e) => onChange(e)}
              />
            ))}
          </section>
        </div>
      </CloudinaryContext>
    </Fragment>
  );
};

AddSneaker.propTypes = {
  addSneaker: PropTypes.func.isRequired,
};

export default connect(null, { addSneaker })(withRouter(AddSneaker));
