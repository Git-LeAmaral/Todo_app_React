/* eslint-disable react/jsx-key */
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Bem estar",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  return (
    <div className="app">
        <h1>Lista de Tarefas</h1>

        <div className="todo-list">
          {todos.map(( todo ) => (

            <div className="todo">

              <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
              </div>

              <div>
                <button>Completar</button>
                <button>X</button>
              </div>

            </div>

          ))}
        </div>

    </div>
  )
}

export default App