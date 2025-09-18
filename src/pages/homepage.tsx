import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import homeImage from '../assets/homePageImage.png';

interface HeroSectionProps {
  bgcolor: string;
}

const BLUE_COLOR = '#0043FF';
const WHITE_COLOR = '#FFFFFF';

const HeroSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bgcolor'
})<HeroSectionProps>(({ bgcolor }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: bgcolor,
  backgroundImage: `url(${homeImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: '30%',
    bottom: 0,
    background: 'linear-gradient(to right, #6f62bc75, rgba(249, 239, 239, 0))',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '60%',
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

const TextContent = styled(Box)(({ theme }) => ({
  flex: '0 1 600px',
  color: 'white',
  fontFamily: "'Outfit', sans-serif",
  [theme.breakpoints.up('md')]: {
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.down('md')]: {
    flex: '1 1 100%',
    textAlign: 'center',
  }
}));

export default function Homepage() {
  const [bgColor, setBgColor] = useState(BLUE_COLOR);
  const isBlueBackground = bgColor === BLUE_COLOR;
  const textColor = WHITE_COLOR;

  const toggleBackground = () => {
    setBgColor(current => current === BLUE_COLOR ? WHITE_COLOR : BLUE_COLOR);
  };

  return (
    <HeroSection bgcolor={bgColor}>
      <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 3 }}>
        <IconButton onClick={toggleBackground} sx={{ color: textColor }}>
          {isBlueBackground ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Container maxWidth="lg">
        <ContentWrapper>
          <TextContent>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4.2rem' },
                fontWeight: 800,
                marginBottom: 2,
                color: '#0043FF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Excel in Your Studies with Expert Guidance
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                marginBottom: 4,
                maxWidth: '600px',
                color: isBlueBackground ? '#000000' : WHITE_COLOR,
                fontWeight: 600,
                opacity: 1,
              }}
            >
              Personalized tutoring sessions, comprehensive exam preparation, and proven teaching methods to help you achieve academic success.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: { xs: 'wrap', sm: 'nowrap' }
            }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: isBlueBackground ? WHITE_COLOR : BLUE_COLOR,
                  color: isBlueBackground ? BLUE_COLOR : WHITE_COLOR,
                  '&:hover': {
                    bgcolor: isBlueBackground ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 67, 255, 0.9)',
                  },
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  minWidth: { xs: '100%', sm: 'auto' },
                }}
              >
                Check Your Result
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: WHITE_COLOR,
                  color: WHITE_COLOR,
                  '&:hover': {
                    borderColor: WHITE_COLOR,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  minWidth: { xs: '100%', sm: 'auto' },
                }}
              >
                About Teacher
              </Button>
            </Box>
          </TextContent>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
}