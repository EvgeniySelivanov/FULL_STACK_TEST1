import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { getUser, updateUser } from './../../store/usersSlice';
import style from './UserUpdate.module.scss';

const UserUpdate = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const idUser = params.idUser;


  const onSubmit = (values, formikBag) => {
   
    values.id=idUser;
    console.log(values);
    dispatch(updateUser(values));
    formikBag.resetForm();
    window.location.replace(`http://localhost:5000/users/${idUser}`);

  }

  useEffect(() => {
    dispatch(getUser(idUser));
    // eslint-disable-next-line
  }, [dispatch])
  const { currentUser } = useSelector((state) => state.users)

  const initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    // password: currentUser.password,
    birthday: currentUser.birthday,
    isMale: currentUser.isMale
  }

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>

    <Form className={style.form}>
      <p>Udate this user</p>
      <Field type="text" name="firstName" placeholder="firstName" />
      <Field type="text" name="lastName" placeholder="lastName" />
      <Field type="email" name="email" placeholder="email" />
      {/* <Field type="password" name="password" placeholder="password" /> */}
      <Field type="date" name="birthday" placeholder="birthday" />
      <label>Are you male? <Field type="checkbox" name="isMale" /></label>
      <button type="submit">Update user</button>

    </Form>
  </Formik>;
}

export default UserUpdate;
