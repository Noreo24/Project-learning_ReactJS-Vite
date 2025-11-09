import { Button, Input } from "antd";

const UserForm = () => {
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>Fullname</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;