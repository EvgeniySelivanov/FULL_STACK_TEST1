import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGroups, getAllGroupsMore } from "../../store/groupsSlice";
import GroupForm from '../GroupForm/index';
import CONSTANTS from "../../constants";
import style from './GroupSection.module.scss';

const GroupsSection = (props) => {
  const [amount, setAmount] = useState(CONSTANTS.MIN_LIMIT);
  const { groups, error, isFetching } = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGroups({ offset: 0, limit: amount }));
  }, [amount, dispatch])
  return (
    <section className={style.main}>
      <GroupForm />
      <h2>Groups List</h2>

      <div>
        <p>
          {CONSTANTS.AMOUNTS.map((item, i) => <button key={i} onClick={() => { setAmount(item) }}>{item}</button>)}
        </p>
        {error && <h3>Error!!!</h3>}
        {isFetching && <h3>Loading...</h3>}
        {groups.map((group) => (
          <article key={group.id}><h3>{group.name}</h3></article>
        ))}
        <button onClick={() => { dispatch(getAllGroupsMore({ offset: groups.length, })) }}>load more...</button>
      </div>
    </section>
  );
};

export default GroupsSection;