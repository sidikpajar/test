import React, { Fragment } from 'react';
import ProfileMolecules from '../molecules/ProfileMolecules';
import Gambar from '../../img/profile.jpg';

class ProfileOrganism extends React.Component {
  render() {
    return (
      <Fragment>


        <div className="container-fluid" style={{ backgroundColor: 'black' }}>
          <div className="row">

            <div className="col-md-6">
              <ProfileMolecules />
            </div>

            <div className="col-md-6" style={{ padding: 0 }}>
              <img src={Gambar} className="img-fluid" alt="M Fajar Sidik" style={{ backgroundSize: 'cover' }} />
            </div>

          </div>
        </div>


      </Fragment>
    );
  }
}


export default ProfileOrganism;
