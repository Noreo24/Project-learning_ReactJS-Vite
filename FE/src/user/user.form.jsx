import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async () => {
        const response = await createUserAPI(fullName, email, password, phone);
        if (response.data) {
            notification.success({
                message: "User created successfully",
                description: `User ID: ${response.data.id}`
            })
        } else {
            notification.error({
                message: "User creation failed",
                description: JSON.stringify(response.message)
            });
        }
    }
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>Fullname</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={() => handleSubmit()}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;