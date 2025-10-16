import React from "react";

const TodoData = (props) => {
    // props là 1 object có value là các thuộc tính được truyền từ component cha (App)
    // Viết theo kiểu object destructuring
    const { todoList } = props;

    return (
        <div>
            <div className="todo-data">
                <ul>
                    {todoList.map((item, index) => {
                        return (
                            // <React.Fragment key={item.id}>
                            <div className={`todo-item`} key={item.id}>
                                <li>{item.name}</li>
                                <button>Delete</button>
                            </div>
                            // </React.Fragment>
                            // Dùng React.Fragment để có thể thêm thuộc tính (VD: key)
                            // Cách ngắn gọn hơn là dùng thẻ <></> nhưng không thể thêm thuộc tính
                            // Còn nếu không thì bỏ fragment đi, chỉ để thẻ <div> là được (như trên
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TodoData;