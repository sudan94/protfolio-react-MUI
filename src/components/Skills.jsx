import React from "react";
import data from "../data/data.json";
import { Typography, Card, CardContent, Grid, Container, Box, Chip } from "@mui/material";
import useStyles from "../css/style";
import { tagSx } from "../css/tagColors";

export default function Skills() {
  const classes = useStyles();
  return (
    <Container className={classes.sectionBlock} maxWidth="lg" id="skills">
      <Typography variant="h4" color="textPrimary" className={classes.sectionHeading}>
        Skills
      </Typography>
      <Box className={classes.sectionRule} />
      <Grid container spacing={3}>
        {data.skills.map((skills, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ fontSize: 18, mb: 2 }} color="text.primary" fontWeight="bold">
                  {skills.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.content.map((skill) => (
                    <Chip
                      key={`${skills.title}-${skill}`}
                      label={skill}
                      sx={tagSx(skill)}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
