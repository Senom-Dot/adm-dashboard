import React from 'react';

import { api } from '../../services/api';

import {
    Container,
    Section,
    Form,
    Input
} from './style';

import { Button } from '../../components/Button';
import { Title } from '../../components/Title';

import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';

import { BiHide } from 'react-icons/bi';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from 'react-router';

export function NewUser() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [showPass, setShowPass] = React.useState(false);

    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        if(!username.trim() || !password){
            return;
        }
        
        await api.post('/users', {
            username,
            password
        })
        .then(() => {
            toast.success('User successfully created');
            history.push('/');
        })
        .catch(err => {
            toast.error(String(err.response.data.en));
        });
    }

    function handleShow() {
        return setShowPass(!showPass);
    };

    return (
        <>
            <Header/>

            <SideBar/>

            <Container>
                <Section>
                    <Title text="Attackz" />
                    <p className="section__subtitle">Create a new user!</p>

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

                        <Button text="Save"/>
                    </Form>
                </Section>
            </Container> 
        </>
    )
}