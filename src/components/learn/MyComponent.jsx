// Component: Viết hoa chữ cái đầu tiên
// Component: Function (Hàm) trả về JSX (HTML + CSS + JS)
// JSX: Giống HTML nhưng có thể nhúng JS bên trong
// JSX: Chỉ có thể trả về 1 thẻ bao ngoài (VD: div, section, fragment <> </>)
// () => {}: Arrow function (Giống lambda trong Java)
// Mẹo: Nên để giá trị return trong ngoặc ()
const MyComponent = () => {

    // JSX: Nhúng JS bên trong bằng cách dùng dấu {}

    // string
    const name = 'Bùi Anh Tuấn';

    // number
    const age = 22;

    // - boolean, undefined, null không hiển thị giá trị trực tiếp trên giao diện
    // boolean
    const isMale = true;

    // undefined
    const address = undefined;

    // null
    const phone = null;

    // object
    const info = { name: 'Bùi Anh Tuấn', age: 22, isMale: true };

    // array
    const hobbies = ['Ăn', 'Chơi', 'Ngủ'];
    return (
        <>
            <div> {console.log('Hello')} </div>
            <div style={{ color: 'white' }}> Kiểu string: {name}'s component </div>
            <div style={{ color: 'red' }}> Kiểu number: Age: {age} </div>
            <div style={{ color: 'yellow' }}> Kiểu boolean: Is Male: {isMale ? 'Yes' : 'No'} </div>
            <div style={{ color: 'green' }}> Kiểu undefined: Address: {address} </div>
            <div style={{ color: 'grey' }}> Kiểu null: Phone: {phone} </div>
            <div> Kiểu object: Info: Name: {info.name}, Age: {info.age}, Is Male: {info.isMale ? 'Yes' : 'No'} </div>
            <div> Kiểu object: {JSON.stringify(info)} </div>
            <div> Kiểu array: Hobbies: {hobbies.join(', ')} </div>
            <div> Kiểu array: {JSON.stringify(hobbies)} </div>
        </>
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
