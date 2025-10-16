
const TodoData = (props) => {
    // props là 1 object có value là các thuộc tính được truyền từ component cha (App)
    // Viết theo kiểu object destructuring
    const { todoList } = props;

    return (
        <div>
            <div className="todo-data">
                {/* <ul> */}
                {todoList.map((item, index) => {
                    return (
                        // <>
                        <div className={`todo-item`} key={item.id}>
                            <div>{item.name}</div>
                            <button>Delete</button>
                        </div>
                        // </>
                    )
                })}
                {/* <li>{JSON.stringify(todoList)}</li> */}
                {/* </ul> */}
            </div>
        </div>
    );
}

export default TodoData;