import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import TikTokIcon from '@mui/icons-material/MusicNote'; // Using MusicNote as TikTok alternative
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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

const WhyChooseSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: 'white',
  fontFamily: "'Outfit', sans-serif",
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at center, rgba(0, 78, 146, 0.1) 0%, transparent 70%)',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 1),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 1),
  },
}));

const SocialMediaSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: 'white',
  fontFamily: "'Outfit', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 1),
  },
}));

const SocialCardsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

const SocialCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  width: '320px',
  maxWidth: '100%',
  position: 'relative',
  zIndex: 2,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(3),
  },
}));

const TikTokCard = styled(SocialCard)(() => ({
  background: 'rgba(50, 50, 50, 0.8)',
  border: '1px solid rgba(80, 80, 80, 0.5)',
  '&:hover': {
    background: 'rgba(60, 60, 60, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
}));

const LinkedInCard = styled(SocialCard)(() => ({
  background: 'rgba(13, 102, 208, 0.2)',
  border: '1px solid rgba(13, 102, 208, 0.4)',
  '&:hover': {
    background: 'rgba(13, 102, 208, 0.3)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(13, 102, 208, 0.2)',
  },
}));

const SocialIconWrapper = styled(Box)(() => ({
  width: 60,
  height: 60,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  background: 'rgba(255, 255, 255, 0.1)',
  '& svg': {
    fontSize: '2rem',
    color: 'white',
  },
}));

const TikTokIconWrapper = styled(SocialIconWrapper)(() => ({
  background: 'linear-gradient(135deg, #ff0050 0%, #00f2ea 100%)',
  width: 48,
  height: 48,
  borderRadius: '50%',
}));

const LinkedInIconWrapper = styled(SocialIconWrapper)(() => ({
  background: '#0077b5',
  width: 48,
  height: 48,
  borderRadius: '50%',
}));

const StatsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(6),
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  minWidth: '150px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.08)',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '120px',
    padding: theme.spacing(1.5),
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(7, 11, 231, 1)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3),
  margin: theme.spacing(1.3),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  flex: '1 1 300px',
  maxWidth: '300px',
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 2,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(1),
    flex: '1 1 280px',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '2rem',
    color: 'white',
  },
  '.feature-card:hover &': {
    background: 'rgba(255, 255, 255, 0.3)',
    transform: 'scale(1.1)',
  }
}));

const WhyChooseContent = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: '1.2rem',
  fontWeight: 400,
  opacity: 0.9,
  maxWidth: '600px',
  margin: '0 auto',
}));

const WhyChooseTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(45deg, #ffffff 0%, #e0e7ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  }
}));

const SocialTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(45deg, #ffffff 0%, #a78bfa 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  }
}));

const FeaturesWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  gap: theme.spacing(2),
  maxWidth: '100vw',
  flexDirection: 'row',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    gap: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: 'white',
}));

const FeatureDescription = styled(Typography)(() => ({
  fontSize: '1rem',
  lineHeight: 1.6,
  opacity: 0.9,
  color: 'white',
}));

export default function Homepage() {
  const [bgColor, setBgColor] = useState(BLUE_COLOR);
  const isBlueBackground = bgColor === BLUE_COLOR;
  const textColor = WHITE_COLOR;

  const toggleBackground = () => {
    setBgColor(current => current === BLUE_COLOR ? WHITE_COLOR : BLUE_COLOR);
  };

  const features = [
    {
      icon: <TrendingUpIcon />,
      title: "Proven Results",
      description: "Track record of helping students improve their grades and achieve their academic objectives with measurable success."
    },
    {
      icon: <PersonIcon />,
      title: "Personalized Learning",
      description: "Customized teaching approach tailored to each student's learning style, pace, and academic needs."
    },
    {
      icon: <SupportIcon />,
      title: "Comprehensive Support",
      description: "Complete exam preparation, regular assessments, and continuous progress monitoring for optimal learning outcomes."
    }
  ];

  const stats = [
    {
      icon: <GroupIcon />,
      number: "10K+",
      label: "Followers",
      color: "#4ade80"
    },
    {
      icon: <CalendarTodayIcon />,
      number: "Daily",
      label: "Content",
      color: "#3b82f6"
    },
    {
      icon: <EmojiEventsIcon />,
      number: "Success",
      label: "Stories",
      color: "#f59e0b"
    }
  ];

  return (
    <>
      <HeroSection bgcolor={bgColor}>
        <Box sx={{ position: 'fixed', top: 14, right: 10, zIndex: 5 }}>
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
                    borderRadius: '8px',
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
                    borderRadius: '8px',
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

      <WhyChooseSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <WhyChooseTitle>Why Choose Our Tutoring?</WhyChooseTitle>
          <WhyChooseContent>
            We provide comprehensive educational support to help students achieve their academic goals.
          </WhyChooseContent>
          <FeaturesWrapper>
            {features.map((feature, index) => (
              <FeatureCard key={index} className="feature-card">
                <IconWrapper>
                  {feature.icon}
                </IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesWrapper>
        </Container>
      </WhyChooseSection>

      <SocialMediaSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <SocialTitle>Follow Our Learning Journey</SocialTitle>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              opacity: 0.9,
              marginBottom: 6,
              maxWidth: '600px',
              margin: '0 auto 48px auto',
              color: 'white',
            }}
          >
            Join thousands of students on social media for daily tips, success stories, and educational content.
          </Typography>
          
          <SocialCardsWrapper>
            <TikTokCard>
              <TikTokIconWrapper>
                <TikTokIcon />
              </TikTokIconWrapper>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  marginBottom: 1,
                  color: 'white',
                }}
              >
                Follow us on
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: 2,
                  color: 'white',
                }}
              >
                TikTok
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: 1,
                  color: 'white',
                }}
              >
                Quick Learning Tips
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  opacity: 0.8,
                  marginBottom: 2,
                  color: 'white',
                }}
              >
                Get bite-sized educational content. Study hacks and motivational videos to boost your learning.
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  opacity: 0.7,
                  color: 'white',
                }}
              >
                @edumaths.official
              </Typography>
            </TikTokCard>

            <LinkedInCard>
              <LinkedInIconWrapper>
                <LinkedInIcon />
              </LinkedInIconWrapper>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  marginBottom: 1,
                  color: 'white',
                }}
              >
                Connect on
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: 2,
                  color: 'white',
                }}
              >
                LinkedIn
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: 1,
                  color: 'white',
                }}
              >
                Professional Insights
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  opacity: 0.8,
                  marginBottom: 2,
                  color: 'white',
                }}
              >
                Access in-depth articles, career guidance, and connect with our professional educational network.
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  opacity: 0.7,
                  color: 'white',
                }}
              >
                @edumaths.official
              </Typography>
            </LinkedInCard>
          </SocialCardsWrapper>

          <StatsWrapper>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <Box sx={{ color: stat.color, marginBottom: 1 }}>
                  {stat.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: stat.color,
                    marginBottom: 0.5,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    opacity: 0.8,
                    color: 'white',
                  }}
                >
                  {stat.label}
                </Typography>
              </StatItem>
            ))}
          </StatsWrapper>
        </Container>
      </SocialMediaSection>
    </>
  );
}