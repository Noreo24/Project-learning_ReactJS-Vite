import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

// Sử dụng component bên trong component khác
// Component cha (App) sử dụng component con (MyComponent)
const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={reactLogo} alt="No image" className='logo' />
      </div>
    </div>
  )
}

export default App
