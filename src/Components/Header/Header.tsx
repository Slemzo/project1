import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './header.css'
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;
const navItems = ['My gallery'];

const Header = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const navigateToRoute = (route: string) => {
        switch (route) {
            case '': navigate('/'); return;
            case 'My gallery': navigate('/my-gallery'); return;
        }
    }

    const isActive = (route: string) => {
        const path = window.location.href.split('/')[3]
        return (path === 'my-gallery' && route === "My gallery")
    }

    const navigateToLanding = () => navigateToRoute('')

    const drawer = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#F4B5CD', justifyContent: 'space-between' }}>
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography className='clickableMouse' onClick={navigateToLanding} variant="h6" sx={{ my: 2, color: '#DB2463' }}>
                    Anjchybir
                </Typography>
                <List>
                    {navItems.map((item) => {
                        const active = isActive(item)
                        console.log(item)
                        console.log(active)
                        const color = active ? "#DB2463" : '#F2F2F2'
                        return (
                        <ListItem onClick={() => navigateToRoute(item)} key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center', color }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                        )
})}
                </List>
            </Box>
            <Box className='drawer-icon-box' />
        </Box>
    );


    return (
        <>
            <CssBaseline />
            <AppBar className='navigation' component="nav">
                <Toolbar>
                        <Typography
                            className='clickableMouse'
                            onClick={navigateToLanding}
                            variant="h6"
                            component="div"
                            align='left'
                            sx={{ flexGrow: 1, display: { sm: 'block' } }}
                        >
                            Anjchybir
                        </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => navigateToRoute(item)} key={item} sx={{ color: '#DB2463' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    {!mobileOpen && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Box alignItems='flex-end' component="nav">
                <Drawer
                    className='drawer'
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
        </>
    );
}


export default Header;