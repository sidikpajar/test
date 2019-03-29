import React, { Fragment } from 'react';
import PrestasiMolecules from '../molecules/PrestasiMolecules';
import OrganisasiMolecules from '../molecules/OrganisasiMolecules';
import Gambar1 from '../../img/prestasi.jpg';
import Gambar2 from '../../img/background.png';

class InformasiOrganism extends React.Component {
  render() {
    return (
      <Fragment>


        <div className="container-fluid">
          <div className="row">

            <div className="col-md-6" style={{ backgroundImage: `url(${Gambar1})`, backgroundSize: 'cover', padding: 0 }}>
              <PrestasiMolecules />
            </div>

            <div className="col-md-6" style={{ backgroundImage: `url(${Gambar2})`, backgroundSize: 'cover', padding: 0 }}>
              <OrganisasiMolecules />
            </div>

          </div>
        </div>


      </Fragment>
    );
  }
}


export default InformasiOrganism;
