import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

// Sử dụng component bên trong component khác
// Component cha (App) sử dụng component con (MyComponent)
const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn JavaScript" }
  ]);

  const addNewTodo = (newTask) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000000), name: newTask
    }

    setTodoList([...todoList, newTodo])
    // setTodoList là hàm để cập nhật giá trị của todoList
    // Cách cập nhật giá trị của mảng trong React
    // Không được gán trực tiếp (todoList.push(newTodo)) mà phải tạo 1 mảng mới
    // Sử dụng toán tử spread (...) để lấy tất cả các phần tử của mảng cũ (todoList)
    // Rồi thêm phần tử mới vào mảng mới
    // setTodoList([...todoList, newTodo]) => thêm phần tử mới vào cuối mảng
    // setTodoList([newTodo, ...todoList]) => thêm phần tử mới vào đầu mảng
  }

  // Hàm random số nguyên trong khoảng min, max
  // Tham khảo: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
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
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="No image" className='logo' />
      </div>
    </div>
  )
}

export default App
