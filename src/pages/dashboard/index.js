import React, { useState } from "react";

import { Container, Grid, Card } from "./style";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { FiUsers } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';

import { HashLoader } from 'react-spinners';

export function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return (
        <>
            <Header/>

            <SideBar/>
            
            <Container>
                {
                    isLoading ? (
                        <div className="loading">
                            <HashLoader color="ABB69F" size="100px"/>
                        </div>
                    ) : (
                        <>
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
                        </>
                    )
                }
            </Container>
        </>
    )
}