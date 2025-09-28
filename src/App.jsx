import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Component: Viết hoa chữ cái đầu tiên
// Component: Function (Hàm) trả về JSX (HTML + CSS + JS)
// JSX: Giống HTML nhưng có thể nhúng JS bên trong
// JSX: Chỉ có thể trả về 1 thẻ bao ngoài (VD: div, section, fragment <> </>)
// () => {}: Arrow function (Giống lambda trong Java)
// Mẹo: Nên để giá trị return trong ngoặc ()
// const MyComponent = () => {
//   return (
//     <div>My Component</div>
//   );
// }

// Sử dụng component bên trong component khác
// Component cha (App) sử dụng component con (MyComponent)
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello world - BAT!</h1>
      {/* <MyComponent /> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
