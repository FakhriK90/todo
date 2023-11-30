import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import Task from './Task';

const ListTask = () => {
    const todos = useSelector((state) => state.tasks)
  const show = useSelector((state) => state.Show)
  
  const filterTask = () => {
      if (show === 'done') {
          return todos.filter((todo) => todo.Done === true)
      }
      if (show === 'notDone') {
          return todos.filter((todo) => todo.Done === false)
      }
      return todos
  }
    return (
        <div>
            <Filter/>
            {filterTask().map((todo) => {
                return <Task key={todo.id} todo={todo} />
            })}
            
        </div>
    )
}

export default ListTask
