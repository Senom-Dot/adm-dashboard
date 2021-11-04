import React from "react";

import { Header } from "../../components/Header";
import { Container } from "./style";

export function Dashboard() {
    return (
        <>
            <Header/>

            <Container>
                <a href="/new-user">Create new user</a>
            </Container>
        </>
    )
}