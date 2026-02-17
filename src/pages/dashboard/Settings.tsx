import { Box, Typography, Paper, TextField, Button, Switch, FormControlLabel, Divider } from "@mui/material";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: "MarkingWeb",
    email: "admin@markingweb.com",
    notifications: true,
    darkMode: false,
    autoSave: true,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
    // Add save logic here
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3} color="#1e3a5f">
        Settings
      </Typography>

      <Paper sx={{ padding: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", mb: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={3} color="#1e3a5f">
          General Settings
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Site Name"
            value={settings.siteName}
            onChange={(e) => handleChange("siteName", e.target.value)}
            fullWidth
            size="medium"
          />

          <TextField
            label="Email Address"
            type="email"
            value={settings.email}
            onChange={(e) => handleChange("email", e.target.value)}
            fullWidth
            size="medium"
          />
        </Box>
      </Paper>

      <Paper sx={{ padding: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", mb: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={3} color="#1e3a5f">
          Preferences
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={settings.notifications}
                onChange={(e) => handleChange("notifications", e.target.checked)}
                color="primary"
              />
            }
            label="Enable Notifications"
          />

          <Divider />

          <FormControlLabel
            control={
              <Switch
                checked={settings.darkMode}
                onChange={(e) => handleChange("darkMode", e.target.checked)}
                color="primary"
              />
            }
            label="Dark Mode"
          />

          <Divider />

          <FormControlLabel
            control={
              <Switch
                checked={settings.autoSave}
                onChange={(e) => handleChange("autoSave", e.target.checked)}
                color="primary"
              />
            }
            label="Auto Save"
          />
        </Box>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          sx={{
            backgroundColor: "#3b82f6",
            "&:hover": {
              backgroundColor: "#2563eb",
            },
            textTransform: "none",
            px: 4,
            py: 1.5,
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}
