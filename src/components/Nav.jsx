import React from "react";
import { Typography, AppBar, Container, Toolbar, Button, Box, Divider, List,ListItem,  ListItemButton, ListItemText, CssBaseline, IconButton, Drawer } from '@mui/material'
import useStyles from "../css/style";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
    { id: 1, name: "Experiance", href: "#experiance" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Contact", href: "#contact" },
];
const drawerWidth = 240;

export default function Nav(props) {
    const classes = useStyles();
      // for toogle display hamburger button
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
      const container = window !== undefined ? () => window().document.body : undefined;
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
            <Button color="inherit" onClick={props.data} >
                <WbIncandescentIcon fontSize="medium" />
            </Button>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex', boxShadow: 'none' }}>
        <CssBaseline />
        <AppBar color="inherit" component="nav" elevation={0} className={classes.toolbar_nav}>
            <Container maxWidth="lg">
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, '&:hover': { scale: '1.10' } }}
                    >
                        S.U
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.id} color="inherit" href={item.href}>
                                <Typography fontWeight={700}>  {item.name}</Typography>
                            </Button>
                        ))}
                        <Button color="inherit" onClick={props.data} >
                            <WbIncandescentIcon fontSize="medium" />
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={props.data[0]}
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
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
        </Box>
    </Box>
    )
}
