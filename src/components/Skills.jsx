import React from "react";
import data from "../data/data.json";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  CardActionArea,
  Box,
} from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import useStyles from "../css/style";

export default function Skills() {
  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          border: "1px solid",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  const badgeColors = [
    "#c62828",
    "#1565c0",
    "#2e7d32",
    "#6a1b9a",
    "#ef6c00",
    "#00695c",
  ];

  const classes = useStyles();
  return (
    <Container className={`${classes.cardGrid} ${classes.sectionBlock}`} maxWidth="lg" id="skills">
      <Typography
        variant="h4"
        align="left"
        color="textPrimary"
        gutterBottom
        className={classes.sectionHeading}
      >
        Skills
      </Typography>
      <Grid container spacing={4}>
        {data.skills.map((skills, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              className={classes.cardGrid}
              sx={{
                ":hover": {
                  boxShadow: 2, // theme.shadows[20]
                },
              }}
            >
                <CardContent className={classes.cardContent}>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {skills.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                      alignContent: "space-around",
                    }}
                  >
                    {skills.content.map((skill_items, index) => (
                      <Item
                        key={`${skills.title}-${index}`}
                        sx={{
                          backgroundColor: alpha(
                            badgeColors[index % badgeColors.length],
                            0.15
                          ),
                          borderColor: badgeColors[index % badgeColors.length],
                          color: badgeColors[index % badgeColors.length],
                          boxShadow: "none",
                        }}
                      >
                        {skill_items}
                      </Item>
                    ))}
                  </Box>

                  {/* <List  style={flexContainer}>
                                        <ListItem>
                                                <ListItemText  key={index}
                                                    primary={skill_items}
                                                />
                                        </ListItem>
                                    </List> */}
                </CardContent>
              <CardActionArea>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
