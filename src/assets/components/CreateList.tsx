import React from "react";
import {Todo} from '../../App';

type Props = {
  todos: Todo[]
  value: string | number
  create: Function
  update: Function
}

const CreateList = (props: Props) => {
  return (
    <form onSubmit={(e) => props.create(e)} className="create-form">
      <input type="text" onChange={(e) => props.update(e)} value={props.value}/>
    </form>
  )
}

export default CreateList;