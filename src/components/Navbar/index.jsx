import React from 'react';
import './style.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const IndexNavbar = () => {

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{ display: 'block' }}>
        <Link to="/home_1" style={{ textDecoration: "none ", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "#000",
                "&:hover": { color: '#7A88E1' },
                textAlign: "center",
              }}
            >
              <ListItemText primary="Home " />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none ", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "#000",
                "&:hover": { color: '#7A88E1' },
                textAlign: "center",
              }}
            >
              <ListItemText primary="Shop" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/features" style={{ textDecoration: "none ", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "#000",
                "&:hover": { color: '#7A88E1' },
                textAlign: "center",
              }}
            >
              <ListItemText primary="Features" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none ", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "#000",
                "&:hover": { color: '#7A88E1' },
                textAlign: "center",
              }}
            >
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about" style={{ textDecoration: "none ", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "#000",
                "&:hover": { color: '#7A88E1' },
                textAlign: "center",
              }}
            >
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none ", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "#000",
                "&:hover": { color: '#7A88E1' },
                textAlign: "center",
              }}
            >
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </Link>
      </Box>
    </Menu>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: '#fff' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: { xs: '60%', sm: '100%', md: '125%', lg: '125%' },
                display: { xs: 'block', sm: 'block' },
                color: '#000'
              }}
            >
              <b>COZA</b> STORE
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                pl: '5%',
                color: '#000',
              }}
            >
              <Link
                to="/home_1"
                style={{ textDecoration: "none ", color: "black" }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": { backgroundColor: "#fff", color: '#7A88E1' },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Home " />
                </ListItemButton>
              </Link>
              <Link
                to="/shop"
                style={{ textDecoration: "none ", color: "black" }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": { backgroundColor: "#fff", color: '#7A88E1' },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Shop " />
                </ListItemButton>
              </Link>
              <Link
                to="/features"
                style={{ textDecoration: "none ", color: "black" }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": { backgroundColor: "#fff", color: '#7A88E1' },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Features " />
                  <Badge badgeContent={'HOT'} color="error" sx={{ mt: "-50%" }} />
                </ListItemButton>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: "none ", color: "black" }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": { backgroundColor: "#fff", color: '#7A88E1' },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Blog " />
                </ListItemButton>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none ", color: "black" }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": { backgroundColor: "#fff", color: '#7A88E1' },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="About " />
                </ListItemButton>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none ", color: "black" }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": { backgroundColor: "#fff", color: '#7A88E1' },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Contact " />
                </ListItemButton>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              <IconButton size="large" color="inherit"
                sx={{
                  "&:hover": { backgroundColor: 'transparent' }
                }}
              >
                <Badge color="error">
                  <SearchIcon sx={{ color: '#000', "&:hover": { color: 'blue' } }} />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                sx={{
                  "&:hover": { backgroundColor: 'transparent' }
                }}
              >
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon sx={{ color: '#000', "&:hover": { color: 'blue' } }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{
                  "&:hover": { backgroundColor: 'transparent' }
                }}
              >
                <Badge badgeContent={17} color="primary">
                  <FavoriteBorderIcon sx={{ color: '#000', "&:hover": { color: 'blue' } }} />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon sx={{ color: '#000' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </Box>
  );
};

export default IndexNavbar;