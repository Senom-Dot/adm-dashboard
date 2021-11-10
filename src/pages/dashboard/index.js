import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Container } from "./style";

export function Dashboard() {
    return (
        <>
            <Header/>

            <Container>
                <Link to="/new-user">Create new user</Link>
            </Container>
        </>
    )
}