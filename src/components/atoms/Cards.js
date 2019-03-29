import React from 'react';


class Cards extends React.Component {
  render() {
    const { nameLabel, Gambar } = this.props;
    return (
      <div className="col-md-3 col-sm-6" style={{ padding: 10 }}>
        <div className="card">
          <img src={Gambar} className="card-img-top" alt="M Fajar Sidik" />
          <div className="card-block" style={{ backgroundColor: 'white', padding: 10, color: 'black' }}>
            <h5 className="text-center card-title">{nameLabel}</h5>
          </div>
        </div>
      </div>
    );
  }
}


export default Cards;
