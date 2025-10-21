import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <ul className="header">
            <li className="header-item"><Link className="active" to="/">Home</Link></li>
            <li className="header-item"><Link to="/users">Users</Link></li>
            <li className="header-item"><Link to="/products">Products</Link></li>
        </ul>
    )
    // Dùng thẻ <a></a> để tạo link chuyển trang nhưng sẽ load lại toàn bộ trang
    // Cách tốt hơn là dùng Link hoặc NavLink của react-router-dom
}

export default Header