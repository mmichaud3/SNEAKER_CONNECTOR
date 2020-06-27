import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileSneaker from './ProfileSneaker';
import { getProfileById } from '../../actions/profile';
import { Container, Row, Col } from 'react-bootstrap';
import './profile.css';

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>

          <Container fluid className='cardlist'>
            <h2 className='text-dark'>Sneakers</h2>
            {profile.sneaker.length > 0 ? (
              <Row>
                {profile.sneaker.map((sneaker) => (
                  <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
                    <ProfileSneaker key={sneaker._id} sneaker={sneaker} />
                  </Col>
                ))}
              </Row>
            ) : (
              <h4>No Sneaker Collection</h4>
            )}
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
