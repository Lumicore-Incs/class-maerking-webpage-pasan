import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterSection = styled(Box)(({ theme }) => ({
  background: '#000',
  color: '#fff',
  padding: theme.spacing(8, 0),
  fontFamily: "'Outfit', sans-serif",
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  flex: '1 1 30%',
  minWidth: '250px',
  [theme.breakpoints.down('md')]: {
    flex: '1 1 100%',
    marginBottom: theme.spacing(4),
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Brush Script MT', cursive",
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: '#42a5f5',
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  maxWidth: '350px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const SocialIconCircle = styled(Box)(() => ({
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: '#42a5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '#2196f3',
  },
  '& svg': {
    fontSize: '1.2rem',
    color: '#fff',
  },
}));

const ColumnTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2.5),
  color: '#fff',
}));

const LinkItem = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  marginBottom: theme.spacing(1.5),
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#42a5f5',
  },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1.5),
  '& svg': {
    fontSize: '1.2rem',
    marginRight: theme.spacing(1.5),
    color: '#42a5f5',
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const ContactText = styled(Typography)(() => ({
  fontSize: '0.95rem',
  lineHeight: 1.6,
}));

export default function ContactPage() {
  return (
    <FooterSection id="contact">
      <FooterContent>
        <FooterColumn>
          <LogoText>EduCorner</LogoText>
          <DescriptionText>
            Dedicated to providing quality education and helping students achieve their academic goals through personalized tutoring and comprehensive exam preparation.
          </DescriptionText>
          <SocialIcons>
            <SocialIconCircle><LinkedInIcon /></SocialIconCircle>
            <SocialIconCircle><FacebookIcon /></SocialIconCircle>
            <SocialIconCircle><LinkIcon /></SocialIconCircle>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkItem>Home</LinkItem>
          <LinkItem>Check Results</LinkItem>
          <LinkItem>Blog</LinkItem>
          <LinkItem>About Teacher</LinkItem>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Contact Info</ColumnTitle>
          <ContactInfoItem>
            <PhoneIcon />
            <ContactText>+94 77 578 763</ContactText>
          </ContactInfoItem>
          <ContactInfoItem>
            <EmailIcon />
            <ContactText>educomer@gmail.com</ContactText>
          </ContactInfoItem>
          <ContactInfoItem>
            <LocationOnIcon />
            <ContactText>no 34, Kandy road, Kakirawa</ContactText>
          </ContactInfoItem>
        </FooterColumn>
      </FooterContent>
    </FooterSection>
  );
}
