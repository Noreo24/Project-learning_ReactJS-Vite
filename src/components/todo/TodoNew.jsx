
const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    // addNewTodo("Bui Tuan");
    const handleOnClick = () => {
        alert("Click me!")
    }

    const handleOnChange = (name) => {
        console.log("Handle on change", name)
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
        </div>
    );
}

export default TodoNew;