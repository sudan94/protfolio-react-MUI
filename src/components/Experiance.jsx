import React from "react";
import data from '../data/data.json';
import { Typography, Card, CardContent,  Container, CardActionArea,  Grid } from '@mui/material'

import useStyles from "../css/style";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'dark' : 'light',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontWeight : 700,
    boxShadow: "none"
}));

export default function Experiance() {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="lg" id="experiance" >
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom className={classes.greetings}>Work Experiance</Typography>
            <Grid container spacing={2}>
                {data.experiance.map((exp, index) => (
                    <Grid item key={index} xs={12} sm={12} md={12}>
                        <Card className={classes.cardGrid} sx={{
                            ':hover': {
                                boxShadow: 2, // theme.shadows[20]
                            },

                        }} >
                            <CardActionArea>
                                <CardContent className={classes.cardContent}>
                                    <Grid container spacing={2}>
                                        <Grid elevation={0} item xs={12} md={3}>
                                            <Item>{exp.start_date} - {exp.end_date}</Item>
                                        </Grid>
                                        <Grid item xs={12} md={9}>
                                            <Item> <Typography sx={{ fontSize: 20 }} color="text.primary" fontWeight="bold" gutterBottom>
                                                {exp.title}
                                            </Typography>
                                                <Typography sx={{ fontSize: 17 }} color="theme.palette.text.secondary" fontWeight="bold" align="justify" gutterBottom> {exp.content}</Typography></Item>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}
