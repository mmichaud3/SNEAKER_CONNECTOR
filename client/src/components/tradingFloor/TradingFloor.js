import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileSneaker from '../profile/ProfileSneaker';
import SneakerThumbs from '../tradingFloor/sneakerThumbs/SneakerThumbs';
import './tradingFloor.css';

const TradingFloor = ({
  getCurrentProfile,

  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [isTrade, setTrade] = useState(false);

  const trade = () => {
    setTrade(true);
  };
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 style={{ color: '#17a2b8' }}>Trading Floor</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        // <Fragment>
        //   <Row>
        //     {profile.sneaker.map((sneaker) => (
        //       <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
        //         <ProfileSneaker key={sneaker._id} sneaker={sneaker} />
        //       </Col>
        //     ))}
        //   </Row>
        // </Fragment>
        <Container className='trading-floor-page' fluid>
          <Row>
            <Col>
              <div className='trading-floor-my-items-container'>
                {profile.sneaker.map((sneaker) =>
                  sneaker.tradeAvailable ? (
                    <div className='trading-floor-sneakerThumb'>
                      <SneakerThumbs
                        key={sneaker._id}
                        sneaker={sneaker}
                        trade={trade}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </Col>
            <Col>
              <div className='trading-floor-proposed-items-container'>
                {isTrade ? <p>trade</p> : null}
              </div>
            </Col>
            <Col>
              <div className='trading-floor-wanted-item-container'></div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Fragment>
          <p>You have not yet set up a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

TradingFloor.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(TradingFloor);

// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import ProfileSneaker from '../profile/ProfileSneaker';
// import Spinner from '../layout/Spinner';

// import { getCurrentProfile } from '../../actions/profile';

// import { Container, Row, Col, Card } from 'react-bootstrap';

// import './tradingFloor.css';

// const TradingFloor = ({
//   getCurrentProfile,
//   profile: { profile },
//   auth: {},
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, [getCurrentProfile]);
//   return (
//     <Container className='trading-floor-page' fluid>
//       <Row>
//         <Col>
//           <div className='trading-floor-my-items-container'>
//             {profile.sneaker.tradeAvailable ? (
//               <Row>
//                 {profile.sneaker.map((sneaker) => (
//                   <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
//                     <ProfileSneaker key={sneaker._id} sneaker={sneaker} />
//                   </Col>
//                 ))}
//               </Row>
//             ) : null}
//           </div>
//         </Col>
//         <Col>
//           <div className='trading-floor-proposed-items-container'></div>
//         </Col>
//         <Col>
//           <div className='trading-floor-wanted-item-container'></div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// TradingFloor.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,

//   profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   profile: state.profile,
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { getCurrentProfile })(TradingFloor);
