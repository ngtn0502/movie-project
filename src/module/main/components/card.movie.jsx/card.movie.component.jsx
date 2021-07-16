import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardMovie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='col-4' key={movie.maPhim}>
        <Link to={`/movie-detail/${movie.maPhim}`}>
          <div className='card text-left'>
            <img className='card-img-top' src={movie.hinhAnh} alt='movie' />
            <div className='card-body'>
              <h4 className='card-title'>{movie.tenPhim}</h4>
              <p className='card-text'>{movie.moTa}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CardMovie;
