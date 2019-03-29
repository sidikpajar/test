import React, { Fragment } from 'react';
import Instagram from '../../img/instagram.png';
import Wa from '../../img/wa.png';

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

const ttl = 'Jakarta, 17 April 1995';
const alamat = 'Jl. Pemuda Asli 1 RT 01/03 Rawamangun, Pulogadung, Jakarta Timur';
const email = 'fajarkalbis@outlook.com / 1995fajarsidik@gmail.com';
const nomor = '0857 1534 3538';
export default class ProfileMolecules extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-center text-white" style={{ paddingTop: 100, paddingBottom: 20 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h1 style={styles.Judul}>
                <span className="badge badge-success">Hello</span>
                {' '}
M. Fajar Sidik
              </h1>
              <hr width="70%" className="text-white bg-white" style={{ marginTop: 30 }} />

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Tempat, Tanggal Lahir:</h5>
                <h5 style={styles.Value}>{ttl}</h5>
              </div>


              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Alamat:</h5>
                <h5 style={styles.Value}>{alamat}</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Email:</h5>
                <h5 style={styles.Value}>{email}</h5>
              </div>

              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Nomor Telepon:</h5>
                <h5 style={styles.Value}>{nomor}</h5>
              </div>


              <div style={styles.CardBorder}>
                <h5 style={styles.Title}>Hubungi Saya:</h5>
                <a href="http://instagram.com/fajarmyindo" target="blank"><img src={Instagram} style={styles.Media} className="img-fluid Media" alt="M Fajar Sidik" /></a>
                <a href="https://api.whatsapp.com/send?phone=6285715343538&text=Halo%20Fajar%20Saya%20Mau%20Tanya%20Sesuatu" target="blank"><img src={Wa} style={styles.Media} className="img-fluid Media" alt="M Fajar Sidik" /></a>
              </div>


            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
