import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar } from "@mui/material";

export default function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "Moderator", status: "Active" },
    { id: 5, name: "David Brown", email: "david@example.com", role: "User", status: "Active" },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "success" : "default";
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "#f59e0b";
      case "Moderator":
        return "#3b82f6";
      default:
        return "#6b7280";
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight={600} color="#1e3a5f">
          Users Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Total: {users.length} users
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f9fafb" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} sx={{ "&:hover": { backgroundColor: "#f9fafb" } }}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ bgcolor: getRoleColor(user.role), width: 36, height: 36 }}>
                      {user.name.charAt(0)}
                    </Avatar>
                    <Typography fontWeight={500}>{user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip
                    label={user.role}
                    size="small"
                    sx={{
                      backgroundColor: `${getRoleColor(user.role)}20`,
                      color: getRoleColor(user.role),
                      fontWeight: 500,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip label={user.status} size="small" color={getStatusColor(user.status)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
