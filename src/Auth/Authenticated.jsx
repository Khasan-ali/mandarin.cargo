import React from "react";
import styled from "styled-components";
import Logojon from '../Assets/Images/logo.jpg'
import Logo from '../Assets/Images/logojon.png'

function Authenticated() {
    return (
        <Wrapper>
            <nav className="nav">
                <div className="container">
                    <img src={Logo} alt="logojon" width={'112'} />
                    <div className="search-bar">
                        <span className="material-icons-sharp">
                            search
                        </span>
                        <input className="searchbar-input" type="search" placeholder="search" />
                    </div>
                    <div className="profile-area">
                        <div className="theme-btn">
                            <span className="material-icons-sharp active">
                                light_mode
                            </span>
                            <span className="material-icons-sharp">
                                dark_mode
                            </span>
                        </div>
                        <div className="profile">
                            <div className="profile-photo">
                                <img src={Logojon} alt="profile photos" />
                            </div>
                            <h5>Mandarin Cargo</h5>
                        </div>
                        <button id="menu-btn">
                            <span className="material-icons-sharp">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </Wrapper>
    )
}

export default Authenticated


const Wrapper = styled.div`
.nav {
    width: 100%;
    background: #fff;
    padding: 16px 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 96%;
    margin: 0 auto;
}

.search-bar {
    padding: 8px 25.6px;
    background-color: var(--color-light);
    width: 32vw;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--color-gray-light);
    position: absolute;
    left: 15%;
}

.searchbar-input {
    color: var(--color-dark);
    background: transparent;
    width: 100%;
}

.searchbar-input::placeholder {
    color: #56555e;
}

.profile-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
}

.theme-btn {
    display: flex;
    background: var(--color-light);
    width: 80px;
    height: 32px;
    border-radius: 6px;
    cursor: pointer;
}

.theme-btn span {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
}

.theme-btn .active {
    background: var(--color-dark);
    border-radius: 6px;
    color:#fff;
}

.profile {
    display: flex;
    gap: 16px;
    align-items: center;
}

.profile-photo {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
}

#menu-btn {
    display: none;
}
`