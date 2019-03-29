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

const universitas = 'Kalbis Institute';
const alamat = 'RT.4/RW.9, Kayu Putih, Pulo Gadung, Jakarta Timur';
const rektor = 'Ir. Sablin Yusuf MSc., MCompSc';
const jurusan = 'Informatika (Soft Computing)';
export default class PendidikanMolecules extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-center text-white" style={{ paddingTop: 100, paddingBottom: 20 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h1 style={styles.Judul}>
Sarjana
                <span className="badge badge-success">(S.Kom)</span>
              </h1>
              <hr width="70%" className="text-white bg-white" style={{ marginTop: 30 }} />

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Universitas:</h5>
                <h5 style={styles.Value}>{universitas}</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Jurusan (Peminatan):</h5>
                <h5 style={styles.Value}>{jurusan}</h5>
              </div>


              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Alamat:</h5>
                <h5 style={styles.Value}>{alamat}</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Rektor:</h5>
                <h5 style={styles.Value}>{rektor}</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Jurnal Ilmiah:</h5>
                <a href="https://drive.google.com/open?id=10npcYoGuPaQF6tFBJyzG-Sn1oQM4eAyY" target="blank"><h5 style={styles.Value}>Jurnal Ilmiah</h5></a>
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
