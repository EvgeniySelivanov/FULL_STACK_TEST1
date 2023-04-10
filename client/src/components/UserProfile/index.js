import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useParams} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import { getUser, deleteUser ,updateUser} from './../../store/usersSlice';
import style from './UserProfile.module.scss';

const UserProfile = () => {
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

  }

  useEffect(() => {
    dispatch(getUser(idUser));
    // eslint-disable-next-line
  }, [dispatch])

  const { currentUser } = useSelector((state) => state.users)

  const  initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    birthday: currentUser.birthday,
    isMale: currentUser.isMale
  }

  if(initialValues.firstName!==undefined)

  return <div className={style.main}>
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
  <Form className={style.form}>
    <p>Selected user</p>
    <Field type="text" name="firstName" placeholder="firstName" />
    <Field type="text" name="lastName" placeholder="lastName" />
    <Field type="email" name="email" placeholder="email" />
    <Field type="date" name="birthday" placeholder="birthday" />
    <label>Are you male? <Field type="checkbox" name="isMale" /></label>
    <button type="submit" className={style.btn}>Update user</button>
    </Form>
</Formik>
<button onClick={handlerBtnDel} className={style.btn}>Delete this user</button>
</div> ;
}
export default UserProfile;
