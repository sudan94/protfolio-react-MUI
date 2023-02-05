import React from "react";
import data from '../data/data.json';
import { Typography, Card, CardContent, Grid, Container, CardActionArea, List, ListItem, ListItemText } from '@mui/material'
import useStyles from "../css/style";



export default function Skills() {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="lg" id="skills">
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom className={classes.greetings}> Skills </Typography>
            <Grid container spacing={4}>
                {data.skills.map((skills, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.cardGrid} sx={{
                            ':hover': {
                                boxShadow: 2, // theme.shadows[20]
                            },

                        }} >
                            <CardActionArea>
                                <CardContent className={classes.cardContent}>
                                    <Typography sx={{ fontSize: 20 }} color="text.primary" fontWeight="bold" gutterBottom>
                                        {skills.title}
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            {skills.content.map((skill_items, index) => (
                                                <ListItemText key={index}
                                                    primary={skill_items}
                                                />
                                            ))}
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}
