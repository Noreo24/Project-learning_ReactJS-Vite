import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Outlet } from 'react-router-dom';

// Sử dụng component bên trong component khác
// Component cha (App) sử dụng component con (MyComponent)
const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
