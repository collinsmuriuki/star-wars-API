import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export const Planets = ({data}) => (
    <>
        <h1>Planets</h1>
        <Grid columns={3}>
            {data.map((planet, i) => (
            <Grid.Column key={i}>
                <Card>
                    <Card.Content>
                        <Card.Header>{planet.name}</Card.Header>
                        <Card.Description>
                            <strong>Rotation Period</strong>
                            <p>{planet.rotation_period}</p>
                            <strong>Orbital Period</strong>
                            <p>{planet.orbital_period}</p>
                            <strong>Diameter</strong>
                            <p>{planet.diameter}</p>
                            <strong>Climate</strong>
                            <p>{planet.climate}</p>
                            <strong>Terrain</strong>
                            <p>{planet.terrain}</p>
                            <strong>Surface Water</strong>
                            <p>{planet.surface_water}</p>
                            <strong>Population</strong>
                            <p>{planet.population}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
            ))}
        </Grid>
    </>
)