import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import { register } from '../actions/userActions';

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();

  const submit = (data) => {
    register(data)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor='first_name'>
        First Name: <input name='first_name' ref={register} />
      </label>
      {errors && errors.first_name ? errors.first_name.message : ''}
      <label htmlFor='last_name'>
        Last Name:
        <input name='last_name' ref={register} />
      </label>
      <label htmlFor='email'>
        Email: <input type='email' name='email' ref={register} />
      </label>
      {errors && errors.email ? errors.email.message : ''}
      <label htmlFor='password'>
        Password: <input type='password' name='password' ref={register} />
      </label>
      <label htmlFor='verify_password'>
        Verify Password: <input type='password' name='verify_password' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {register})(Registration);
