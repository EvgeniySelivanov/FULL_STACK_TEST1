import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGroups, getAllGroupsMore } from "../../store/groupsSlice";
import GroupForm from '../GroupForm/index';
import CONSTANTS from "../../constants";
import style from './GroupSection.module.scss';
import AmountBtns from "../AmountBtns";

const GroupsSection = (props) => {
  const [amount, setAmount] = useState(CONSTANTS.MIN_LIMIT);
  const { groups, error, isFetching } = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  const handlerBtn = () => {
    dispatch(getAllGroupsMore({ offset: groups.length, limit: amount }))
  };
  const getGroup=(group) => (
    <article key={group.id}><h3>{group.name}</h3></article>
  )
  useEffect(() => {
    dispatch(getAllGroups({ offset: 0, limit: amount }));
  }, [amount, dispatch])
  
  return (
    <section className={style.main}>
      <GroupForm />
      <h2>Groups List</h2>
      <div>
        <AmountBtns setAmount={setAmount} />
        {error && <h3>Error!!!</h3>}
        {isFetching && <h3>Loading...</h3>}
        {groups.map(getGroup)}
        <button onClick={handlerBtn}>load more...</button>
      </div>
    </section>
  );
};

export default GroupsSection;