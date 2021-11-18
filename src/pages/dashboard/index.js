import React from "react";

import { Container, Grid, Card } from "./style";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { FiUsers } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';

export function Dashboard() {
    return (
        <>
            <Header/>

            <SideBar/>
            
            <Container>
                <div className="container__title">
                    <h2 className="title"><strong>Dashboard</strong></h2>
                </div>
                
                <Grid>
                    <Card>       
                        <Link to="/users">
                            <FiUsers size="50" color="#ffff"/>
                            Users
                        </Link>
                    </Card>

                    <Card style={{ background: '#136897'}}>       
                        <Link to="/settings">
                            <GoSettings size="50" color="#ffff"/>
                            Settings
                        </Link>
                    </Card>
                </Grid>
            </Container>
        </>
    )
}