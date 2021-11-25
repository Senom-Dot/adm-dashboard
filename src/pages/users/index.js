import React from "react";

import { Card, Container, Grid } from "./style";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { AiOutlineUserAdd } from 'react-icons/ai';

import { Link } from "react-router-dom";

export function Users() {
    return (
        <>
            <Header />
        
            <SideBar />

            <Container>
                <div className="container__title">
                    <h2 className="title"><strong>Dashboard</strong> | Users</h2>
                </div>

                <Grid>
                    <Card>       
                        <Link to="/new-user">
                            <AiOutlineUserAdd size="50" color="#ffff"/>
                            Create User
                        </Link>
                    </Card>
                </Grid>
            </Container>
        </>
    );
};