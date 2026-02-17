import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';
import homeImage from '../assets/profile01.png';
import ContactPage from './ContactPage';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a2332 0%, #243447 100%)',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(6),
  },
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'grid',
  gridTemplateColumns: '1fr 400px',
  alignItems: 'start',
  gap: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    gap: theme.spacing(4),
  },
}));

const HeroTextBox = styled(Box)(() => ({
  color: 'white',
}));

const HeroImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ProfileImage = styled(Box)(({ theme }) => ({
  width: '350px',
  height: '400px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  position: 'relative',
  backgroundImage: `url(${homeImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('md')]: {
    width: '280px',
    height: '320px',
  },
}));

const BadgeIcon = styled(Box)(() => ({
  position: 'absolute',
  bottom: 16,
  right: 16,
  width: 50,
  height: 50,
  borderRadius: '50%',
  background: '#3b82f6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)',
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(59, 130, 246, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  borderRadius: '8px',
  textAlign: 'center',
}));

const DownloadButton = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  background: 'transparent',
  border: '2px solid #3b82f6',
  borderRadius: '8px',
  color: '#3b82f6',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'inline-block',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#3b82f6',
    color: 'white',
  },
}));

const MissionSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #1a2332 0%, #243447 100%)',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const MissionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: 'none',
  maxWidth: '900px',
  margin: '0 auto',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
  },
}));

const MissionIcon = styled(Box)(() => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
  '& svg': {
    fontSize: '2.5rem',
    color: 'white',
  },
}));

const QualificationsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #2d3c52 0%, #3a4d66 100%)',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const QualificationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '12px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.3)',
    background: 'rgba(255, 255, 255, 0.12)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '1.8rem',
    color: 'white',
  },
}));

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #3a4d66 0%, #4a5f7a 100%)',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  background: '#0f172a',
  color: 'white',
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  borderLeft: '4px solid #3b82f6',
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  '&:hover': {
    transform: 'translateX(8px)',
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)',
  },
}));

const ExperienceIconWrapper = styled(Box)(() => ({
  width: 48,
  height: 48,
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& svg': {
    fontSize: '1.5rem',
    color: 'white',
  },
}));

const AchievementsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #4a5f7a 0%, #5a718f 100%)',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const AchievementCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: '12px',
  height: '100%',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const AchievementIconWrapper = styled(Box)(() => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  '& svg': {
    fontSize: '1.8rem',
    color: 'white',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  opacity: 0.7,
  marginBottom: theme.spacing(6),
  textAlign: 'center',
}));

export default function AboutPage() {
  const qualifications = [
    {
      icon: <SchoolIcon />,
      title: 'Master of Computer Science',
      institution: 'Stanford University',
      year: '2018-2020',
    },
    {
      icon: <SchoolIcon />,
      title: 'Bachelor of Technology & Information Technology',
      institution: 'MIT Boston',
      year: '2014-2018',
    },
    {
      icon: <VerifiedIcon />,
      title: 'Certified Web Professional',
      institution: 'Web Professionals',
      year: '2019',
    },
    {
      icon: <VerifiedIcon />,
      title: 'AWS Certified Solutions',
      institution: 'Amazon Web Services',
      year: '2020',
    },
  ];

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corporation',
      description: 'Led development of innovative applications using Java, React, and cloud technologies.',
      period: '2021 - Present',
      icon: <WorkIcon />,
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      description: 'Led development of innovative applications using Java, React, and cloud technologies.',
      period: '2019 - 2021',
      icon: <BusinessIcon />,
    },
  ];

  const achievements = [
    { number: '500+', label: 'Student Mentored', color: '#3b82f6', icon: <SchoolIcon /> },
    { number: '95%', label: 'Exam Pass Rate', color: '#16a34a', icon: <EmojiEventsIcon /> },
    { number: '50+', label: 'Top Ranked Students', color: '#9333ea', icon: <TimerIcon /> },
    { number: '85%', label: 'Job Plasment Rate', color: '#ea580c', icon: <WorkIcon /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent maxWidth="lg">
          <HeroTextBox>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Meet Your Tech Mentor
            </Typography>
            <Typography sx={{ fontSize: '1rem', mb: 4, opacity: 0.8, lineHeight: 1.7, maxWidth: '600px' }}>
              Passionate software engineer with 8+ years experience, specialized in
              shaping the next generation of tech professionals.
            </Typography>
            
            <StatsBox>
              <StatCard elevation={0}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6' }}>500+</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'white', opacity: 0.7 }}>Student Mentored</Typography>
              </StatCard>
              <StatCard elevation={0}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>95%</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'white', opacity: 0.7 }}>Exam Pass Rate</Typography>
              </StatCard>
              <StatCard elevation={0}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b' }}>50+</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'white', opacity: 0.7 }}>Top Ranked Students</Typography>
              </StatCard>
              <StatCard elevation={0}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b' }}>5</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'white', opacity: 0.7 }}>Job Placement Rate</Typography>
              </StatCard>
            </StatsBox>
          </HeroTextBox>

          <HeroImageBox>
            <ProfileImage>
              <BadgeIcon>
                👨‍🏫
              </BadgeIcon>
            </ProfileImage>
          </HeroImageBox>
        </HeroContent>
      </HeroSection>

      {/* Mission Section */}
      <MissionSection>
        <Container maxWidth="lg">
          <MissionCard elevation={0}>
            <MissionIcon>
              <LightbulbIcon />
            </MissionIcon>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
              My Mission
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
              "To bridge the gap between academic theory and industry practice by providing students with practical, hands-on technology education. 
              I believe every student has the potential to excel in tech, and my goal is to unlock that potential through personalized mentoring, real-world projects, and comprehensive skill development.".
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.6)', mt: 3 }}>
              - Alex Thompson, Tech Educator
            </Typography>
          </MissionCard>
        </Container>
      </MissionSection>

      {/* Qualifications Section */}
      <QualificationsSection>
        <Container maxWidth="lg">
          <SectionTitle sx={{ color: 'white' }}>
            Educational Qualifications
          </SectionTitle>
          <SectionSubtitle sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Strong academic background with hybrid certifications
          </SectionSubtitle>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            {qualifications.map((qual, index) => (
              <Box key={index}>
                <QualificationCard elevation={0}>
                  <IconWrapper>
                    {qual.icon}
                  </IconWrapper>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: 'white', mb: 1 }}>
                    {qual.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', mb: 1 }}>
                    {qual.institution}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                    {qual.year}
                  </Typography>
                </QualificationCard>
              </Box>
            ))}
          </Box>
        </Container>
      </QualificationsSection>

      {/* Experience Section */}
      <ExperienceSection>
        <Container maxWidth="lg">
          <SectionTitle sx={{ color: 'white' }}>
            Professional Experience
          </SectionTitle>
          <SectionSubtitle sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Industry experience that benefits real-world teaching
          </SectionSubtitle>

          <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} elevation={2}>
                <ExperienceIconWrapper>
                  {exp.icon}
                </ExperienceIconWrapper>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 0.5 }}>
                    {exp.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem', color: '#60a5fa', mb: 1 }}>
                    {exp.company}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                    {exp.description}
                  </Typography>
                </Box>
              </ExperienceCard>
            ))}
          </Box>
        </Container>
      </ExperienceSection>

      {/* Achievements Section */}
      <AchievementsSection>
        <Container maxWidth="lg">
          <SectionTitle sx={{ color: 'white' }}>
            Professional Experience
          </SectionTitle>
          <SectionSubtitle sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Industry experience that benefits real-world teaching
          </SectionSubtitle>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            {achievements.map((achievement, index) => (
              <Box key={index}>
                <AchievementCard 
                  elevation={3}
                  sx={{ bgcolor: achievement.color }}
                >
                  <AchievementIconWrapper>
                    {achievement.icon}
                  </AchievementIconWrapper>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>
                    {achievement.number}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'white' }}>
                    {achievement.label}
                  </Typography>
                </AchievementCard>
              </Box>
            ))}
          </Box>
        </Container>
      </AchievementsSection>

      <ContactPage />
    </>
  );
}
