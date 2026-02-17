import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface AttendanceRecord {
  id: number;
  studentName: string;
  class: string;
  date: string;
  status: "Present" | "Absent";
  checkInTime?: string;
}

export default function Attendance() {
  const [attendanceRecords] = useState<AttendanceRecord[]>([
    { id: 1, studentName: "Kasun Perera", class: "Grade 10-A", date: "2026-01-21", status: "Present", checkInTime: "07:45 AM" },
    { id: 2, studentName: "Nimal Silva", class: "Grade 10-A", date: "2026-01-21", status: "Present", checkInTime: "07:50 AM" },
    { id: 3, studentName: "Amara Fernando", class: "Grade 10-B", date: "2026-01-21", status: "Absent" },
    { id: 4, studentName: "Dilini Rajapaksa", class: "Grade 11-A", date: "2026-01-21", status: "Present", checkInTime: "07:42 AM" },
    { id: 5, studentName: "Saman Kumara", class: "Grade 11-A", date: "2026-01-21", status: "Present", checkInTime: "07:55 AM" },
    { id: 6, studentName: "Nethmi Wickramasinghe", class: "Grade 10-B", date: "2026-01-21", status: "Absent" },
    { id: 7, studentName: "Rohan Jayasuriya", class: "Grade 10-A", date: "2026-01-22", status: "Present", checkInTime: "07:48 AM" },
  ]);

  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  // Generate unique class list
  const classList = ["All", ...Array.from(new Set(attendanceRecords.map(r => r.class)))];

  // Filter records by class + date
  const filteredRecords = attendanceRecords.filter(r => {
    const matchClass = selectedClass === "All" || r.class === selectedClass;
    const matchDate = selectedDate ? dayjs(r.date).isSame(selectedDate, "day") : true;
    return matchClass && matchDate;
  });

  const presentCount = filteredRecords.filter(r => r.status === "Present").length;
  const absentCount = filteredRecords.filter(r => r.status === "Absent").length;

  return (
    <Box>
      {/* ================= HEADER ================= */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight={600} color="#1e3a5f">
          Attendance Management
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {/* Class select */}
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>Class</InputLabel>
            <Select
              value={selectedClass}
              label="Class"
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classList.map((cls) => (
                <MenuItem key={cls} value={cls}>
                  {cls}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Date picker */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>

          <CalendarTodayIcon sx={{ color: "#6b7280" }} />
          <Typography color="text.secondary">
            Today: {dayjs().format("YYYY-MM-DD")}
          </Typography>
        </Box>
      </Box>

      {/* ================= SUMMARY CARDS ================= */}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, mb: 3 }}>
        <Paper
          sx={{
            p: 2.5,
            borderRadius: 2,
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "#fff",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Present
          </Typography>
          <Typography variant="h3" fontWeight={700}>
            {presentCount}
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 2.5,
            borderRadius: 2,
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "#fff",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Absent
          </Typography>
          <Typography variant="h3" fontWeight={700}>
            {absentCount}
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 2.5,
            borderRadius: 2,
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            color: "#fff",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Attendance Rate
          </Typography>
          <Typography variant="h3" fontWeight={700}>
            {filteredRecords.length
              ? Math.round((presentCount / filteredRecords.length) * 100)
              : 0}
            %
          </Typography>
        </Paper>
      </Box>

      {/* ================= TABLE ================= */}
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f9fafb" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Student</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Class</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Check-in Time</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id} hover>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: record.status === "Present" ? "#10b981" : "#ef4444",
                        width: 36,
                        height: 36
                      }}
                    >
                      {record.studentName.charAt(0)}
                    </Avatar>
                    <Typography fontWeight={500}>
                      {record.studentName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>{record.class}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.checkInTime || "-"}</TableCell>
                <TableCell>
                  <Chip
                    icon={record.status === "Present" ? <CheckCircleIcon /> : <CancelIcon />}
                    label={record.status}
                    color={record.status === "Present" ? "success" : "error"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}

            {filteredRecords.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
