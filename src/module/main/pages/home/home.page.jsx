import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMovie from '../../components/card.movie.jsx/card.movie.component.jsx';
import Modal from '../../components/modal.component.jsx';
import { getMovieListAction } from './../../../store/actions/movie.action';

class Home extends Component {
  // Use method to return new jsx code - avoid using js in jsx render()
  renderMovieList = () =>
    this.props.movieList.map((movie) => {
      return <CardMovie movie={movie}></CardMovie>
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
    this.props.getMovieList()
  }
}

/// for take props
// Tách dispatch ra thành một hàm riêng để dễ quản lý
// Phương thức map này phải trả về một object với cặp key/value với key là props của component cái mà truyền vào higher-order-component

const mapDispatchToProps = (dispatch) => {
  return {
    //props     : Phương thức gởi data lên store
    getMovieList: () => {
      dispatch(getMovieListAction());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
