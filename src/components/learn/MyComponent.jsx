// Component: Viết hoa chữ cái đầu tiên
// Component: Function (Hàm) trả về JSX (HTML + CSS + JS)
// JSX: Giống HTML nhưng có thể nhúng JS bên trong
// JSX: Chỉ có thể trả về 1 thẻ bao ngoài (VD: div, section, fragment <> </>)
// () => {}: Arrow function (Giống lambda trong Java)
// Mẹo: Nên để giá trị return trong ngoặc ()
const MyComponent = () => {
    return (
        <div style={{ color: 'blue' }}>My Component</div>
    );
}

// const AnotherComponent = () => {
//     return (
//         <div>Another Component</div>
//     );
// }

// Dùng từ khóa export để có thể sử dụng component này ở file khác
export default MyComponent;
// export { MyComponent, AnotherComponent, ... };

// Dùng từ khóa default: File component luôn xuất 1 giá trị duy nhất, kể cả khi có nhiều component bên trong file
// VD: import MyComponent from './components/learn/MyComponent' - dùng default

// Không dùng default thì import component này phải có dấu ngoặc {}, dùng khi có nhiều giá trị xuất ra từ file
// VD: import { MyComponent, AnotherComponent } from './components/learn/MyComponent' - không dùng default
