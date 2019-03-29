import React, { Fragment } from 'react';
import GridMolecules from '../molecules/GridMolecules';


class GridOrganism extends React.Component {
  render() {
    return (
      <Fragment>


        <div className="container-fluid" style={{ backgroundColor: 'black' }}>
          <div className="row">

            <div className="col-md-12">
              <GridMolecules />
            </div>


          </div>
        </div>


      </Fragment>
    );
  }
}


export default GridOrganism;
