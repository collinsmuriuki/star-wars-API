import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import './navbar.styles.css';

export const Navbar = () => (
    <Menu className="navbar" inverted>
        <Container>
            <Menu.Item name="star wars api"></Menu.Item>
            <Menu.Item name="people"></Menu.Item>
            <Menu.Item name="planets"></Menu.Item>
        </Container>
    </Menu>
)