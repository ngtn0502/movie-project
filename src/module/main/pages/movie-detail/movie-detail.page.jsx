import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovieDetailAction } from '../../../store/actions/movie.action.jsx';

class MovieDetail extends Component {
  render() {
    const { movieDetail: {tenPhim, hinhAnh, moTa} } = this.props;
    return (
      <div>
        <div className="row">
            <div className="col-4">
                <img src={hinhAnh} alt="" width="500px" />
            </div>
            <div className="col-8">
                <h3>Ten Phim: {tenPhim}</h3>
                <h3>Mo ta: {moTa}</h3>
            </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // call api cho movie detail
    this.props.getMovieDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (id) => {
      dispatch(getMovieDetailAction(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetail));
