import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
  Chip,
} from "@mui/material";

export default function Analytics() {
  // ---------------- DATA ----------------
  const students = [
    { id: "ST001", name: "Kamal Perera", class: "A", year: "2024", c1: "0771234567", c2: "0719876543" },
    { id: "ST002", name: "Nimal Silva", class: "B", year: "2023", c1: "0754567890", c2: "-" },
    { id: "ST003", name: "Saman Fernando", class: "A", year: "2024", c1: "0781112233", c2: "0769988776" },
    { id: "ST004", name: "Kasun Jayasinghe", class: "C", year: "2022", c1: "0702223344", c2: "-" },
    { id: "ST005", name: "Tharindu Lakshan", class: "B", year: "2024", c1: "0778899001", c2: "-" },
  ];

  // ---------------- STATES ----------------
  const [filters, setFilters] = useState({
    year: "",
    class: "",
    name: "",
    id: "",
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // ---------------- FILTER LOGIC ----------------
  const filteredStudents = students.filter((s) =>
    (!filters.year || s.year === filters.year) &&
    (!filters.class || s.class === filters.class) &&
    (!filters.name || s.name.toLowerCase().includes(filters.name.toLowerCase())) &&
    (!filters.id || s.id.toLowerCase().includes(filters.id.toLowerCase()))
  );

  return (
    <Box>
      {/* ======= HEADER ======= */}
      <Typography variant="h4" fontWeight={600} mb={3} color="#1e3a5f">
        Student Analytics
      </Typography>

      {/* ======= SEARCH FILTERS ======= */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: "14px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Student ID"
              value={filters.id}
              onChange={(e) => setFilters({ ...filters, id: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Student Name"
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              label="Class"
              value={filters.class}
              onChange={(e) => setFilters({ ...filters, class: e.target.value })}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="A">Class A</MenuItem>
              <MenuItem value="B">Class B</MenuItem>
              <MenuItem value="C">Class C</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              label="Year"
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {/* ======= STUDENT TABLE ======= */}
      <Paper sx={{ borderRadius: "14px", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f8fafc" }}>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contact 1</TableCell>
                <TableCell>Contact 2</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Year</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredStudents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((s, i) => (
                  <TableRow key={i} hover>
                    <TableCell>{s.id}</TableCell>
                    <TableCell fontWeight={500}>{s.name}</TableCell>
                    <TableCell>{s.c1}</TableCell>
                    <TableCell>{s.c2}</TableCell>
                    <TableCell>
                      <Chip label={`Class ${s.class}`} size="small" />
                    </TableCell>
                    <TableCell>{s.year}</TableCell>
                  </TableRow>
                ))}

              {filteredStudents.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    No students found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ======= PAGINATION ======= */}
        <TablePagination
          component="div"
          count={filteredStudents.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    </Box>
  );
}
