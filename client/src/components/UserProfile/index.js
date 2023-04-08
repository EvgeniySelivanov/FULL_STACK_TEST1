import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import { getUser, deleteUser } from './../../store/usersSlice';
import style from './UserProfile.module.scss';



const UserProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const idUser = params.idUser
  const handlerBtnDel = () => {
    dispatch(deleteUser(idUser));
    window.location.replace("http://localhost:5000/users");
  };
  const handlerBtnUpdateUser = () => {


  };

  useEffect(() => {
    dispatch(getUser(idUser));

    // eslint-disable-next-line
  }, [dispatch])
  const { currentUser } = useSelector((state) => state.users)
  // console.log(currentUser);
  return (<>
    <div className={style.main}>
      <h2>Selected user</h2>
      <p>User ID: {currentUser.id}</p>
      <p>User name: {currentUser.firstName} {currentUser.lastName}</p>
      <p>User mail: {currentUser.email}</p>
      <p>User birthday: {currentUser.birthday}</p>
      <div>
        <button onClick={handlerBtnDel}>Delete this user</button>
        <Link to={`/users/update/${idUser}`}><button onClick={handlerBtnUpdateUser}>Update this user</button> </Link>
      </div>
    </div>
  </>
  );
}
export default UserProfile;
