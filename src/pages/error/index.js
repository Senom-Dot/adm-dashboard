import React from 'react';

import { Container } from "./style";

import NotFoundImage from '../../assets/img/404.svg';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <>
            <Header/>

            <Container>
                <img className="error" src={NotFoundImage} alt="404"/>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button text="Back to home"/>
                </Link>
            </Container>
        </>
    )
}