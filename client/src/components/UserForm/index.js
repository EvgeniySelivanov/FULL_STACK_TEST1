import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { createUser } from './../../store/usersSlice';
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  isMale: true
}

const UserForm = () => {
  const dispatch = useDispatch();
  // const {onSubmit}=props;
  const onSubmit = (values, formikBag) => {
    console.log(values);
    dispatch(createUser(values));
    formikBag.resetForm();
  }

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>

    <Form>
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
