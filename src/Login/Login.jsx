import React from "react";
import useToken from '../Hooks/useToken'
import styled from "styled-components";

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
        if (res.ok) {
            const data = await res.json()
            setToken(data)
        }

    }

    return (
        <Wrapper>
            <div className="container">
                <div className="login-section">
                    <h1 className="login-name">Login</h1>

                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__input-section">
                            <span className="material-icons-sharp">
                                person
                            </span>
                            <input className="form__input" type="text" placeholder="username.." name="username" />
                        </div>
                        <div className="form__input-section">
                            <span className="material-icons-sharp">
                                lock
                            </span>
                            <input className="form__input" type="password" placeholder="password.." name="password" />
                        </div>
                        <button className="form__btn" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Login


const Wrapper = styled.div`
.container {
    max-width: 1240px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
}

.login-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}

.login-name {
    margin: 0;
    margin-bottom: 30px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    width: 100%;
}

.form__input-section {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    background-color: #ebe4fc;
    border-radius: 10px;
}

.form__input-section:not(:last-child) {
    margin-bottom: 20px;
}

.form__input {
    padding: 0px 10px;
    width: 100%;
    background-color: transparent;
    border: none;
}

.form__btn {
    padding: 10px 5px;
    background-color: #b8b8e7;
    border: none;
    border-radius: 12px;
    max-width: 100px;
    width: 100%;
    cursor: pointer;
}
`