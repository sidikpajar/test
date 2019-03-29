import React, { Fragment } from 'react';
import Cards from '../atoms/Cards';
import Poster1 from '../../img/poster1.png';
import Poster2 from '../../img/poster2.png';
import Poster3 from '../../img/poster3.jpg';
import ga1 from '../../img/mockup/ga1.jpg';
import ga2 from '../../img/mockup/ga2.png';
import ga3 from '../../img/mockup/ga3.png';
import ga4 from '../../img/mockup/ga4.png';
import da1 from '../../img/mockup/da1.png';
import da2 from '../../img/mockup/da2.png';
import da3 from '../../img/mockup/da3.png';
import da4 from '../../img/mockup/da4.png';


const styles = {
  Judul: {
    fontWeight: 'bold',
    fontSize: 40,
  },
};

export default class GridMolecules extends React.Component {
  render() {
    return (
      <Fragment>

        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-center text-white" style={{ paddingTop: 100, paddingBottom: 20 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h1 style={styles.Judul}>
                <span className="badge badge-success">18</span>
                {' '}
              Kemampuan
              </h1>
              <hr width="70%" className="text-white bg-white" style={{ marginTop: 30 }} />
            </div>
          </div>
        </div>

        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-white" style={{ paddingTop: 20, paddingBottom: 50 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h3>
              Website & Mobile Development
              </h3>

              <div className="container">
                <div className="row">
                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>CSS3</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '90%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
90%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>HTML5</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '95%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
95%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>JSX</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '75%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
75%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>PHP & Mysql</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '85%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
85%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>Phyton</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '70%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
70%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>ReactJs</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '80%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
80%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>ReactNative</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '85%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
85%
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ padding: 10 }}>
                    <h5>Photoshop</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '85%', ariaValuenow: 25, ariaValuemin: 0, ariaValuemax: 100,
                        }}
                      >
85%
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div className="row">
                <div className="col-md-6">
                  <h3 style={{ marginTop: 40 }}>
                  Pengetahuan
                  </h3>

                  <div className="container">
                    <ul>
                      <li>Sistem ERP</li>
                      <li>Digital Marketing</li>
                      <li>Design Branding</li>
                      <li>Google Analytic, Google Keyword Planner</li>
                      <li>SEO, SEM</li>
                      <li>Atomic Design</li>
                      <li>Github, Gitlab</li>
                    </ul>
                  </div>

                </div>


              </div>

            </div>
          </div>
        </div>


        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-center text-white" style={{ paddingTop: 100, paddingBottom: 20 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h1 style={styles.Judul}>
                <span className="badge badge-success">18</span>
                {' '}
                My Portfolio
              </h1>
              <hr width="70%" className="text-white bg-white" style={{ marginTop: 30 }} />
            </div>
          </div>
        </div>


        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-white" style={{ paddingTop: 20, paddingBottom: 50 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h3>
                <span className="badge badge-success">9</span>
                {' '}
                Website Development
              </h3>


              <div className="container table-responsive">
                <table className="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nama Perusahaan</th>
                      <th scope="col">Produk/Layanan</th>
                      <th scope="col">Link</th>
                      <th scope="col">Tahun</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>PT INTIDAYA AGROLESTARI</td>
                      <td>Website Company Profile</td>
                      <td><a href="https://www.inagro.co.id/" target="blank">Click here</a></td>
                      <td>2017</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>PT Melancolia Studio</td>
                      <td>Website Company Profile</td>
                      <td><a href="http://melancoliastudio.com/" target="blank">Click here</a></td>
                      <td>2018</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>PT Niaga Ahsan</td>
                      <td>Website Produk Kesehatan</td>
                      <td><a href="http://teramat.co.id/" target="blank">Click here</a></td>
                      <td>2018</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>PT Niaga Ahsan</td>
                      <td>Website Produk Keuangan</td>
                      <td><a href="http://duithalal.id/" target="blank">Click here</a></td>
                      <td>2018</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Himpunan Mahasiswa Akuntansi Kalbis Institute</td>
                      <td>Platform Perlombaan</td>
                      <td><a href="http://kiascompetition.com/" target="blank">Click here</a></td>
                      <td>2018</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>HTJS Kalbis Institute</td>
                      <td>Aplikasi Data Karyawan</td>
                      <td>Desktop Apps</td>
                      <td>2018</td>
                      <td>Intranet</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Biro Career Center Kalbis Institute</td>
                      <td>Platform Lowongan Pekerjaan Khusus Mahasiswa Kalbis Institute</td>
                      <td><a href="http://kcc.cleveright.com/" target="blank">Sedang Dalam Perbaikkan</a></td>
                      <td>2018</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Biro Career Center Kalbis Institute</td>
                      <td>
                        <i>Management Module</i>
                        {' '}
Data Lowongan Mahasiswa Kalbis Institute
                      </td>
                      <td><a href="http://kcc.cleveright.com/" target="blank">Sedang Dalam Perbaikkan</a></td>
                      <td>2018</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Biro Kemahasiswaan Kalbis Institute</td>
                      <td>Sistem Cerdas, Penentuan Penerimaan Beasiswa Kalbis Institute</td>
                      <td>Desktop Apps</td>
                      <td>2017</td>
                      <td>Intranet</td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </div>
          </div>
        </div>


        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-white" style={{ paddingTop: 20, paddingBottom: 50 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h3>
                <span className="badge badge-success">3</span>
                {' '}
                Design
              </h3>

              <div className="container">
                <div className="row">

                  <Cards nameLabel="Poster Hari Besar Islam" Gambar={Poster1} />
                  <Cards nameLabel="Poster Hari Pahlawan" Gambar={Poster2} />
                  <Cards nameLabel="Watercolor Design" Gambar={Poster3} />

                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="container" style={{ fontFamily: 'Source Sans Pro' }}>
          <div className="row text-white" style={{ paddingTop: 20, paddingBottom: 50 }}>
            <div className="col-md-12" style={{ paddingLeft: 20, paddingRight: 20 }}>
              <h3>
                <span className="badge badge-success">6</span>
                {' '}
                Mobile Mockup
              </h3>


              <div className="container">
                <div className="row">

                  <Cards nameLabel="SplashScreen" Gambar={ga1} />
                  <Cards nameLabel="Booking Ticket" Gambar={ga2} />
                  <Cards nameLabel="Availability" Gambar={ga3} />
                  <Cards nameLabel="Select Date" Gambar={ga4} />

                  <Cards nameLabel="Damri Detail Ticket" Gambar={da1} />
                  <Cards nameLabel="Damri Payment" Gambar={da2} />
                  <Cards nameLabel="Damri Order History" Gambar={da3} />
                  <Cards nameLabel="Damri Chatbot" Gambar={da4} />

                </div>
              </div>


            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
