import React from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { Container } from "./style";

export function Settings() {
    return (
        <>
            <Header />
        
            <SideBar />

            <Container>
                <div className="container__title">
                    <h2 className="title"><strong>Dashboard</strong> | Settings</h2>
                </div> 
            </Container>
        </>
    );
};