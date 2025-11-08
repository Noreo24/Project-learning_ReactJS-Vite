import './todo.css';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

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

    const deleteTodo = (id) => {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList);
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

            {/* Cách 1: Sử dụng toán tử && */}
            {/* {
        todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {
        todoList.length === 0 &&
        <div className='todo-image'>
          <img src={reactLogo} alt="No image" className='logo' />
        </div>
      } */}


            {/* Cách 2: Sử dụng toán tử ? : */}
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div className='todo-image'>
                    <img src={reactLogo} alt="No image" className='logo' />
                </div>
            }
            {/* Tương tự dùng if...else trong java = ? : */}
        </div>
    )
}

export default TodoApp