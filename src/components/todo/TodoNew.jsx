
const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    // addNewTodo("Bui Tuan");
    return (
        <div className='todo-new'>
            <input className='todo-input' type="text" placeholder='Add a new task' />
            <button className="add-button">Add</button>
        </div>
    );
}

export default TodoNew;