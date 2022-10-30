import React from "react";
import {Todo} from '../../App';

type ListsProps = {
  todos: Todo[]
  check: Function 
  delete: Function
}

const Lists = (props: ListsProps) => {
  const todoList = props.todos.map(todo => {
    return (
      <li key={todo.id} className="todo-list">
        <input type="checkbox" checked={todo.isDone} onChange={() => props.check(todo)}/>
        {todo.title}
        <span onClick={() => props.delete(todo)}>✕</span>
      </li>
    )
  })
  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default Lists;