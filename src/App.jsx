import React, { useState} from "react";
import { Typography, CssBaseline, Container, Divider, ThemeProvider, createTheme } from '@mui/material'
import useStyles from "./css/style";
import Experiance from './components/Experiance';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Introduction from './components/Introduction';
import Contacts from './components/Contact';
import Nav from './components/Nav';
import './App.css';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const App = (props: Props) => {
    const classes = useStyles();

    let existingPreference = localStorage.getItem("darkState");
    if(!existingPreference){
        existingPreference = "light";
    }

    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // This function is triggered when the Switch component is toggled
    const changeTheme = () => {
        existingPreference === "light" ? localStorage.setItem("darkState", "dark") :  localStorage.setItem("darkState", "light");
        setIsDarkTheme(!isDarkTheme);
    };

    // Define theme settings
    const theme = createTheme({
        palette: {
            mode: existingPreference
        },
        typography: {
            fontFamily: [
                'Poppins', "sans-serif",

            ].join(','),
            fontSize: 18,
            fontWeight: 1500,
            components: {
                MuiCssBaseline: {
                    styleOverrides: `
            @font-face {
              font-weight: 700;
            }
          `,
                },
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Nav data={changeTheme}/>
                <main>
                    <Introduction />
                    <Experiance />
                    <Projects />
                    <Skills />
                    <Contacts />
                </main>
                <Container align="center" maxWidth="lg">
                    <Divider variant="string" />
                </Container>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>Made By Sudan</Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>©copyright</Typography>

                </footer>
            </ThemeProvider>
        </>
    )
}

export default App;