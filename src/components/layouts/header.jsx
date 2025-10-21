import './header.css'
const Header = () => {
    return (
        <ul className="header">
            <li className="header-item"><a className="active" href="/">Home</a></li>
            <li className="header-item"><a href="/users">Users</a></li>
            <li className="header-item"><a href="/products">Products</a></li>
        </ul>
    )
}

export default Header