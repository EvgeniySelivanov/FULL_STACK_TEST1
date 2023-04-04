import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, doneTask, setMode } from '../../store/todoSlice';
import { MODE } from './modeConstants';
import Task from './Task';
import SelectTask from "./SelectTask";
import FormTodo from "./FormTodo";

const Todo = () => {

  const { tasks, mode } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const onSubmit = (values, formikBag) => {
    dispatch(addTask({ value: values.body }));
    console.log(values);
    formikBag.resetForm();
  }
  const handleDelete = (id) => dispatch(deleteTask({ id }));

  const handleIsDone = (id) => dispatch(doneTask({ id }));

  const handlerChange = ({ target: { value } }) => {
    dispatch(setMode({ value }));
  }

  const mapTasks = (task) => {
    if (mode === MODE.DONE && task.isDone) {
      return (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
        />
      )
    }
    else if (mode === MODE.NOT && !task.isDone) {
      return (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
        />
      )
    }
    else if (mode === MODE.ALL) {
      return (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
        />
      )
    }
  }

  return (
    <>
      <section>
        <h2>Tasks</h2>
        <FormTodo onSubmit={onSubmit} initialValues={{ body: '' }} />
      </section>
      <section>
        <h2>Tasks list</h2>
        <SelectTask handlerChange={handlerChange} mode={mode} />
        <ol>
          {tasks.map(mapTasks)}
        </ol>
      </section>
    </>
  )
}
export default Todo;