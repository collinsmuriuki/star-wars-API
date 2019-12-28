import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

export const Navbar = () => (
    <Menu className="navbar" inverted>
        <Container>
            <Link to='/'>
                <Menu.Item name="star wars api"></Menu.Item>
            </Link>
            <Link to='/people'>
                <Menu.Item name="people"></Menu.Item>
            </Link>
            <Link to='/planets'>
                <Menu.Item name="planets"></Menu.Item>
            </Link>
            <Link to='/starships'>
                <Menu.Item name="starships"></Menu.Item>
            </Link>        
        </Container>
    </Menu>
)