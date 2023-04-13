import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getUser, deleteUser, updateUser } from './../../store/usersSlice';
import style from './UserProfile.module.scss';



const UserProfile = () => {
  const { currentUser: { firstName, lastName, email, birthday, isMale } } = useSelector((state) => state.users);
  const params = useParams();
  const dispatch = useDispatch();
  const idUser = params.idUser
  const handlerBtnDel = () => {
    dispatch(deleteUser(idUser));
    window.location.replace("http://localhost:5000/users");
  };
  const onSubmit = (values, formikBag) => {
    values.id = idUser;
    dispatch(updateUser(values));
    formikBag.resetForm();
    window.location.replace(`http://localhost:5000/users/${idUser}`);
  };
  useEffect(() => {
    dispatch(getUser(idUser));
    // eslint-disable-next-line
  }, []);

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    birthday: birthday,
    isMale: isMale
  }
  if (firstName) {
    return <div className={style.main}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
          <Form className={style.form}>
            <p>Selected user</p>
            <Field type="text" name="firstName" placeholder="firstName" />
            <Field type="text" name="lastName" placeholder="lastName" />
            <Field type="email" name="email" placeholder="email" />
            <Field type="date" name="birthday" placeholder="birthday" />
            <label>Are you male? <Field type="checkbox" name="isMale" /></label>
            <button type="submit" className={style.btn}>Update user</button>
          </Form>)}
      </Formik>
      <button onClick={handlerBtnDel} className={style.btn}>Delete this user</button>
    </div>;
  }
}
export default UserProfile;
