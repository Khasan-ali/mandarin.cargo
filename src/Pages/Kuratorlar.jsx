import React from "react";
import styled from "styled-components";
// import logo from '../Assets/Images/logo.jpg'

function Kurator() {

    const [teach, setTeach] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:9090/teacher/getAll')
            .then(res => res.json())
            .then(response => setTeach(response.content))

    }, [])

    // async function teachers(evt) {
    //     evt.preventDefault()

    //     const { fullname, code } = evt.target.elements

    //     const res = await fetch('http://localhost:9090/teacher/create', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             fullName: fullname.value,
    //             code: code.value,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })

    //     const data = await res.json()

    //     console.log(data);
    // }

    return (
        <Wrapper>
            <div className="teach-container">
                {/* <form onSubmit={teachers} className="teacher-form">
                    <input className="teacher-input" type="text" name="fullname" placeholder="fullname" />
                    <input className="teacher-input" type="text" name="code" placeholder="code" />

                    <button type="submit">Add Teacher</button>
                </form> */}
                <div className="table-header">
                <h2>Kurator page</h2>
                </div>
                <div className="teacher-render">
                    <table className="teach-table">
                        <thead>
                            <tr className="teach-thead-tr">
                                <th className="table-th">id</th>
                                <th className="table-th">FullName</th>
                                <th className="table-th">Code</th>
                                <th className="table-th">Student number</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teach.map(row => (
                                <tr className="teach-tbody-tr" key={row.id}>
                                    <td>{row.id}</td>
                                    <td className="table-fullname">
                                        <span className="material-icons-sharp teacher-img">account_circle</span>
                                        <p>{row.fullName}</p>
                                    </td>
                                    <td>{row.code}</td>
                                    <td>200</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default Kurator

const Wrapper = styled.div`
    .teach-container {
        width: 82vw;
        height: 100vh;
        background-color: #fff5;

        backdrop-filter: blur(7px);
        box-shadow: 0 .4rem .8rem #0005;
        border-radius: .8rem;

        overflow: hidden;
    }

    /* .teacher-render {
        min-height: 100vh;
        background: url() center / cover;
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    .table-header {
        width: 100%;
        height: 10%;
        background-color: #fff4;
        padding: .8rem 1rem;
    }

    .teacher-render {
        width: 95%;
        max-height: calc(89% - .8rem);
        background-color: #fffb;

        margin: .8rem auto;
        border-radius: .6rem;
        overflow: auto;
    }

    .teacher-render::-webkit-scrollbar {
        width: 0.5rem;
        height: 0%.5rem;
    }

    .teacher-render::-webkit-scrollbar-thumb {
        border-radius: .5rem;
        background-color: #0004;
        visibility: hidden;
    }

    .teacher-render:hover::-webkit-scrollbar-thumb {
        visibility: visible;
    }

    .teach-table {
        width: 100%;
    }

    .teacher-img {
        /* width: 36px;
        height: 36px; */
        margin-right: .5rem;
        border-radius: 50%;
    }

    table, th, td {
        border-collapse: collapse;
        padding: 1rem;
    }

    .table-th {
        position: sticky;
        top: 0;
        left: 0;
        background-color: #d5d1defe;
        text-align: left;
    }

    .teach-tbody-tr {
        cursor: pointer;
    }

    .teach-tbody-tr:nth-child(even) {
        background-color: #0000000b;
    }

    .teach-tbody-tr:hover {
        opacity: 0.8;
    }

    .table-fullname {
        display: flex;
        align-items: center;
    }

`