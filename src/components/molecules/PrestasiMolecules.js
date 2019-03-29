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

export default class PrestasiMolecules extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-center text-white" style={{ paddingTop: 100, paddingBottom: 20 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h1 style={styles.Judul}>
                <span className="badge badge-success">5</span>
                {' '}
Prestasi
              </h1>
              <hr width="70%" className="text-white bg-white" style={{ marginTop: 30 }} />

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Januari 2015</h5>
                <h5 style={styles.Value}>
Penerima Beasiswa
                  <br />
                  {' '}
Yayasan Beasiswa Jakarta
                </h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Februari 2016</h5>
                <h5 style={styles.Value}>
Juara 2 Website Development
                  <br />
                  {' '}
Perbanas Institute
                </h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Juli 2017</h5>
                <h5 style={styles.Value}>
6 Besar Lomba Diskusi PCTA
                  <br />
                  {' '}
Kementrian Pertahanan
                </h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Juli 2017</h5>
                <h5 style={styles.Value}>
Pin Penghargaan HANI 2017
                  <br />
                  {' '}
Presiden Republik Indonesia Ir. Joko Widodo
                </h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>November 2017</h5>
                <h5 style={styles.Value}><i>Inspiring Kalbiser Awards 2017</i></h5>
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
