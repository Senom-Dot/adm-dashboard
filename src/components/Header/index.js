import React from "react";

import { useAuth } from '../../hooks/useAuth';

import { 
    Wrapper,
    HeaderStyle,
    Nav
} from './style';

import { FaSignOutAlt } from 'react-icons/fa';

export function Header() {
    const { signOut, user } = useAuth();
    
    return (
        <Wrapper>
            <HeaderStyle>
                <h1 className="header__title"><strong>Att</strong>ackz</h1>
            </HeaderStyle>

            {
                user && (
                    <Nav>
                        <p className="nav__welcome">
                            Welcome, { user.user_name }
                        </p>

                        <button className="nav__signOut" onClick={signOut}><FaSignOutAlt /></button>
                    </Nav>
                )
            }
        </Wrapper>
    )
}