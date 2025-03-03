import { FC, useContext, useState } from 'react'
import { AppBar, Box, Container, Drawer, IconButton, Slide, Toolbar, Typography, useScrollTrigger, Divider, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom';
import { NavbarListItem } from './NavbarListItem';
import { MOVIE_LISTS, TOP_LISTS } from '../../../constants';
import Search from '../Search/Serach';
import { ColorModeContext } from '../../../context/ToggleColorMode';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {toggleColorMode, mode} = useContext(ColorModeContext);

    const handleDrawerToggle = () => {
        setIsOpen(prevState => !prevState);
    };
    const trigger = useScrollTrigger({
        target: window,
    });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={isOpen} onClose={handleDrawerToggle}>
                        <Box sx={{width: 400}} onClick={handleDrawerToggle}>
                            <NavbarListItem listItem={TOP_LISTS}/>
                            <Divider/>
                            <NavbarListItem listItem={MOVIE_LISTS}/>
                        </Box>
                    </Drawer>
                    <Stack flexDirection='row' justifyContent='space-between' alignItems='center' width='100%'>
                        <Typography 
                            sx={{color: 'white', textDecoration: 'none'}} 
                            component={RouterLink } 
                            to="/"
                            variant='h5'
                            mr={2}
                        >
                            FilmFlix
                        </Typography>
                        <Search/>
                        <IconButton color="inherit" onClick={toggleColorMode}>
                            {mode === 'dark' ? <Brightness7/> : <Brightness4/>}
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    </Slide>
  )
}
