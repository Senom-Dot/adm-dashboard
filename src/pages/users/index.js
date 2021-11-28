import React from "react";

import { Card, Container, Grid } from "./style";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';

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
                    <Card color="#00b360">       
                        <Link to="/new-user">
                            <AiOutlineUserAdd size="50" color="#ffff"/>
                            Create User
                        </Link>
                    </Card>

                    <Card color="#1168c5">
                        <Link to="/list-users">
                            <FaUsers size="55" color="#ffff" />
                            List users
                        </Link>
                    </Card>
                </Grid>
            </Container>
        </>
    );
};