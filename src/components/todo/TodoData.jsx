
const TodoData = (props) => {
    // props là 1 object có value là các thuộc tính được truyền từ component cha (App)
    // props = {
    //   name: "Bui tuan",
    //   age: 22,
    //   object: {
    //     name: "Bui Tuan",
    //     age: 22,
    //     address: "Ha Noi"
    //   }
    // }
    // props.name => "Bui tuan"...

    // => có thể viết code như dưới đây, tên lấy từ bên component cha 
    // Viết theo kiểu object destructuring
    const { name, age, object } = props;
    // Tương tự cách viết
    // const name = props.name;
    // const age = props.age;
    // const object = props.object;

    return (
        <div>
            <div className="todo-data">
                <ul>
                    {/* <li className="todo-item">{name}</li>
                    <li className="todo-item">{age}</li>
                    <li className="todo-item">{object.name}</li>
                    <li className="todo-item">{object.age}</li>
                    <li className="todo-item">{object.address}</li> */}

                    <li>{JSON.stringify(props.todoList)}</li>
                </ul>
            </div>
        </div>
    );
}

export default TodoData;