import React from "react";
import { useForm } from "react-hook-form";

import { connect } from 'react-redux';

import { login } from '../actions/userActions';


const Login = props => {
  const { register, handleSubmit, errors } = useForm();

  const submit = (data) => {
    props.login(data)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor='email'>
        Email: <input type='email' name='email' ref={register} />
      </label>
      {errors && errors.email ? errors.email.message : ''}
      <label htmlFor='password'>
        Password: <input type='password' name='password' ref={register} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {login})(Login);