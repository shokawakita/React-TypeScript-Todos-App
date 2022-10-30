import React,{useState, useCallback, useEffect} from "react";
import {Lists, CreateList} from './assets/components/index';

export type Todo = {
  id: number
  title: string | number
  isDone: boolean
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState<string | number>("")

  //Todoリストの作成
  const createList = useCallback((e: any) => {
    e.preventDefault();
      const newTodos: Todo[] = [...todos, {
        id: todos.length + 1,
        title: value,
        isDone: false
      }]
      setTodos(newTodos)
      setValue("")
  }, [todos, value, setValue])

  // checkboxの切り替え
  const checkTodos = useCallback((todo:Todo) => {
    const newTodos = todos.map(todo => {
      return {
        id: todo.id,
        title: todo.title,
        isDone: todo.isDone
      }
    })
    const pos = todos.map(todo => {
      return todo.id
    }).indexOf(todo.id)
    newTodos[pos].isDone = !newTodos[pos].isDone;
    setTodos(newTodos)
  }, [todos])

  //　Todoの作成欄のタイトル保持
  const updateTodo = useCallback((event: any) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }, [setValue])

  // Todoの削除
  const deleteTodo = useCallback((index: Todo) => {
    const newTodos = todos.filter(todo => {
      return todo !== index
    })

    for (let i = 0; i < newTodos.length; i++) {
      newTodos[i].id =  i + 1;
    }

    setTodos(newTodos)
  }, [todos])

  return (
    <main>
      <h1 className="title">Todo App!</h1>
      <Lists 
        todos={todos}
        check={checkTodos}
        delete={deleteTodo}
      />
      <CreateList 
        todos={todos} 
        value={value}
        create={createList} 
        update={updateTodo}
        />
    </main>
  )
}

export default App;