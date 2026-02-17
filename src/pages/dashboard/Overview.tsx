import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Chip,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Overview() {
  const stats = [
    { title: "Total Users", value: "1,234", color: "#3b82f6", icon: <PeopleIcon /> },
    { title: "Total Results", value: "5,678", color: "#10b981", icon: <BarChartIcon /> },
    { title: "Active Sessions", value: "89", color: "#f59e0b", icon: <DashboardIcon /> },
    { title: "Completion Rate", value: "94%", color: "#8b5cf6", icon: <BarChartIcon /> },
  ];

  const students = [
    { id: "ST001", name: "Kamal Perera", c1: "0771234567", c2: "0719876543", class: "A", year: "2024" },
    { id: "ST002", name: "Nimal Silva", c1: "0754567890", c2: "-", class: "B", year: "2023" },
    { id: "ST003", name: "Saman Fernando", c1: "0781112233", c2: "0769988776", class: "A", year: "2024" },
    { id: "ST004", name: "Kasun Jayasinghe", c1: "0702223344", c2: "-", class: "C", year: "2022" },
    { id: "ST005", name: "Tharindu Lakshan", c1: "0778899001", c2: "-", class: "B", year: "2024" },
     { id: "ST001", name: "Kamal Perera", c1: "0771234567", c2: "0719876543", class: "A", year: "2024" },
    { id: "ST002", name: "Nimal Silva", c1: "0754567890", c2: "-", class: "B", year: "2023" },
    { id: "ST003", name: "Saman Fernando", c1: "0781112233", c2: "0769988776", class: "A", year: "2024" },
    { id: "ST004", name: "Kasun Jayasinghe", c1: "0702223344", c2: "-", class: "C", year: "2022" },
    { id: "ST005", name: "Tharindu Lakshan", c1: "0778899001", c2: "-", class: "B", year: "2024" },
     { id: "ST001", name: "Kamal Perera", c1: "0771234567", c2: "0719876543", class: "A", year: "2024" },
    { id: "ST002", name: "Nimal Silva", c1: "0754567890", c2: "-", class: "B", year: "2023" },
    { id: "ST003", name: "Saman Fernando", c1: "0781112233", c2: "0769988776", class: "A", year: "2024" },
    { id: "ST004", name: "Kasun Jayasinghe", c1: "0702223344", c2: "-", class: "C", year: "2022" },
    { id: "ST005", name: "Tharindu Lakshan", c1: "0778899001", c2: "-", class: "B", year: "2024" },
    // demo data – you can add more
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      {/* ======= HEADER ======= */}
      <Typography variant="h4" fontWeight={600} mb={3} color="#1e3a5f">
        Dashboard Overview
      </Typography>

      {/* ======= STATS ======= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
          mb: 4,
        }}
      >
        {stats.map((stat, idx) => (
          <Box
            key={idx}
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography color="text.secondary">{stat.title}</Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  bgcolor: `${stat.color}20`,
                  color: stat.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {stat.icon}
              </Box>
            </Box>
            <Typography variant="h4" fontWeight={700}>
              {stat.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ======= STUDENTS TABLE ======= */}
      <Paper sx={{ borderRadius: "14px", overflow: "hidden" }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Students Details
          </Typography>
        </Box>

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
              {students
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
            </TableBody>
          </Table>
        </TableContainer>

        {/* ======= PAGINATION ======= */}
        <TablePagination
          component="div"
          count={students.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    </Box>
  );
}
