import React from 'react';
import { MODE } from '../modeConstants';


const SelectTask = (props) => {
  const { mode, handlerChange } = props;
  return (
    <select value={mode} onChange={handlerChange}>
      {Object.values(MODE).map((valueObj,i) => { return <option value={valueObj} key={i}>{valueObj}</option> })}
    </select>
  );
}

export default SelectTask;
