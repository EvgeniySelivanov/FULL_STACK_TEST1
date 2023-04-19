import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from './../../store/usersSlice';
import style from './UserForm.module.scss';
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  isMale: true
}

const UserForm = () => {
  //useSelector();
  const dispatch = useDispatch();
  // const {onSubmit}=props;
  const onSubmit = (values, formikBag) => {
    console.log(values);
    dispatch(createUser(values));
    formikBag.resetForm();
  }

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>

    <Form className={style.form}>
      <p>Create new user</p>
      <Field type="text" name="firstName" placeholder="firstName" />
      <Field type="text" name="lastName" placeholder="lastName" />
      <Field type="email" name="email" placeholder="email" />
      <Field type="password" name="password" placeholder="password" />
      <Field type="date" name="birthday" placeholder="birthday" />
      <label>Are you male? <Field type="checkbox" name="isMale" /></label>
      <button type="submit">add new user</button>
      {/* <ErrorMessage /> */}
    </Form>
  </Formik>;

}
// UserForm.defaultProps={
//   onSubmit:()=>{}
// }
export default UserForm;
