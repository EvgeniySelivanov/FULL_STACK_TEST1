import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks} from "../../store/tasksSlice";
import CONSTANTS from "../../constants";
import style from './TasksSection.module.scss';





const TasksSection = (props) => {
  const [amount, setAmount] = useState(CONSTANTS.MIN_LIMIT);

  const { tasks, error, isFetching } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks({ offset: 0, limit: amount }));
  }, [amount, dispatch])
  return (
    <section className={style.main}>
      <div >
        <h2>Tasks List</h2>
        <p>
          {CONSTANTS.AMOUNTS.map((item, i) => <button key={i} onClick={() => { setAmount(item) }}>{item}</button>)}
        </p>
        {error && <h3>Error!!!</h3>}
        {isFetching && <h3>Loading...</h3>}
        {/* {tasks.map((task,i) => ( */}
          {/* <article key={i}><h3>{task.id} {task.content}</h3></article> */}
          <table>
            <tr>
              <td><strong>Id</strong></td>
              <td><strong>Content</strong></td>
              <td><strong>createdAt</strong></td>

            </tr>
            {tasks.map((task,i) => (
              <tr>
              <td>{task.id}</td>
              <td>{task.content}</td>
              <td>{task.createdAt}</td>
            </tr>))}
          </table>
        
        <button onClick={() => { dispatch(getAllTasks({ offset: tasks.length, })) }}>load more...</button>
      </div>
    </section>
  );
};

export default TasksSection;