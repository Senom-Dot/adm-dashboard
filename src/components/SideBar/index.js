import React from "react";

import { Aside, Container } from "./style";

import { useAuth } from "../../hooks/useAuth";

import { FiUsers } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoCodeSlashOutline } from 'react-icons/io5';

import { Link } from "react-router-dom";

export function SideBar() {
    const { signOut } = useAuth();

    return (
        <Container>
            <Aside>
                <p className="subtitle">Navigation</p>

                <ul>
                    <li>
                        <Link className="nav__button" to="/">
                            <AiOutlineHome /> Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link className="nav__button" to="/users"><FiUsers/> Users</Link>
                    </li>

                    <li>
                        <Link className="nav__button" to="/settings"><GoSettings/> Settings</Link>
                    </li>
                </ul>

                <p className="subtitle">Configurations</p>

                <ul>
                    <li>
                        <a className="nav__button" href="https://attackz-api.herokuapp.com/docs/">
                            <IoCodeSlashOutline/> Open API
                        </a>
                    </li>

                    <li>
                        <button className="signOut" onClick={signOut}> <FaSignOutAlt /> Logout</button>
                    </li>
                </ul>
            </Aside>
        </Container>
    )
}