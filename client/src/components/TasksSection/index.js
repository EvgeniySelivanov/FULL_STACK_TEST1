import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks, getAllTasksMore } from "../../store/tasksSlice";
import CONSTANTS from "../../constants";
import style from './TasksSection.module.scss';
import AmountBtns from "../AmountBtns";

const TasksSection = (props) => {
  const [amount, setAmount] = useState(CONSTANTS.MIN_LIMIT);
  const { tasks, error, isFetching } = useSelector((state) => state.tasks);

  const handlerBtn = () => {
    dispatch(getAllTasksMore({ offset: tasks.length, limit: amount }))
  };
  const getTask = (task, i) => (
    <tr key={i}>
      <td>{task.id}</td>
      <td>{task.content}</td>
      <td>{task.createdAt}</td>
    </tr>);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks({ offset: 0, limit: amount }));
  }, [amount, dispatch]);


  return (
    <section className={style.main}>
      <div >
        <h2>Tasks List</h2>
        <AmountBtns setAmount={setAmount} />
        {error && <h3>Error!!!</h3>}
        {isFetching && <h3>Loading...</h3>}
        <table>
          <thead>
            <tr>
              <td><strong>Id</strong></td>
              <td><strong>Content</strong></td>
              <td><strong>createdAt</strong></td>
            </tr>
          </thead>
          <tbody>
            {tasks.map(getTask)}
          </tbody>
        </table>
        <button onClick={handlerBtn}>load more...</button>
      </div>
    </section>
  );
};

export default TasksSection;