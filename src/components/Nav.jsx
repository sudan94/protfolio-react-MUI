import React from "react";
import { Typography, AppBar, Container, Toolbar, Button, Box, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Drawer, Tooltip } from '@mui/material'
import useStyles from "../css/style";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const navItems = [
    { id: 1, name: "Experience", href: "#experiance" },
    // { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 5, name: "Contact", href: "#contact" },
];
const drawerWidth = 240;

export default function Nav(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                S.U
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton href={item.href} sx={{ textAlign: 'center' }}>
                            <ListItemText color="inherit" primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                <Button variant="outlined" onClick={props.data} startIcon={<Brightness4Icon />} size="small">Theme</Button>
            </Box>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                color="inherit"
                component="nav"
                elevation={0}
                className={classes.toolbar_nav}
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(10,10,10,0.75)' : 'rgba(243,247,249,0.75)',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 1, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h5"
                            component="a"
                            href="#introduction"
                            className={classes.logo}
                            sx={{ flexGrow: 1, color: 'primary.main' }}
                        >
                            S.U
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button key={item.id} color="inherit" href={item.href} className={classes.navButton}>
                                    {item.name}
                                </Button>
                            ))}
                            <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1.5 }} />
                        </Box>
                        <Tooltip title="Toggle theme">
                            <IconButton color="inherit" onClick={props.data} size="small" aria-label="Toggle theme" sx={{ display: { xs: 'none', sm: 'inline-flex' }, '&:hover': { color: 'primary.main' } }}>
                                <Brightness4Icon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    )
}
