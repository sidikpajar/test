import React, { Fragment } from 'react';
import PendidikanMolecules from '../molecules/PendidikanMolecules';
import Gambar from '../../img/wusida.jpg';

class PendidikanOrganism extends React.Component {
  render() {
    return (
      <Fragment>


        <div className="container-fluid" style={{ backgroundColor: 'black' }}>
          <div className="row">

            <div className="col-md-6" style={{ padding: 0 }}>
              <img src={Gambar} className="img-fluid" alt="M Fajar Sidik" />
            </div>

            <div className="col-md-6">
              <PendidikanMolecules />
            </div>

          </div>
        </div>


      </Fragment>
    );
  }
}


export default PendidikanOrganism;
