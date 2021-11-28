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
    const { 
        signOut,
        hamburguer, 
        showHamburguer
    } = useAuth();

    return (
        <>
            {
                hamburguer && (
                    <Container>
                        <Aside>
                            <p className="subtitle">Navigation</p>

                            <ul className="nav__menu">
                                <li>
                                    <Link className="nav__button" to="/" onClick={() => showHamburguer(false)}>
                                        <AiOutlineHome /> Home
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link className="nav__button" to="/users" onClick={() => showHamburguer(false)}><FiUsers/> Users</Link>
                                </li>

                                <li>
                                    <Link className="nav__button" to="/settings" onClick={() => showHamburguer(false)}><GoSettings/> Settings</Link>
                                </li>
                            </ul>

                            <p className="subtitle">Configurations</p>

                            <ul className="nav__menu">
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
        </>
    )
}