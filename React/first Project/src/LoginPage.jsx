import { useState } from "react";

let LoginPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let clicking = () => {
        alert(`welcome, ${username}`);
    }

    return (
        <>
            <input type="text" 
                value={username}
                onChange={(e) => { setUserName(e.target.value); }}
            />
            <input type="password" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); }}
            />

            <button onClick={clicking}>Login</button>

            <p>Hello,{username}</p>
            <p>Password,{password}</p>
        </>
    )
}
export default LoginPage;