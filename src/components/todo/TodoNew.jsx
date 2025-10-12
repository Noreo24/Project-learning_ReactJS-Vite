import { useState } from "react";

const TodoNew = (props) => {

    // Dùng useState hooks, destructuring array
    // useState là hàm của React, trả về 1 mảng gồm 2 phần tử
    // Phần tử 1: giá trị hiện tại của state
    // Phần tử 2: hàm để cập nhật giá trị của state (tương tự getter và setter trong OOP)
    const [valueInput, setValueInput] = useState("New task");
    // valueInput: giá trị hiện tại của state, khởi tạo là chuỗi rỗng ""
    // setValueInput: hàm để cập nhật giá trị của state
    // useState(""): khởi tạo state với giá trị ban đầu là chuỗi rỗng ""
    // Khi muốn cập nhật giá trị của state, gọi hàm setValueInput với tham số là giá trị mới

    const { addNewTodo } = props;

    const handleOnClick = () => {
        addNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    // event có thuộc tính target, trỏ tới thẻ input (target = input)
    // Thẻ input có thuộc tính là value
    // => event.target.value là giá trị của thẻ input

    return (
        <div className='todo-new'>
            <input className='todo-input'
                type="text" placeholder='Add a new task'
                onChange={(event) => { handleOnChange(event.target.value) }} />
            {/* Sử dụng thuộc tính onChange sẽ có sẵn biến event */}

            <button className="add-button" onClick={handleOnClick}>Add</button>
            {/* Không để onClick={handleClick()} vì nếu có dấu () thì sẽ thực thi hàm luôn chứ không phải đợi đến khi click */}
            {/* Nếu muốn truyền tham số cho hàm thì có thể sử dụng arrow function như bên dưới */}
            {/* <button className="add-button" onClick={() => { handleOnClick() }}>Add</button> */}
            {/* Tham khảo: https://react.dev/learn/responding-to-events mục Pitfall */}

            <div>My input: {valueInput}</div>
        </div>
    );
}

export default TodoNew;