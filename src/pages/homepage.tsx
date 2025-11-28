import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import TikTokIcon from '@mui/icons-material/MusicNote';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LaunchIcon from '@mui/icons-material/Launch';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import CreateIcon from '@mui/icons-material/Create';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BoltIcon from '@mui/icons-material/Bolt';
import homeImage from '../assets/homePageImage.png';
import socialPageBackGround from '../assets/socialPageBackGround4.gif';
import ContactPage from './ContactPage';

interface HeroSectionProps {
  bgcolor: string;
}

const BLUE_COLOR = '#0043FF';
const WHITE_COLOR = '#FFFFFF';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

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
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
}));

const ParticleCanvas = styled('canvas')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  zIndex: 3,
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

// Rest of the styled components remain the same...
const FloatingIcon = styled(Box)<{ delay?: number; duration?: number }>(({ delay = 0, duration = 4 }) => ({
  position: 'absolute',
  animation: `${float} ${duration}s ease-in-out ${delay}s infinite`,
  opacity: 0.15,
  zIndex: 2,
  '& svg': {
    fontSize: '3rem',
    color: '#ffffff',
    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
  },
}));

const WhyChooseSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
  padding: theme.spacing(10, 2),
  textAlign: 'center',
  color: 'white',
  fontFamily: "'Outfit', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
    animation: `${pulse} 8s ease-in-out infinite`,
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 1),
  },
}));

const StudyIconBg = styled(Box)<{ top?: string; left?: string; right?: string; bottom?: string }>(
  ({ top, left, right, bottom }) => ({
    position: 'absolute',
    top: top || 'auto',
    left: left || 'auto',
    right: right || 'auto',
    bottom: bottom || 'auto',
    opacity: 0.08,
    zIndex: 1,
    animation: `${float} 6s ease-in-out infinite`,
    '& svg': {
      fontSize: '5rem',
      color: '#ffffff',
    },
  })
);

const SocialMediaSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
  padding: theme.spacing(10, 2),
  textAlign: 'center',
  color: 'white',
  fontFamily: "'Outfit', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
    `,
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(7, 1.5),
  },
}));

const SocialCardsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

const SocialCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(3.5),
  width: 360,
  maxWidth: '100%',
  position: 'relative',
  zIndex: 2,
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
  cursor: 'pointer',
  boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.08)',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(3),
  },
}));

const TikTokCard = styled(SocialCard)(() => ({
  background: 'linear-gradient(135deg, #0f0f11 0%, #1a1a1e 50%, #222327 100%)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 24px 50px rgba(0, 0, 0, 0.45)',
  },
}));

const LinkedInCard = styled(SocialCard)(() => ({
  background: 'linear-gradient(135deg, #1b66c9 0%, #247bdf 40%, #5aa2f0 100%)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 24px 50px rgba(30, 64, 175, 0.45)',
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
  boxShadow: '0 6px 16px rgba(0,0,0,0.35)'
}));

const LinkedInIconWrapper = styled(SocialIconWrapper)(() => ({
  background: '#ffffff',
  width: 48,
  height: 48,
  borderRadius: '50%',
  '& svg': { color: '#0a66c2' }
}));

const SocialCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2.5),
}));

const SocialSmallLabel = styled(Typography)(() => ({
  fontSize: '0.85rem',
  opacity: 0.85,
  color: 'white'
}));

const HandleLink = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  opacity: 0.85,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: 'white'
}));

const StayConnectedSection = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  backgroundImage: `url(${socialPageBackGround})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(167, 139, 250, 0.2) 0%, transparent 50%)
    `,
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    minHeight: '50vh',
    padding: theme.spacing(4, 2),
  },
}));

const StayConnectedContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  fontFamily: "'Outfit', sans-serif",
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
  padding: theme.spacing(4),
}));

const StayConnectedTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(45deg, #ffffff 0%, #e9d5ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const StayConnectedSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 400,
  opacity: 0.9,
  marginBottom: theme.spacing(6),
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    marginBottom: theme.spacing(4),
  },
}));

const SocialIconsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
  },
}));

const SocialIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const SocialIconCircle = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 70,
    height: 70,
  },
}));

const LinkedInIconCircle = styled(SocialIconCircle)(() => ({
  background: '#0077b5',
  '& svg': {
    fontSize: '2rem',
    color: 'white',
  },
}));

const FacebookIconCircle = styled(SocialIconCircle)(() => ({
  background: '#1877f2',
  '& svg': {
    fontSize: '2rem',
    color: 'white',
  },
}));

const TikTokIconCircle = styled(SocialIconCircle)(() => ({
  background: 'linear-gradient(135deg, #ff0050 0%, #00f2ea 100%)',
  '& svg': {
    fontSize: '2rem',
    color: 'white',
  },
}));

const SocialIconLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const StatsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  position: 'relative',
  zIndex: 2,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(1.25, 3),
  borderRadius: 9999,
  width: 'fit-content',
  margin: '0 auto',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: theme.spacing(3),
    gap: theme.spacing(1.5),
    padding: theme.spacing(2),
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 1),
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
    transform: 'translateY(-10px)',
    boxShadow: '0 16px 50px rgba(139, 92, 246, 0.35)',
    background: 'rgba(255, 255, 255, 0.18)',
    borderColor: 'rgba(167, 139, 250, 0.6)',
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
  background: 'rgba(139, 92, 246, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
  '& svg': {
    fontSize: '2rem',
    color: 'white',
  },
  '.feature-card:hover &': {
    background: 'rgba(167, 139, 250, 0.5)',
    transform: 'scale(1.15) rotate(5deg)',
    boxShadow: '0 6px 20px rgba(139, 92, 246, 0.5)',
  }
}));

const WhyChooseContent = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: '1.2rem',
  fontWeight: 400,
  opacity: 0.9,
  maxWidth: '600px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
}));

const WhyChooseTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(45deg, #ffffff 0%, #e0e7ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
  }
}));

const SocialTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(45deg, #ffffff 0%, #c4b5fd 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  }
}));

const PortalSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #031633 0%, #062c63 45%, #0a44a6 100%)',
  color: 'white',
  padding: theme.spacing(12, 2, 10),
  textAlign: 'center',
  fontFamily: "'Outfit', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(14,165,233,0.08) 0%, transparent 45%)',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2, 7)
  }
}));

const PortalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: 1100,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

const PortalHeading = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '2.4rem'
  }
}));

const PortalSubheading = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  opacity: 0.9,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  }
}));

const PortalCards = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}));

const PortalCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4),
  background: 'rgba(3, 10, 24, 0.4)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 25px 80px rgba(0,0,0,0.35)',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  minHeight: 220,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.06), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  '&:hover::before': {
    opacity: 1
  }
}));

const PortalCardIcon = styled(Box)(() => ({
  width: 56,
  height: 56,
  borderRadius: 16,
  background: 'rgba(255,255,255,0.12)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: '2rem',
    color: 'white'
  }
}));

const PortalButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  padding: theme.spacing(1.2, 3),
  borderRadius: 999,
  textTransform: 'none',
  fontWeight: 600,
  display: 'inline-flex',
  gap: theme.spacing(1),
  fontFamily: "'Outfit', sans-serif"
}));

const PortalFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
  flexWrap: 'wrap',
  paddingTop: theme.spacing(3),
  borderTop: '1px solid rgba(255,255,255,0.12)'
}));

const PortalFooterItem = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: '0.95rem',
  opacity: 0.95,
  '& svg': {
    color: '#60a5fa'
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
  position: 'relative',
  zIndex: 2,
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
  const location = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const toggleBackground = () => {
    setBgColor(current => current === BLUE_COLOR ? WHITE_COLOR : BLUE_COLOR);
  };

  // Particle Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system variables
    const BALL_NUM = 30;
    const R = 2;
    const dis_limit = 260;
    const link_line_width = 0.8;
    const ball_color = { r: 207, g: 255, b: 4 };

    interface Ball {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      phase: number;
      type?: string;
    }

    let balls: Ball[] = [];
    const mouse_ball: Ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, alpha: 1, phase: 0, type: 'mouse' };
    const alpha_f = 0.03;

    // Utility functions
    const randomNumFrom = (min: number, max: number): number => {
      return Math.random() * (max - min) + min;
    };

    const randomArrayItem = <T,>(arr: T[]): T => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const getRandomSpeed = (pos: string): number[] => {
      const min = -1, max = 1;
      switch (pos) {
        case 'top': return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
        case 'right': return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
        case 'bottom': return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
        case 'left': return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
        default: return [0, 0];
      }
    };

    const randomSidePos = (length: number): number => {
      return Math.ceil(Math.random() * length);
    };

    const getRandomBall = (): Ball => {
      const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
      const can_w = canvas.width;
      const can_h = canvas.height;

      switch (pos) {
        case 'top':
          return {
            x: randomSidePos(can_w),
            y: -R,
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        case 'right':
          return {
            x: can_w + R,
            y: randomSidePos(can_h),
            vx: getRandomSpeed('right')[0],
            vy: getRandomSpeed('right')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        case 'bottom':
          return {
            x: randomSidePos(can_w),
            y: can_h + R,
            vx: getRandomSpeed('bottom')[0],
            vy: getRandomSpeed('bottom')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        case 'left':
          return {
            x: -R,
            y: randomSidePos(can_h),
            vx: getRandomSpeed('left')[0],
            vy: getRandomSpeed('left')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        default: return { x: 0, y: 0, vx: 0, vy: 0, r: R, alpha: 1, phase: 0 };
      }
    };

    const initBalls = (num: number) => {
      balls = [];
      for (let i = 0; i < num; i++) {
        balls.push({
          x: randomSidePos(canvas.width),
          y: randomSidePos(canvas.height),
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10)
        });
      }
    };

    const renderBalls = () => {
      balls.forEach(b => {
        if (!b.type) {
          ctx.fillStyle = `rgba(${ball_color.r}, ${ball_color.g}, ${ball_color.b}, ${b.alpha})`;
          ctx.beginPath();
          ctx.arc(b.x, b.y, R, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      });
    };

    const getDisOf = (b1: Ball, b2: Ball): number => {
      const delta_x = Math.abs(b1.x - b2.x);
      const delta_y = Math.abs(b1.y - b2.y);
      return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
    };

    const renderLines = () => {
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const fraction = getDisOf(balls[i], balls[j]) / dis_limit;
          if (fraction < 1) {
            const alpha = (1 - fraction).toString();
            ctx.strokeStyle = `rgba(150, 150, 150, ${alpha})`;
            ctx.lineWidth = link_line_width;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const updateBalls = () => {
      const new_balls: Ball[] = [];
      balls.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        b.phase += alpha_f;
        b.alpha = Math.abs(Math.cos(b.phase));

        if (b.x > -50 && b.x < canvas.width + 50 && b.y > -50 && b.y < canvas.height + 50) {
          new_balls.push(b);
        }
      });
      balls = new_balls;
    };

    const addBallIfy = () => {
      if (balls.length < BALL_NUM) {
        balls.push(getRandomBall());
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderBalls();
      renderLines();
      updateBalls();
      addBallIfy();
      requestAnimationFrame(render);
    };

    // Mouse event handlers
    const handleMouseEnter = () => {
      balls.push(mouse_ball);
    };

    const handleMouseLeave = () => {
      balls = balls.filter(b => !b.type);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse_ball.x = e.clientX - rect.left;
      mouse_ball.y = e.clientY - rect.top;
    };

    // Initialize and start animation
    initBalls(BALL_NUM);
    render();

    // Add event listeners
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  const portalCards = [
    {
      icon: <AssessmentIcon />,
      title: "Check Your Results",
      description: "View your exam scores, grades, and performance analytics instantly.",
      buttonLabel: "View Results"
    },
    {
      icon: <NotificationsActiveIcon />,
      title: "Latest Updates",
      description: "Stay informed about announcements, schedules, and important notices.",
      buttonLabel: "Read Updates"
    }
  ];

  const portalHighlights = [
    {
      icon: <LockIcon />,
      label: "Secure Access"
    },
    {
      icon: <AccessTimeIcon />,
      label: "24/7 Available"
    },
    {
      icon: <BoltIcon />,
      label: "Real-time Updates"
    }
  ];

  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <HeroSection bgcolor={bgColor}>
        {/* Particle Animation Canvas */}
        <ParticleCanvas ref={canvasRef} />
        
        {/* Floating Study Icons */}
        <FloatingIcon style={{ top: '10%', left: '5%' }} delay={0} duration={5}>
          <MenuBookIcon />
        </FloatingIcon>
        <FloatingIcon style={{ top: '15%', right: '8%' }} delay={1} duration={6}>
          <SchoolIcon />
        </FloatingIcon>
        <FloatingIcon style={{ top: '60%', left: '10%' }} delay={2} duration={4.5}>
          <CreateIcon />
        </FloatingIcon>
        <FloatingIcon style={{ top: '70%', right: '12%' }} delay={0.5} duration={5.5}>
          <LightbulbIcon />
        </FloatingIcon>
        <FloatingIcon style={{ top: '35%', left: '15%' }} delay={1.5} duration={6}>
          <CalculateIcon />
        </FloatingIcon>
        <FloatingIcon style={{ top: '45%', right: '5%' }} delay={2.5} duration={5}>
          <ScienceIcon />
        </FloatingIcon>
        <FloatingIcon style={{ bottom: '15%', left: '20%' }} delay={3} duration={4.5}>
          <HistoryEduIcon />
        </FloatingIcon>

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
                  color: '#ffffff',
                  textShadow: '3px 3px 8px rgba(0,0,0,0.7)',
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
                  color: '#ffffff',
                  fontWeight: 600,
                  opacity: 0.95,
                  textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
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
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
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

      {/* Rest of the component remains the same */}
      <WhyChooseSection>
        {/* Background Study Icons */}
        <StudyIconBg top="5%" left="5%">
          <MenuBookIcon />
        </StudyIconBg>
        <StudyIconBg top="10%" right="8%">
          <SchoolIcon />
        </StudyIconBg>
        <StudyIconBg bottom="10%" left="10%">
          <CalculateIcon />
        </StudyIconBg>
        <StudyIconBg bottom="15%" right="12%">
          <LightbulbIcon />
        </StudyIconBg>
        <StudyIconBg top="50%" left="3%">
          <CreateIcon />
        </StudyIconBg>
        <StudyIconBg top="50%" right="5%">
          <ScienceIcon />
        </StudyIconBg>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <WhyChooseTitle>Why Choose Our Tutoring?</WhyChooseTitle>
          <WhyChooseContent sx={{ mb: 6 }}>
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
        {/* Background Study Icons for Social Section */}
        <StudyIconBg top="8%" left="6%">
          <HistoryEduIcon />
        </StudyIconBg>
        <StudyIconBg top="12%" right="7%">
          <MenuBookIcon />
        </StudyIconBg>
        <StudyIconBg bottom="8%" left="8%">
          <LightbulbIcon />
        </StudyIconBg>
        <StudyIconBg bottom="12%" right="10%">
          <SchoolIcon />
        </StudyIconBg>

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
              <SocialCardHeader>
                <TikTokIconWrapper>
                  <TikTokIcon />
                </TikTokIconWrapper>
                <Box sx={{ textAlign: 'right' }}>
                  <SocialSmallLabel>Follow us on</SocialSmallLabel>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>TikTok</Typography>
                </Box>
              </SocialCardHeader>
              <Typography sx={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', mb: 1.5 }}>
                Quick Learning Tips
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', opacity: 0.85, color: 'white', mb: 2 }}>
                Get bite-sized educational content, study hacks, and motivational videos to boost your learning.
              </Typography>
              <HandleLink>
                @EduMaster_Official <LaunchIcon sx={{ fontSize: 16 }} />
              </HandleLink>
            </TikTokCard>

            <LinkedInCard>
              <SocialCardHeader>
                <LinkedInIconWrapper>
                  <LinkedInIcon />
                </LinkedInIconWrapper>
                <Box sx={{ textAlign: 'right', color: 'white' }}>
                  <SocialSmallLabel>Connect on</SocialSmallLabel>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700 }}>LinkedIn</Typography>
                </Box>
              </SocialCardHeader>
              <Typography sx={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', mb: 1.5 }}>
                Professional Insights
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', opacity: 0.9, color: 'white', mb: 2 }}>
                Access in-depth articles, career guidance, and connect with our professional educational network.
              </Typography>
              <HandleLink>
                @EduMaster_Official <LaunchIcon sx={{ fontSize: 16 }} />
              </HandleLink>
            </LinkedInCard>
          </SocialCardsWrapper>

          <StatsWrapper>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <StatItem>
                  <Box sx={{ color: stat.color }}>{stat.icon}</Box>
                  <Typography sx={{ fontSize: '0.95rem', color: 'white' }}>
                    <Box component="span" sx={{ color: stat.color, fontWeight: 700, mr: 0.5 }}>
                      {stat.number}
                    </Box>
                    {stat.label}
                  </Typography>
                </StatItem>
                {index < stats.length - 1 && (
                  <Box
                    sx={{
                      width: 1,
                      height: 20,
                      borderRight: '1px solid rgba(255,255,255,0.15)',
                      mx: 2,
                      display: { xs: 'none', sm: 'block' }
                    }}
                  />
                )}
              </Box>
            ))}
          </StatsWrapper>
        </Container>
      </SocialMediaSection>

      <PortalSection>
        <StudyIconBg top="8%" left="6%">
          <MenuBookIcon />
        </StudyIconBg>
        <StudyIconBg top="15%" right="8%">
          <SchoolIcon />
        </StudyIconBg>
        <StudyIconBg bottom="12%" left="10%">
          <LightbulbIcon />
        </StudyIconBg>
        <StudyIconBg bottom="18%" right="12%">
          <CalculateIcon />
        </StudyIconBg>
        <Container maxWidth="lg">
          <PortalContent>
            <Box>
              <PortalHeading>Student Portal</PortalHeading>
              <PortalSubheading>
                Access your academic information and stay updated
              </PortalSubheading>
            </Box>
            <PortalCards>
              {portalCards.map((card, index) => (
                <PortalCard key={index}>
                  <PortalCardIcon>
                    {card.icon}
                  </PortalCardIcon>
                  <Typography sx={{ fontSize: '1.4rem', fontWeight: 700 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ opacity: 0.85, fontSize: '1rem', lineHeight: 1.5 }}>
                    {card.description}
                  </Typography>
                  <PortalButton
                    variant={index === 0 ? 'contained' : 'outlined'}
                    sx={{
                      backgroundColor: index === 0 ? '#2563eb' : 'transparent',
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.3)',
                      '&:hover': {
                        backgroundColor: index === 0 ? '#1d4ed8' : 'rgba(255,255,255,0.08)',
                        borderColor: 'rgba(255,255,255,0.4)'
                      }
                    }}
                  >
                    {card.buttonLabel}
                  </PortalButton>
                </PortalCard>
              ))}
            </PortalCards>
            <PortalFooter>
              {portalHighlights.map((highlight, index) => (
                <PortalFooterItem key={index}>
                  {highlight.icon}
                  <span>{highlight.label}</span>
                </PortalFooterItem>
              ))}
            </PortalFooter>
          </PortalContent>
        </Container>
      </PortalSection>

      <StayConnectedSection>
        {/* Background Study Icons for Stay Connected Section */}
        <StudyIconBg top="10%" left="5%">
          <CreateIcon />
        </StudyIconBg>
        <StudyIconBg top="15%" right="6%">
          <ScienceIcon />
        </StudyIconBg>
        <StudyIconBg bottom="10%" left="8%">
          <CalculateIcon />
        </StudyIconBg>
        <StudyIconBg bottom="15%" right="10%">
          <HistoryEduIcon />
        </StudyIconBg>

        <StayConnectedContent>
          <StayConnectedTitle>Stay Connected</StayConnectedTitle>
          <StayConnectedSubtitle>
            Follow us on all platforms for educational tips, updates, and inspiration.
          </StayConnectedSubtitle>
          
          <SocialIconsWrapper>
            <SocialIconContainer>
              <LinkedInIconCircle>
                <LinkedInIcon />
              </LinkedInIconCircle>
              <SocialIconLabel>LinkedIn</SocialIconLabel>
            </SocialIconContainer>
            
            <SocialIconContainer>
              <FacebookIconCircle>
                <FacebookIcon />
              </FacebookIconCircle>
              <SocialIconLabel>Facebook</SocialIconLabel>
            </SocialIconContainer>
            
            <SocialIconContainer>
              <TikTokIconCircle>
                <TikTokIcon />
              </TikTokIconCircle>
              <SocialIconLabel>TikTok</SocialIconLabel>
            </SocialIconContainer>
          </SocialIconsWrapper>
        </StayConnectedContent>
      </StayConnectedSection>
      <ContactPage />
    </>
  );
}