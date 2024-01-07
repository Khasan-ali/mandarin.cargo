import React from "react";
import styled from "styled-components";

function Kurator() {

    const [state, setState] = React.useState()

    fetch('http://localhost:9090/teacher/getAllNotPageable')
    .then(res => res.json())
    .then(response => console.log(response))

    async function teachers(evt) {
        evt.preventDefault()

        const { fullname, code } = evt.target.elements

        const res = await fetch('http://localhost:9090/teacher/create', {
            method: 'POST',
            body: JSON.stringify({
                fullName: fullname.value,
                code: code.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json()

        console.log(data);
    }

    return (
        <Wrapper>
        <div className="container">
        <h1>Kurator page</h1>
        <form onSubmit={teachers} className="teacher-form">
            <input className="teacher-input" type="text" name="fullname" placeholder="fullname" />
            <input className="teacher-input" type="text" name="code" placeholder="code" />

            <button type="submit">Add Teacher</button>
        </form>
        </div>
        </Wrapper>
    )
}

export default Kurator

const Wrapper = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`