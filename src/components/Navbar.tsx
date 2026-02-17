import { AppBar, Box, Container, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const BLUE_COLOR = '#0043FF';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#0000006e',
  boxShadow: 'none',
  position: 'fixed',
  zIndex: 1000,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  color: '#FFFFFF',
  fontSize: '1rem',
  textTransform: 'none',
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 500,
  padding: '4px 20px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: active ? '100%' : '0%',
    height: '2px',
    backgroundColor: active ? BLUE_COLOR : 'transparent',
    transition: 'all 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
    backgroundColor: BLUE_COLOR,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    padding: '6px 12px',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: '40px',
  marginRight: '16px',
  [theme.breakpoints.down('sm')]: {
    height: '30px',
    marginRight: '8px',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const DesktopNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 2,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '280px',
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
    padding: theme.spacing(2),
  },
}));

const MobileNavButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  color: '#FFFFFF',
  borderRadius: '8px',
  marginBottom: theme.spacing(1),
  backgroundColor: active ? 'rgba(0, 67, 255, 0.1)' : 'transparent',
  borderLeft: active ? `3px solid ${BLUE_COLOR}` : '3px solid transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 67, 255, 0.2)',
  },
  '& .MuiListItemText-primary': {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: active ? 600 : 500,
    color: active ? BLUE_COLOR : '#FFFFFF',
  },
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Results', path: '/results' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Logo src="/public/logo.png" alt="EduCorner Logo" />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{ textDecoration: 'none' }}
            onClick={handleNavClick}
          >
            <MobileNavButton active={currentPath === item.path}>
              <ListItemText primary={item.label} />
            </MobileNavButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 2,
            }}
          >
            <Logo src="/public/logo.png" alt="EduCorner Logo" />
            
            {/* Desktop Navigation */}
            <DesktopNav sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: 'none' }}
                >
                  <NavButton active={currentPath === item.path}>
                    {item.label}
                  </NavButton>
                </Link>
              ))}
            </DesktopNav>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              edge="end"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon sx={{ fontSize: '1.8rem' }} />
            </MobileMenuButton>
          </Box>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
}