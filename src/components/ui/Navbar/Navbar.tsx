import { 
    AppBar, 
    Box, 
    Container, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Slide, 
    Toolbar, 
    Typography, 
    useScrollTrigger, 
    Link, 
    Divider 
} from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom';
import {TOP_LISTS, MOVIE_LISTS, iconComponents} from '../../../constants'

// Как избавиться от ошибки обьявления React, без его явного использования. Возникает ошибка при выкладывании проекта в vercel
// Верная ли типизация?
// Где будет правильнее прописывать и держать типы и интерфейсы?

type IconName = keyof typeof iconComponents;

interface IconProps {
    iconName: IconName;
}

interface ListItemIf {
    title: string;
    icon: string;
    url: string;
}

const Icon = ({iconName}: IconProps) => {
    const IconComponent = iconComponents[iconName]
    return <IconComponent />;
};

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                            <List>
                                {TOP_LISTS.map((item: ListItemIf) => (
                                    <Link key={item.title} component={RouterLink} to={item.url}>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Icon iconName={item.icon}/>
                                                </ListItemIcon>
                                                <ListItemText primary={item.title} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                            <Divider/>
                            <List>
                                {MOVIE_LISTS.map((item: ListItemIf) => (
                                    <Link key={item.title} component={RouterLink} to={item.url}>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Icon iconName={item.icon}/>
                                                </ListItemIcon>
                                                <ListItemText primary={item.title} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                    <Typography 
                        sx={{color: 'white', textDecoration: 'none'}} 
                        component={RouterLink } 
                        to="/"
                        variant='h5'
                    >
                        FilmFlix
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    </Slide>
  )
}
