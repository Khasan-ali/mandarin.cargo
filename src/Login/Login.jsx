import React from "react";
import useToken from '../Hooks/useToken'

function Login() {

    const [, setToken] = useToken()

    async function handleSubmit(evt) {
        evt.preventDefault()

        const { username, password } = evt.target.elements

        const res = await fetch('http://localhost:9090/api/login', {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(res.ok) {
            const data = await res.json()
            setToken(data)
        }

    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username.." name="username" />
                <input type="password" placeholder="password.." name="password" />

                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default Login