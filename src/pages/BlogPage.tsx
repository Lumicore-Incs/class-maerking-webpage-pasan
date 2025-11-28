import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
  Stack,
  Avatar,
  TextField,
  Divider,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type BlogPost = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  badge: string;
  image: string;
};

const categories = [
  { label: 'All Posts', count: 6, color: '#64b5f6' },
  { label: 'New Classes', count: 1, color: '#7c4dff' },
  { label: 'Class Updates', count: 1, color: '#ff9800' },
  { label: 'Special Programs', count: 2, color: '#26c6da' },
  { label: 'Exam Prep', count: 0, color: '#f06292' },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'New Advanced Mathematics Classes Starting February 2024',
    date: 'January 15, 2024',
    readTime: '2 min read',
    excerpt: 'Get ready for our specialized sessions covering complex numbers, integration techniques, and problem-solving sprints.',
    category: 'New Classes',
    badge: 'New Classes',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900',
  },
  {
    id: 2,
    title: 'Chemistry Lab Sessions - Important Schedule Update',
    date: 'January 12, 2024',
    readTime: '3 min read',
    excerpt: 'Lab timings have been extended with smaller cohorts to give every student more hands-on time with experiments.',
    category: 'Class Updates',
    badge: 'Class Update',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    id: 3,
    title: 'Physics Olympiad Preparation Workshop',
    date: 'January 10, 2024',
    readTime: '4 min read',
    excerpt: 'Join our intensive workshop designed to prepare students for national and international physics olympiads.',
    category: 'Special Programs',
    badge: 'Special Program',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900',
  },
  {
    id: 4,
    title: 'Grade 11 Biology Class: New Teaching Methods',
    date: 'January 08, 2024',
    readTime: '3 min read',
    excerpt: 'Discover the blended learning techniques and lab activities that helped last year’s batch achieve record results.',
    category: 'Teaching Innovation',
    badge: 'Teaching Innovation',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=900',
  },
  {
    id: 5,
    title: 'Exam Preparation Bootcamp - March Sessions',
    date: 'January 07, 2024',
    readTime: '4 min read',
    excerpt: 'Reserve your spot for our intensive bootcamp covering past papers, speed drills, and personalized feedback.',
    category: 'Special Programs',
    badge: 'Special Program',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900',
  },
  {
    id: 6,
    title: 'Online Learning Platform Launch',
    date: 'January 05, 2024',
    readTime: '3 min read',
    excerpt: 'Access recorded lessons, quizzes, and live doubt-clearing sessions with our new all-in-one digital platform.',
    category: 'Teaching Innovation',
    badge: 'Teaching Innovation',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900',
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const filteredPosts =
    activeCategory === 'All Posts'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #031533 0%, #050b1d 100%)',
        pt: { xs: 14, md: 18 },
        pb: 12,
        color: '#fff',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(3,12,40,0.3))',
            borderRadius: 4,
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 6 },
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <Typography variant="overline" sx={{ color: '#b3e5fc', letterSpacing: 6 }}>
            Latest Updates & Announcements
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mt: 1, lineHeight: 1.2 }}>
            Stay informed about new classes and important programs
          </Typography>
          <Typography variant="body1" sx={{ mt: 2.5, color: '#d5def0', maxWidth: 760, mx: 'auto' }}>
            Stay informed about new classes, schedule changes, special programs, and important announcements from your teachers.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
           <Paper
             sx={{
               backgroundColor: 'rgba(4,16,38,0.9)',
               borderRadius: 3,
               p: 3,
               border: '1px solid rgba(255,255,255,0.08)',
              flex: '0 0 320px',
              maxWidth: '100%',
             }}
           >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, letterSpacing: 1, color: '#fff'}}>
                  Categories
                </Typography>
                <Stack spacing={1.5}>
                  {categories.map((category) => {
                    const isActive = activeCategory === category.label;
                    return (
                      <Box
                        key={category.label}
                        onClick={() => setActiveCategory(category.label)}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderRadius: 2,
                          px: 2,
                          py: 1.2,
                          cursor: 'pointer',
                          backgroundColor: isActive ? 'rgba(12,72,172,0.4)' : 'transparent',
                          border: '1px solid rgba(255,255,255,0.08)',
                          transition: 'all 0.2s ease',
                          '&:hover': { backgroundColor: 'rgba(12,72,172,0.25)' },
                        }}
                      >
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <FiberManualRecordIcon fontSize="small" sx={{ color: category.color }} />
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: isActive ? 600 : 500, color: '#e0e6ff' }}
                          >
                            {category.label}
                          </Typography>
                        </Stack>
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            backgroundColor: isActive ? category.color : 'rgba(255,255,255,0.08)',
                            color: isActive ? '#041028' : '#fff',
                            fontWeight: 600,
                          }}
                        >
                          {category.count}
                        </Avatar>
                      </Box>
                    );
                  })}
                </Stack>

                <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.08)' }} />

                <Box
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(86,160,255,0.2), rgba(7,23,60,0.8))',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
                    Quick Tip
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#d0dcff' }}>
                    Subscribe to our newsletter to get real-time updates about classes and important notices.
                  </Typography>
                </Box>
           </Paper>

          <Box
            sx={{
              flex: '1 1 520px',
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                gap: 3,
              }}
            >
              {filteredPosts.map((post) => (
                <Paper
                  key={post.id}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(7, 20, 45, 0.9)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 320,
                  }}
                >
                  <Box
                    sx={{
                      height: 160,
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <Chip
                      label={post.badge}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: 'rgba(13,71,161,0.9)',
                        color: '#fff',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Stack direction="row" spacing={3} alignItems="center" sx={{ color: '#90a4c0' }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarTodayIcon fontSize="small" />
                        <Typography variant="caption">{post.date}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AccessTimeIcon fontSize="small" />
                        <Typography variant="caption">{post.readTime}</Typography>
                      </Stack>
                    </Stack>

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cbd5f0', lineHeight: 1.6 }}>
                      {post.excerpt}
                    </Typography>

                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        alignSelf: 'flex-start',
                        textTransform: 'none',
                        color: '#64b5f6',
                        fontWeight: 600,
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
         </Box>

        <Box
          sx={{
            mt: 10,
            borderRadius: 4,
            background: 'linear-gradient(120deg, #0049ff, #012b80)',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Never Miss an Update
          </Typography>
          <Typography variant="body1" sx={{ mt: 1.5, color: '#dfe7ff' }}>
            Subscribe to our newsletter and get notified about new classes, schedule changes, and important announcements.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ mt: 4, justifyContent: 'center' }}
          >
            <TextField
              placeholder="Enter Your Email"
              variant="outlined"
              sx={{
                minWidth: { xs: '100%', md: 360 },
                backgroundColor: '#fff',
                borderRadius: 999,
                '& fieldset': { border: 'none' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 999,
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#001a5f',
                borderRadius: 999,
                px: 4,
                '&:hover': { backgroundColor: '#000c35' },
              }}
            >
              Subscribe
            </Button>
          </Stack>
          <Typography variant="caption" sx={{ display: 'block', mt: 2, color: '#cfe0ff' }}>
            No spam, just important updates about your education.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;

