import React from "react";
import styled from "styled-components";

function Kurator() {
    const [openModal, setOpenModal] = React.useState(false)

    const [teach, setTeach] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:9090/teacher/getAll')
            .then(res => res.json())
            .then(response => setTeach(response.content))

    }, [])


    // DELETE TEACHER FUNCTION
    const [deleteId, setDeleteId] = React.useState('')

    function deleteTeach() {
        fetch(`http://localhost:9090/teacher/deleteById/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())

        setOpenModal(false)
    }
    

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
                                <th className="table-th">Delete</th>
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
                                    <td className="teacher-delete-td">
                                        <span id={row.id} onClick={() => { setDeleteId(row.id); setOpenModal(true) }} className="material-icons-sharp teacher-delede-icon">delete</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {openModal && <div className="delete-modal">
                    <div className="delete-section">
                        <div className="modal-section-top">
                            <div className="modal-delete-bg">
                                <span className="material-icons-sharp modal-delete-icon">delete</span>
                            </div>
                            <h4 className="delete-modal-desc">You are about to delete a product</h4>
                        </div>
                        <div className="delete-modal-icon-section">
                            <button onClick={() => setOpenModal(false)} className="modal-cancel-btn" >Cancel</button>
                            <button onClick={deleteTeach} className="modal-delete-btn">Delete</button>
                        </div>
                    </div>
                </div>}
                {openModal && <div onClick={() => setOpenModal(false)} className="modal-blur"></div>}
            </div>
        </Wrapper>
    )
}

export default Kurator

const Wrapper = styled.div`
    .teach-container {
        position: relative;
        width: 82vw;
        height: 100vh;
        background-color: #fff5;

        backdrop-filter: blur(7px);
        box-shadow: 0 .4rem .8rem #0005;
        border-radius: .8rem;

        overflow: hidden;
    }

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

    .teacher-delede-icon {
        margin-left: 10px;
        color: #dc0000;
    }

    /* DELETE MODAL */
    .modal-blur {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.6);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        width: 82vw;
        height: 100vh;
        transition: 0.8s;
    }

    .delete-modal {
        position: absolute;
        left: 50%;
        top: 25%;
        transform: translate(-50%);
        z-index: 10;
        width: 28vw;
        background-color: var(--color-white);
        border-radius: .6rem;
    }

    .delete-section {
        padding: 1.2rem;
    }

    .modal-section-top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .delete-modal-icon-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: auto;
        margin-top: 20px;
        max-width: 190px;
        width: 100%;
    }

    .modal-delete-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        max-width: 60px;
        width: 100%;
        height: 60px;
        background-color: var(--color-light);
        border-radius: 50%;
    }
    
    .modal-delete-icon {
        color: #dc0000;
    }

    .modal-cancel-btn {
        padding: 8px 20px;
        border-radius: .6rem;
        background-color: var(--color-light);
        color: var(--color-gray-light);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
    }

    .modal-delete-btn {
        padding: 8px 20px;
        border-radius: .6rem;
        background-color: var(--color-danger);
        color: var(--color-white);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
    }

    .modal-delete-btn:hover {
        opacity: 0.8;
    }

    .modal-cancel-btn:hover {
        opacity: 0.8;
    }
`