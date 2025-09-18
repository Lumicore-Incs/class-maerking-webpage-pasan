import { AppBar, Box, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation, Link } from 'react-router-dom';

const BLUE_COLOR = '#0043FF';

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  zIndex: 3,
});

const NavLink = styled(Link)({
  textDecoration: 'none'
});

const NavButton = styled(Button)(({ active }: { active?: boolean }) => ({
  color: '#FFFFFF',
  fontSize: '1rem',
  textTransform: 'none',
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 500,
  padding: '8px 16px',
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
}));

const Logo = styled('img')({
  height: '40px',
  marginRight: '16px',
});

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Results', path: '/results' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
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
          <Logo src="/public/vite.svg" alt="EduCorner Logo" />
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