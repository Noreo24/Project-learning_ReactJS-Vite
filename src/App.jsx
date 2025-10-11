import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

// Sử dụng component bên trong component khác
// Component cha (App) sử dụng component con (MyComponent)
const App = () => {

  const bat = "Bui tuan";
  const age = 22;
  const object = {
    name: "Bui Tuan",
    age: 22,
    address: "Ha Noi"
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      // Truyền hàm từ component cha (App) xuống component con (TodoData) như 1 props
      // Không có dấu () vì không gọi hàm ngay, chỉ truyền hàm
      // addNewTodo={addNewTodo()} => như này sẽ là gọi hàm ngay
      />


      <TodoData
        name={bat}
        age={age}
        object={object}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="No image" className='logo' />
      </div>
    </div>
  )
}

export default App
