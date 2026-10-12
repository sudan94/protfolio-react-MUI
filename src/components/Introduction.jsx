import React from "react";
import { Typography, Grid, Container, Box } from '@mui/material'
import useStyles from "../css/style";
import { tagSx } from "../css/tagColors";
import data from '../data/data.json';

export default function Introduction() {
    const classes = useStyles();

    const badges = ["Python", "FastAPI", "PostgreSQL", "React", "PHP 8+", "RabbitMQ", "Docker", "LangChain"];

    return (
        <div className={classes.container} id="introduction">
            <Box
                className={classes.heroGlow}
                sx={{
                    background: (theme) => theme.palette.mode === 'dark'
                        ? 'radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%)'
                        : 'radial-gradient(circle, rgba(59,130,246,0.16), transparent 70%)',
                }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={9}>
                        <Typography variant="overline" color="primary" className={classes.heroEyebrow}>
                            Software Engineer
                        </Typography>
                        <Typography className={classes.heroTitle} component="h1">
                            Hi, I'm <span className={classes.gradientText}>Sudan.</span>
                        </Typography>
                        <Box className={classes.heroAccent} />
                        <Typography className={classes.heroSub} color="textSecondary">
                            {data.profile}
                        </Typography>
                        <div className={classes.techRow}>
                            {badges.map((badge) => (
                                <Box
                                    key={badge}
                                    className={classes.techBadge}
                                    sx={tagSx(badge)}
                                >
                                    {badge}
                                </Box>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
