import React from "react";
import { Container, Link, Box } from '@mui/material'
import useStyles from "../css/style";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function Introduction() {
    const classes = useStyles();
    return (
        <Container className={classes.contact} align="center" maxWidth="lg" id="contact">
            <Link title="Send Me an eMail"
                variant="button"
                color="text.primary"
                href="mailto: sudanupadhaya@gmail.com"
                fontSize={40}
                underline="none"
                sx={{
                    '&:hover .email_icon': {
                        color: "#afafaf",
                    },
                }}
            >
                Contact Me
                <MailOutlineIcon fontSize="large" className="email_icon" color="action" sx={{
                    ':hover': {
                        color: "#afafaf",
                    },
                    padding: "0px 0px",
                    ml: "20px",
                    marginBottom: "-9px"
                }} />

            </Link>
            <Box
                sx={{
                    '& > :not(style)': {
                        m: 2,
                    },
                }}
            >

                <Link href="https://github.com/sudan94" target="blank" underline="none" title="GitHub"  variant="button"><GitHubIcon fontSize="large" color="action"  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-flex' }, '&:hover': { scale: '1.10' } }}  /> </Link>
                <Link href="https://linkedin.com/in/sudan-upadhaya-9185b3185" target="blank" title="LinkedIn" underline="none" variant="button"  ><LinkedInIcon fontSize="large" color="action" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-flex' }, '&:hover': { scale: '1.10' } }} /> </Link>
                <Link href="https://leetcode.com/sudan94/" target="blank" title="LeetCode" underline="none" variant="button"  > <ArrowOutwardIcon fontSize="large" color="action" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-flex' }, '&:hover': { scale: '1.10' } }} /></Link>
            </Box>
        </Container>
    )
}

