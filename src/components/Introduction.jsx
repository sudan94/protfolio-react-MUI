import React from "react";
import { Typography, Grid, Container, Button, Box } from '@mui/material'
import useStyles from "../css/style";

export default function Introduction() {
    const classes = useStyles();

    const badges = [
        { label: "PHP 8.3", color: "#111" },
        { label: "FastAPI", color: "#2D6EFA" },
        { label: "Laravel", color: "#FC7635" },
        { label: "RabbitMQ", color: "#B52E27" },
        { label: "Docker", color: "#2396F6" },
        { label: "LangChain", color: "#00B894" }
    ];

    return (
        <div className={classes.container} id="introduction">
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={7}>
                        <Typography className={classes.heroTitle} component="h1">Hi, I'm Sudan.</Typography>
                        <div className={classes.heroAccent}></div>
                        <Typography className={classes.heroSub} color="textSecondary">
                            I write code for a living and for fun. PHP by day, Python and LLMs by night. I’m passionate about crafting efficient, scalable software and exploring the latest in AI and LLM technologies. When I’m not coding, you can find me tinkering with new technologies or enjoying a good book.
                        </Typography>

                        <div className={classes.techRow}>
                            {badges.map((badge) => (
                                <Box
                                    key={badge.label}
                                    className={classes.techBadge}
                                    sx={{ backgroundColor: badge.color }}
                                >
                                    {badge.label}
                                </Box>
                            ))}
                        </div>
                    </Grid>
                    {/* <Grid item xs={12} md={5}>
                        <Box sx={{ border: '1px solid #111', borderRadius: 2, padding: 3, lineHeight: 1.6, backgroundColor: "#fff" }}>
                            <Typography variant="subtitle1" fontWeight={600}>Snapshot</Typography>
                            <Typography variant="body2" paragraph>4+ years shaping APIs and distributed flows for RTL, naming shows such as BILD and Redseven.</Typography>
                            <Typography variant="body2" paragraph>Tech stack: PHP 8.3, FastAPI, Laravel, RabbitMQ, Docker, Linux, CI/CD.</Typography>
                            <Typography variant="body2" paragraph>AI/LLM work includes LangChain, Whisper, and prompt-led summaries.</Typography>
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
        </div>
    )
}
