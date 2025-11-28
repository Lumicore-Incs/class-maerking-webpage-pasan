import { useState } from 'react';
import type { ReactNode } from 'react';
import { Box, Typography, Container, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import LanguageIcon from '@mui/icons-material/Language';
import SportsIcon from '@mui/icons-material/Sports';
import InfoIcon from '@mui/icons-material/Info';

type ResultRecord = {
  name: string;
  index: string;
  nic: string;
  gradeLevel: number;
  term: 'term1' | 'term2' | 'term3';
  examName: string;
  marks: number;
  letterGrade: string;
  rank: number;
};

const sampleResults: ResultRecord[] = [
  { name: 'Chamindi Piyumika', index: 'ST00021', nic: '200112345V', gradeLevel: 12, term: 'term2', examName: 'Second Term Mid Exam of Technology', marks: 76, letterGrade: 'A', rank: 34 },
  { name: 'Kasun Perera', index: 'ST00022', nic: '200112345V', gradeLevel: 12, term: 'term1', examName: 'First Term Combined Maths', marks: 62, letterGrade: 'A', rank: 12 },
  { name: 'Ishara Jayasinghe', index: 'ST00009', nic: '199812345V', gradeLevel: 11, term: 'term2', examName: 'Second Term Chemistry Theory', marks: 68, letterGrade: 'B', rank: 41 },
  { name: 'Amal Silva', index: 'ST00045', nic: '200412345V', gradeLevel: 10, term: 'term3', examName: 'Final Term General Science', marks: 74, letterGrade: 'A-', rank: 25 },
  { name: 'Tharushi Wijesinghe', index: 'ST00037', nic: '200312345V', gradeLevel: 11, term: 'term1', examName: 'First Term ICT Practical', marks: 71, letterGrade: 'B+', rank: 29 },
  { name: 'Nimal Fernando', index: 'ST00053', nic: '199912345V', gradeLevel: 12, term: 'term2', examName: 'Second Term Physics Paper', marks: 64, letterGrade: 'B', rank: 48 },
];

const ResultField = ({ label, value }: { label: string; value: ReactNode }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
    <Typography
      variant="caption"
      sx={{
        color: '#90a4ae',
        fontWeight: 600,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
      }}
    >
      {label}
    </Typography>
    <Box
      sx={{
        backgroundColor: '#111c26',
        color: 'white',
        borderRadius: 2,
        px: 2,
        py: 1.2,
        border: '1px solid rgba(255,255,255,0.08)',
        fontWeight: 600,
        fontSize: '0.95rem',
      }}
    >
      {value}
    </Box>
  </Box>
);

const ResultDetailCard = ({
  record,
  onBack,
  showBackButton,
}: {
  record: ResultRecord;
  onBack?: () => void;
  showBackButton?: boolean;
}) => (
  <Paper
    elevation={5}
    sx={{
      p: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, rgba(11,24,38,0.95), rgba(7,14,24,0.95))',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 24px 45px rgba(0,0,0,0.35)',
    }}
  >
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
      }}
    >
      <ResultField label="Student Name" value={record.name} />
      <ResultField label="Index Number" value={record.index} />
      <ResultField label="Exam Name" value={record.examName} />
      <ResultField label="Marks" value={record.marks} />
      <ResultField label="Grade" value={record.letterGrade} />
      <ResultField label="Rank" value={record.rank} />
    </Box>

    {showBackButton && (
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 4,
          backgroundColor: '#1e50ff',
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
          py: 1.2,
          '&:hover': { backgroundColor: '#1741cc' },
        }}
        onClick={onBack}
      >
        Back to Search
      </Button>
    )}
  </Paper>
);

const ResultPage = () => {
  const [grade, setGrade] = useState('');
  const [exam, setExam] = useState('');
  const [searchBy, setSearchBy] = useState<'index' | 'nic'>('index');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ResultRecord[]>([]);
  const [searched, setSearched] = useState(false);

  // Background pattern icons
  const icons = [
    SchoolIcon, MenuBookIcon, ScienceIcon, CalculateIcon, 
    VisibilityIcon, BrushIcon, LanguageIcon, SportsIcon
  ];

  const handleBackToSearch = () => {
    setSearched(false);
    setResults([]);
    setQuery('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a1929',
        position: 'relative',
        overflow: 'hidden',
        padding: 4,
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.08,
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          gap: 4,
          padding: 4,
          transform: 'rotate(-15deg) scale(1.5)',
        }}
      >
        {[...Array(48)].map((_, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Icon
              key={index}
              sx={{
                fontSize: 60,
                color: '#2c5f7c',
                opacity: 0.6,
              }}
            />
          );
        })}
      </Box>

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h4" 
          marginTop={10}
          component="h1" 
          gutterBottom 
          align="center" 
          sx={{ 
            fontWeight: 'bold',
            color: 'white',
            mb: 1,
          }}
        >
          Check Your Exam Results
        </Typography>
        <Typography 
          variant="body2" 
          align="center" 
          paragraph 
          sx={{ 
            mb: 4,
            color: '#b0bec5',
          }}
        >
          Enter your details below to view your exam results and performance.
        </Typography>

        <Paper 
          elevation={6} 
          sx={{ 
            padding: 4, 
            borderRadius: 2, 
            backgroundColor: 'rgba(23, 37, 52, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <FormControl fullWidth variant="outlined" sx={{ flex: 1 }}>
                <InputLabel 
                  id="grade-select-label"
                  sx={{ color: '#90caf9' }}
                >
                  Select Grade
                </InputLabel>
                <Select
                  labelId="grade-select-label"
                  id="grade-select"
                  label="Select Grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#37474f' 
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#546e7a' 
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#64b5f6' 
                    },
                    '& .MuiSelect-icon': { color: '#90caf9' },
                  }}
                >
                  <MenuItem value="">
                    <em>Choose Your Grade</em>
                  </MenuItem>
                  <MenuItem value={10}>Grade 10</MenuItem>
                  <MenuItem value={11}>Grade 11</MenuItem>
                  <MenuItem value={12}>Grade 12</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" sx={{ flex: 1 }}>
                <InputLabel 
                  id="exam-select-label"
                  sx={{ color: '#90caf9' }}
                >
                  Select Exam
                </InputLabel>
                <Select
                  labelId="exam-select-label"
                  id="exam-select"
                  label="Select Exam"
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#37474f' 
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#546e7a' 
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#64b5f6' 
                    },
                    '& .MuiSelect-icon': { color: '#90caf9' },
                  }}
                >
                  <MenuItem value="">
                    <em>Choose Exam</em>
                  </MenuItem>
                  <MenuItem value={'term1'}>Term 1</MenuItem>
                  <MenuItem value={'term2'}>Term 2</MenuItem>
                  <MenuItem value={'term3'}>Term 3</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <FormControl fullWidth sx={{ flex: 1 }}>
                <InputLabel id="searchby-label" sx={{ color: '#90caf9' }}>Search By</InputLabel>
                <Select
                  labelId="searchby-label"
                  id="searchby"
                  value={searchBy}
                  label="Search By"
                  onChange={(e) => setSearchBy(e.target.value as 'index' | 'nic')}
                  sx={{
                    color: 'white',
                    '& .MuiSelect-icon': { color: '#90caf9' },
                  }}
                >
                  <MenuItem value={'index'}>Index Number</MenuItem>
                  <MenuItem value={'nic'}>NIC</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label={searchBy === 'index' ? 'Student Index Number' : 'NIC'}
                variant="outlined"
                placeholder={searchBy === 'index' ? 'Enter your index number i.e. 57000011' : 'Enter NIC e.g. 901234567V'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{
                  flex: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: '#37474f' },
                    '&:hover fieldset': { borderColor: '#546e7a' },
                    '&.Mui-focused fieldset': { borderColor: '#64b5f6' },
                  },
                  '& .MuiInputLabel-root': { color: '#90caf9' },
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputBase-input::placeholder': { 
                    color: '#78909c',
                    opacity: 1,
                  },
                }}
              />
            </Stack>

            <Button
              onClick={() => {
                const q = query.trim().toLowerCase();
                setSearched(true);
                if (!q) {
                  setResults([]);
                  return;
                }

                const filtered = sampleResults.filter((s) => {
                  const matchesQuery =
                    searchBy === 'index'
                      ? s.index.toLowerCase().includes(q)
                      : s.nic.toLowerCase().includes(q);
                  const matchesGrade = grade ? s.gradeLevel === Number(grade) : true;
                  const matchesExam = exam ? s.term === exam : true;
                  return matchesQuery && matchesGrade && matchesExam;
                });
                setResults(filtered);
              }}
              variant="contained"
              fullWidth
              size="large"
              startIcon={<SearchIcon />}
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
                transition: 'background-color 0.3s, box-shadow 0.3s',
                '&:hover': { 
                  backgroundColor: '#1565c0',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.4)',
                },
              }}
            >
              Search
            </Button>
          </Stack>
        </Paper>

        {/* Results Section */}
        <Box sx={{ mt: 4 }}>
          {!searched && (
            <>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                Sample Result Preview
              </Typography>
              <Typography variant="body2" sx={{ color: '#90a4ae', mb: 3 }}>
                Try searching with index <strong>ST00021</strong> or NIC <strong>200112345V</strong> to see how the final result card looks.
              </Typography>
              <ResultDetailCard record={sampleResults[0]} />
            </>
          )}

          {searched && results.length === 0 && (
            <Paper sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.04)', color: 'red', mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <InfoIcon />
              <Typography variant="body1" align="center">No results found for your query.</Typography>
            </Paper>
          )}

          {searched && results.length > 0 && (
            <>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
                Search Results
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {results.map((record) => (
                  <ResultDetailCard
                    key={record.index}
                    record={record}
                    onBack={handleBackToSearch}
                    showBackButton
                  />
                ))}
              </Box>
            </>
          )}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(25, 118, 210, 0.15)',
              mb: 2,
            }}
          >
            <SearchIcon sx={{ fontSize: 45, color: '#64b5f6' }} />
          </Box>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              fontWeight: 600,
              color: 'white',
              mb: 1,
            }}
          >
            Ready to check Results
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              color: '#b0bec5',
            }}
          >
            Fill in the form above to search your exam results
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ResultPage;