import React from "react";
import { Typography, Grid, Container, Button } from '@mui/material'
import useStyles from "../css/style";


export default function Introduction() {
    const classes = useStyles();
    // Function will execute on click of button
    const downloadCV = () => {
        // using Java Script method to get PDF file
        fetch('sudan_upadhaya_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'sudan_upadhaya_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="left" color="textPrimary" gutterBottom className={classes.greetings}> Hello I am Sudan Upadhaya </Typography>
                <Typography fontSize={19} align="justify" color="textSecondary" paragraph>Hello, I am Sudan. I love bulding web application my expertise is backed developmet.</Typography>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Button variant="outlined" onClick={downloadCV} color="inherit">
                                <Typography fontWeight={700}>Download CV</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
