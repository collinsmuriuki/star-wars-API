import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

export const Navbar = () => (
    <Menu className="navbar" inverted>
        <Container>
            <Link to='/star-wars-API'>
                <Menu.Item name="star wars api"></Menu.Item>
            </Link>
            <Link to='/star-wars-API/people'>
                <Menu.Item name="people"></Menu.Item>
            </Link>
            <Link to='/star-wars-API/planets'>
                <Menu.Item name="planets"></Menu.Item>
            </Link>
            <Link to='/star-wars-API/starships'>
                <Menu.Item name="starships"></Menu.Item>
            </Link>        
        </Container>
    </Menu>
)