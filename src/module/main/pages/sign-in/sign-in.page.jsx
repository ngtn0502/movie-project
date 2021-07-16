import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/modal.component.jsx';

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Sign In page</h1>
        {this.props.isModalOpen && <Modal></Modal>}
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return {
    isModalOpen: state.mainReducer.isModalOpen,
  }
}

export default connect(mapStateToProps)(SignIn);
