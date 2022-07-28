import React from 'react'
import {Formik, Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const SignUp = ({ label, ...props }) => {
  const validate = Yup.object({
    firstName: Yup.string()
    .max(15, '15 characters or less please')
    .required('First Name is Required'),
    lastName: Yup.string()
    .max(20, '20 characters or less please')
    .required('Last Name is Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is Required'),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required('Password is Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is Required'),
  })
  return (
    <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }} 
    validationSchema={validate}
    onSubmit={values => {console.log('Input Values',values)}}
    >
    {formik => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {/* {console.log(formik.values)} */}
          <Form>
          <TextField label="First Name" name="firstName"  type="text"/>
          <TextField label="Last Name" name="lastName" type="text"/>
          <TextField label="Email" name="email"  type="email"/>
          <TextField label="Password" name="password" type="password"/>
          <TextField label="Confirm Password" name="confirmPassword" type="password"/>
          <button className="btn btn-dark mt-3" type="submit">Register</button>
          <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )
    }
    </Formik>
  )
}

export default SignUp;