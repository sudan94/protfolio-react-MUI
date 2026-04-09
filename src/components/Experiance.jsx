import React from "react";
import data from '../data/data.json';
import { Typography, Card, CardContent, Container, CardActionArea, Grid, Box } from '@mui/material';
import useStyles from "../css/style";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1f1f1f' : '#fafafa',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontWeight: 700,
    boxShadow: "none"
}));

export default function Experiance() {
    const classes = useStyles();
    const bullet = '\u2022';
    return (
        <Container className={`${classes.cardGrid} ${classes.sectionBlock}`} maxWidth="lg" id="experiance">
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom className={classes.sectionHeading}>Work Experience</Typography>
            <Grid container spacing={2}>
                {data.experiance.map((exp, index) => (
                    <Grid item key={index} xs={12}>
                        <Card className={classes.cardGrid} sx={{
                            ':hover': {
                                boxShadow: 2,
                            },
                        }}>
                            <CardActionArea>
                                <CardContent className={classes.cardContent}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3}>
                                            <Item>{exp.start_date} - {exp.end_date}</Item>
                                        </Grid>
                                        <Grid item xs={12} md={9}>
                                            <Item>
                                                <Typography sx={{ fontSize: 20 }} color="text.primary" fontWeight="bold" gutterBottom>
                                                    {exp.title}
                                                </Typography>
                                                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                    {exp.content.map((content, idx) => (
                                                        <Typography key={idx} variant="body2" color="text.secondary" component="p" sx={{ letterSpacing: "0.02em" }}>
                                                            {`${bullet} ${content}`}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
