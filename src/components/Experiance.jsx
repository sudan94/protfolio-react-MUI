import React from "react";
import data from '../data/data.json';
import { Typography, Card, CardContent, Container, Grid, Box, Chip } from '@mui/material';
import useStyles from "../css/style";
import { tagSx } from "../css/tagColors";

export default function Experiance() {
    const classes = useStyles();
    return (
        <Container className={classes.sectionBlock} maxWidth="lg" id="experiance">
            <Typography variant="h4" color="textPrimary" className={classes.sectionHeading}>Work Experience</Typography>
            <Box className={classes.sectionRule} />
            <Grid container spacing={3}>
                {data.experiance.map((exp, index) => (
                    <Grid item key={index} xs={12}>
                        <Card>
                            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <Typography variant="body2" color="primary" fontWeight={600}>
                                            {exp.start_date} – {exp.end_date}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Typography sx={{ fontSize: 20 }} color="text.primary" fontWeight="bold">
                                            {exp.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic", mb: 1.5 }}>
                                            {exp.institute}
                                        </Typography>
                                        <Box component="ul" className={classes.bulletList}>
                                            {exp.content.map((content, idx) => (
                                                <Typography key={idx} component="li" variant="body2" color="text.secondary">
                                                    {content}
                                                </Typography>
                                            ))}
                                        </Box>
                                        {exp.skills && (
                                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                                                {exp.skills.map((skill) => (
                                                    <Chip key={skill} label={skill} size="small" sx={tagSx(skill)} />
                                                ))}
                                            </Box>
                                        )}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
