import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../store/actions/auth.action.jsx';

function SignIn() {
  const [userLogin, setUserLogin] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  console.log(userLogin);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction(userLogin));
  };

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    })
  };
  return (
    <section className='container'>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='taiKhoan'>Tài Khoản</label>
          <input
            type='text'
            classNam
            e='form-control'
            id='taiKhoan'
            value={userLogin.taiKhoan}
            name='taiKhoan'
            onChange={inputHandler}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='matKhau'>Mật Khẩu</label>
          <input
            type='password'
            className='form-control'
            id='matKhau'
            value={userLogin.matKhau}
            name='matKhau'
            onChange={inputHandler}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </section>
  );
}

export default SignIn;
