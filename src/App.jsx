import React, { useState, useMemo } from "react";
import { Typography, CssBaseline, Container, Divider, ThemeProvider, createTheme } from '@mui/material'
import useStyles from "./css/style";
import Experiance from './components/Experiance';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Introduction from './components/Introduction';
import Contacts from './components/Contact';
import Nav from './components/Nav';
import './App.css';

const App = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();

    // Light theme by default, remembered across visits
    const [mode, setMode] = useState(() => localStorage.getItem("darkState") === "dark" ? "dark" : "light");
    const changeTheme = () => {
        const next = mode === "light" ? "dark" : "light";
        localStorage.setItem("darkState", next);
        setMode(next);
    };

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: { main: mode === "dark" ? "#f5f5f5" : "#2563eb" },
            secondary: { main: mode === "dark" ? "#a3a3a3" : "#64748b" },
            background: {
                default: mode === "dark" ? "#0a0a0a" : "#f5f7fb",
                paper: mode === "dark" ? "#141414" : "#ffffff",
            },
            text: mode === "dark"
                ? { primary: "#f5f5f5", secondary: "#a3a3a3" }
                : { primary: "#0f172a", secondary: "#475569" },
            divider: mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.08)",
        },
        shape: { borderRadius: 14 },
        typography: {
            fontFamily: ['Poppins', "sans-serif"].join(','),
            fontSize: 16,
            h4: { fontWeight: 700, letterSpacing: "0.02em" },
        },
        components: {
            MuiCard: {
                defaultProps: { elevation: 0 },
                styleOverrides: {
                    root: ({ theme }) => ({
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                        "&:hover": {
                            transform: "translateY(-2px)",
                            borderColor: theme.palette.primary.main,
                            boxShadow: theme.palette.mode === "dark"
                                ? "0 12px 32px rgba(0,0,0,0.6)"
                                : "0 12px 32px rgba(37,99,235,0.12)",
                        },
                    }),
                },
            },
        },
    }), [mode]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Nav data={changeTheme}/>
                <main>
                    <Introduction />
                    <Experiance />
                    {/* Projects section hidden for now */}
                    {/* <Projects /> */}
                    <Skills />
                    <Contacts />
                </main>
                <Container align="center" maxWidth="lg">
                    <Divider />
                </Container>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>Made By Sudan</Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>© {year}</Typography>
                </footer>
            </ThemeProvider>
        </>
    )
}

export default App;
