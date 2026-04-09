import React from "react";
import { Container, Link, Box, Typography } from '@mui/material'
import useStyles from "../css/style";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

export default function Contact() {
    const classes = useStyles();
    const theme = useTheme();
    const cardBg = theme.palette.mode === "dark" ? "#0d0d0d" : "#fff";
    const shadow = theme.palette.mode === "dark" ? "0 15px 35px rgba(0,0,0,0.5)" : "0 20px 45px rgba(0,0,0,0.08)";
    const textColor = theme.palette.text.primary;
    return (
        <Container className={classes.contact} align="center" maxWidth="lg" id="contact">
            <Box
                sx={{
                    borderRadius: "20px",
                    border: `1px solid ${textColor}`,
                    padding: "2.5rem",
                    maxWidth: "850px",
                    margin: "0 auto",
                    backgroundColor: cardBg,
                    boxShadow: shadow,
                    textAlign: "left"
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                        textAlign: "center",
                    }}
                >
                    Contact
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1rem",
                        maxWidth: "640px",
                        marginBottom: "1.5rem",
                        color: theme.palette.mode === "dark" ? "#e0e0e0" : "rgba(0,0,0,0.8)"
                    }}
                >
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "1rem"
                    }}
                >
                    {[
                        { href: "mailto:sudanupadhaya@gmail.com", label: "Email me", icon: <MailOutlineIcon /> },
                        { href: "https://github.com/sudan94", label: "GitHub", icon: <GitHubIcon /> },
                        { href: "https://linkedin.com/in/sudan-upadhaya-9185b3185", label: "LinkedIn", icon: <LinkedInIcon /> },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            underline="none"
                            sx={{
                                borderRadius: "999px",
                                border: `1px solid ${textColor}`,
                                padding: "0.55rem 1.6rem",
                                textTransform: "none",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                color: textColor,
                                "&:hover": {
                                    backgroundColor: theme.palette.mode === "dark"
                                        ? "rgba(255,255,255,0.05)"
                                        : "rgba(0,0,0,0.04)"
                                }
                            }}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

