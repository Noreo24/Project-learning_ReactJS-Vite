import { Link, NavLink } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <ul className="header">
            <li className="header-item"><NavLink to="/">Home</NavLink></li>
            <li className="header-item"><NavLink to="/users">Users</NavLink></li>
            <li className="header-item"><NavLink to="/products">Products</NavLink></li>
        </ul>
    )
    // Dùng thẻ <a></a> để tạo link chuyển trang nhưng sẽ load lại toàn bộ trang
    // Cách tốt hơn là dùng Link hoặc NavLink của react-router-dom
    // Dùng NavLink thay vì Link để có thể thêm class active khi trang đang ở đường dẫn đó
}

export default Header