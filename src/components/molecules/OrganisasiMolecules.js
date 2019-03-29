import React, { Fragment } from 'react';


const styles = {
  Judul: {
    fontWeight: 'bold',
    fontSize: 60,
  },
  CardBorder: {
    marginBottom: 20,
  },
  Title: {
    color: '#757575',
    fontSize: 17,
  },
  Value: {
    fontSize: 19,
  },
  Media: {
    height: 25,
    margin: 5,
  },
};

export default class OrganisasiMolecules extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-center text-white" style={{ paddingTop: 100, paddingBottom: 20 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h1 style={styles.Judul}>
                <span className="badge badge-success">3</span>
                {' '}
Organisasi
              </h1>
              <hr width="70%" className="text-white bg-white" style={{ marginTop: 30 }} />

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>
2013 - 2014
                  <span className="badge badge-success">1 Tahun</span>
                </h5>
                <h5 style={styles.Value}>Volunteer BEM Kalbis Institute</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>
2013 - 2015
                  <span className="badge badge-success">2 Tahun</span>
                </h5>
                <h5 style={styles.Value}>Divisi Eksternal HMJ Informatika Kalbis Institute</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>
2013 - 2017
                  <span className="badge badge-success">4 Tahun</span>
                </h5>
                <h5 style={styles.Value}>
Sie Dakwah (3 tahun)
                </h5>
                <h5 style={styles.Value}>Ketua Umum (1 Tahun)</h5>
                <h5 style={styles.Value}>The Mujaddid Kalbis Institute</h5>
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
