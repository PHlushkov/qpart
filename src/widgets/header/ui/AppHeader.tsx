import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItem,
  Box,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../../shared/assets/icons/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const AppHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const menuItems = [
    { text: 'Главная', to: '/home', icon: <HomeIcon /> },
    { text: 'Станки', to: '/machines', icon: <MiscellaneousServicesIcon /> },
    { text: 'Отчеты', to: '/reports', icon: <AssessmentIcon /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="sticky">
        <Toolbar className="bg-[green] flex justify-between	">
          <Typography variant="h6">
            <Link to="/home">
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  width: {
                    xs: '120px',
                    sm: '150px',
                    md: '200px',
                    lg: '250px',
                  },
                  height: 'auto',
                }}
              />
            </Link>
          </Typography>

          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={() => toggleDrawer(false)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link
                key={index}
                to={item.to}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemText primary={item.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default AppHeader;
