import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser } from './../../store/usersSlice';
import style from './UserProfile.module.scss';



const UserProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const idUser=params.idUser

  useEffect(() => {
    dispatch(getUser(idUser));
    // eslint-disable-next-line
  }, [dispatch])
  const { currentUser } = useSelector((state) => state.users)
  // console.log(currentUser);
  return (
    <div className={style.main}>
      <h2>Selected user</h2>
      <p>User ID: {currentUser.id}</p>
      <p>User name: {currentUser.firstName} {currentUser.lastName}</p>
      <p>User mail: {currentUser.email}</p>
      <p>User birthday: {currentUser.birthday}</p>
    </div>
  );
}

export default UserProfile;
