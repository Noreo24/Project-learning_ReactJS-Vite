import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    // Hoặc data = { fullName, email, password, phone }
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = () => {

}

export {
    createUserAPI,
    updateUserAPI
}