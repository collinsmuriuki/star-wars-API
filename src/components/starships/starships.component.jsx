import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './starships.styles.css';

export const Starships = ({data}) => (
    <>
    <h1>Starships</h1>
        <Grid columns={3}>
            {data.map((starship, i) => (
            <Grid.Column key={i}>
                <Card>
                    <Card.Content>
                        <Card.Header>{starship.name}</Card.Header>
                        <Card.Description>
                            <strong>Starship Class</strong>
                            <p>{starship.starship_class}</p>
                            <strong>Model</strong>
                            <p>{starship.model}</p>
                            <strong>Manufacturer</strong>
                            <p>{starship.manufacturer}</p>
                            <strong>Max Atmosphering Speed</strong>
                            <p>{starship.max_atmosphering_speed}</p>
                            <strong>Passengers</strong>
                            <p>{starship.passengers}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
            ))}
        </Grid>
    </>
)