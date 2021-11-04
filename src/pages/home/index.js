import React from "react";

import {
    Container,
    Main,
    Form,
    Input,
} from "./style";

import { useAuth } from '../../hooks/useAuth';

import { Button } from './../../components/Button/index';
import { Title } from "../../components/Title";

import { BiHide } from 'react-icons/bi';

export function Home() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [showPass, setShowPass] = React.useState(false);

    const { signIn } = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();

        if(!username.trim() || !password){
            return;
        }

        await signIn({ username, password })
    };

    function handleShow() {
        return setShowPass(!showPass);
    };

    return (
        <Container>
            <Main>
                <Title text="Attackz"/>

                <Form onSubmit={handleSubmit}>
                    <label>
                        <span>Username</span>
                        <Input
                            placeholder="Username.."
                            onChange={event => setUsername(event.target.value)}
                            required    
                        />
                    </label>

                    <label>
                        <span>Password</span>
                        <Input
                            placeholder="Password.."
                            onChange={event => setPassword(event.target.value)}
                            type={!showPass ? 'password' : 'text'}
                            required    
                        />

                        <i className="form__hideIcon" onClick={handleShow}><BiHide /></i>
                    </label>

                    <Button text="SignIn" onClick={handleSubmit} />
                </Form>
            </Main>
        </Container>
    )
}