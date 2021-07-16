import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/modal.component.jsx';
import { getMovieListAction } from './../../../store/actions/movie.action';

class Home extends Component {
  // Use method to return new jsx code - avoid using js in jsx render()
  renderMovieList = () =>
    this.props.movieList.map((movie) => {
      return (
        <div className='col-4' key={movie.maPhim}>
          <div className='card text-left'>
            <img className='card-img-top' src={movie.hinhAnh} alt='movie' />
            <div className='card-body'>
              <h4 className='card-title'>{movie.tenPhim}</h4>
              <p className='card-text'>{movie.moTa}</p>
            </div>
          </div>
        </div>
      );
    });

  // Render to virtual DOM
  render() {
    return (
      <div>
        <h1 className='text-center'>Danh Sach Phim</h1>
        <div className='row'>
          {this.renderMovieList()}
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios({
      url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET',
    })
      .then((response) => {
        this.props.getMovieList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

/// for take props
// Tách dispatch ra thành một hàm riêng để dễ quản lý
// Phương thức map này phải trả về một object với cặp key/value với key là props của component được truyền vào higher-order-component

const mapDispatchToProps = (dispatch) => {
  return {
    //props     : Phương thức gởi data lên store
    getMovieList: (movieList) => {
      dispatch(getMovieListAction(movieList));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
