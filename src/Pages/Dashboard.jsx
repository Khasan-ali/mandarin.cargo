import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Dashboard() {
    return (
        <Wrapper>
            <aside className="aside">
                <button id="close-btn">
                    <span className="material-icons-sharp">close</span>
                </button>
                <ul className="sidebar">
                    <li className="sidebar-item">
                        <NavLink className={'sidebar-link'} to={'/'}>
                        <span className="material-icons-sharp sidebar-span">dashboard</span>
                        <h4 className="sideber-title">Home</h4>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className={'sidebar-link'} to={'/scanbase'}>
                        <span className="material-icons-sharp sidebar-span">qr_code_scanner</span>
                        <h4 className="sideber-title">Scanner base</h4>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className={'sidebar-link'} to={'/kurator'}>
                        <span className="material-icons-sharp sidebar-span">person_add</span>
                        <h4 className="sideber-title">Kuratorlar</h4>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
    .aside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 88vh;
    }

    #close-btn {
        display: none;
    }

    .sidebar-link {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        height: 4.2rem;
        color: var(--color-gray-light);
        position: relative;
    }

    .sidebar-span {
        font-size: 1.7rem;
        margin-left: 3rem;
        transition: all 300ms ease;
    }

    .sidebar-link.active {
        background: var(--color-white);
        color: var(--color-primary);
    }

    .sidebar-link.active::before {
        content: "";
        width: 6px;
        height: 100%;
        position: absolute;
        background: var(--color-primary);
    }

    .sidebar-link:hover {
        color: var(--color-primary);
    }

    .sidebar-link:hover .sidebar-span {
        margin-left: 2rem;
    }

    .sideber-title {
        font-weight: 500;
    }
`