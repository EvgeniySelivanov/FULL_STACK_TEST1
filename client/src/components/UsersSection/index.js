import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, getAllUsersMore } from "../../store/usersSlice";
import CONSTANTS from "../../constants";
import style from './UsersSection.module.scss';
import AmountBtns from "../AmountBtns";

const UsersSection = (props) => {
  const [amount, setAmount] = useState(CONSTANTS.MIN_LIMIT);
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handlerBtn = () => {
    dispatch(getAllUsersMore({ offset: users.length, limit: amount }))
  };
  const getUser = (user) => (
    <article key={user.id}>
      <h3>{user.firstName} {user.lastName}</h3>
      <Link to={`/users/${user.id}`}>profile</Link>
    </article>
  );
  useEffect(() => {
    dispatch(getAllUsers({ offset: 0, limit: amount }));
  }, [amount, dispatch])


  return (
    <section className={style.main}>
      <h2>Users List</h2>
      <AmountBtns setAmount={setAmount} />
      {error && <h3>Error!!!</h3>}
      {isFetching && <h3>Loading...</h3>}
      {users.map(getUser)}
      <button onClick={handlerBtn}>load more...</button>
    </section>
  );
};

export default UsersSection;