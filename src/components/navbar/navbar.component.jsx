import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export const Navbar = props => (
    <Menu inverted>
        <Container>
            <Menu.Item name="star wars api"></Menu.Item>
            <Menu.Item name="people"></Menu.Item>
            <Menu.Item name="planets"></Menu.Item>
        </Container>
    </Menu>
)