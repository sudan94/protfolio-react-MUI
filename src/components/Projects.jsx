import React from "react";
import data from '../data/data.json';
import { Typography, Card, CardActions, CardContent, Grid, Container, Link, CardActionArea } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useStyles from "../css/style";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'dark' : 'light',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: "none"
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="lg" id="projects">
        <Typography variant="h4" align="left" color="textPrimary" gutterBottom className={classes.greetings}> Projects </Typography>
        <Grid container spacing={4}>
            {data.projects.map((projects, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className={classes.cardGrid} sx={{
                        ':hover': {
                            boxShadow: 2, // theme.shadows[20]
                        },

                    }} >
                        <CardActionArea>
                            <CardContent className={classes.cardContent}>
                                <Typography sx={{ fontSize: 20 }} color="text.primary" fontWeight="bold" gutterBottom>
                                    {projects.title}
                                </Typography>
                                <Typography sx={{ fontSize: 17 }} color="text.secondary" fontWeight="bold" align="justify" gutterBottom> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur illo iste laborum fugiat commodi vero ab quis rerum. Laudantium repellat aliquid provident porro libero illum enim maxime, placeat repellendus.</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container spacing={1}>
                                    <Grid elevation={0} item xs={6} md={2}>
                                        <Item > <Link variant="button" href={projects.github}><GitHubIcon fontSize="large" color="action" sx={{
                                            ':hover': {
                                                color: "black",
                                            },

                                        }} /> </Link></Item>
                                    </Grid>
                                    <Grid elevation={0} item xs={6} md={2}>
                                        <Item> <Link variant="button" href={projects.link}><LinkIcon fontSize="large" color="action" sx={{
                                            ':hover': {
                                                color: "black",
                                            },

                                        }} /> </Link></Item>
                                    </Grid>

                                </Grid>

                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}

        </Grid>
    </Container>
    )
}
