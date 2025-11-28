import { AppBar, Box, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation, Link } from 'react-router-dom';

const BLUE_COLOR = '#0043FF';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#0000006e',
  boxShadow: 'none',
  position: 'fixed',
  zIndex: 3,
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

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Results', path: '/results' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/#contact' },
  ];

  return (
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
          <Box sx={{ display: 'flex', gap: 2 }}>
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
          </Box>
        </Box>
      </Container>
    </StyledAppBar>
  );
}