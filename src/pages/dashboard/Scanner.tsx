import { useState } from "react";
import { Box, Typography, Paper, Button, Dialog, DialogContent, IconButton, Grid, Divider } from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface StudentData {
  name: string;
  address: string;
  contact: string;
  class: string;
  studentId: string;
}

export default function Scanner() {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scannedData, setScannedData] = useState<StudentData | null>(null);
  const [scanning, setScanning] = useState(false);

  // Simulate QR code scan
  const handleScan = () => {
    setScanning(true);

    // Simulate scanning delay
    setTimeout(() => {
      // Mock student data
      const mockData: StudentData = {
        name: "Kasun Perera",
        address: "No. 123, Galle Road, Colombo 03",
        contact: "+94 77 123 4567",
        class: "Grade 10-A",
        studentId: "STU2024001",
      };

      setScannedData(mockData);
      setScanning(false);
      setScannerOpen(false);
    }, 2000);
  };

  const handleOpenScanner = () => {
    setScannerOpen(true);
    setScannedData(null);
  };

  const handleCloseScanner = () => {
    setScannerOpen(false);
    setScanning(false);
  };

  const handleReset = () => {
    setScannedData(null);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3} color="#1e3a5f">
        QR Code Scanner
      </Typography>

      <Paper
        sx={{
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          textAlign: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <QrCodeScannerIcon sx={{ fontSize: 64, color: "#fff" }} />
        </Box>

        <Typography variant="h5" fontWeight={600} mb={2} color="#1e3a5f">
          Scan Student QR Code
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Click the button below to open the QR scanner and scan a student's QR code
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<QrCodeScannerIcon />}
          onClick={handleOpenScanner}
          sx={{
            backgroundColor: "#3b82f6",
            "&:hover": {
              backgroundColor: "#2563eb",
            },
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
          }}
        >
          Open Scanner
        </Button>
      </Paper>

      {/* Scanned Student Details */}
      {scannedData && (
        <Paper
          sx={{
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            border: "2px solid #10b981",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <CheckCircleIcon sx={{ fontSize: 32, color: "#10b981", mr: 2 }} />
            <Typography variant="h5" fontWeight={600} color="#10b981">
              Scan Successful!
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "8px",
                    background: "#3b82f620",
                    color: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonIcon />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    Student Name
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="#1e3a5f">
                    {scannedData.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "8px",
                    background: "#8b5cf620",
                    color: "#8b5cf6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ClassIcon />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    Class
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="#1e3a5f">
                    {scannedData.class}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "8px",
                    background: "#10b98120",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HomeIcon />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    Address
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="#1e3a5f">
                    {scannedData.address}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "8px",
                    background: "#f59e0b20",
                    color: "#f59e0b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    Contact
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="#1e3a5f">
                    {scannedData.contact}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Student ID:
                </Typography>
                <Typography variant="body1" fontWeight={600} color="#1e3a5f">
                  {scannedData.studentId}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{
                borderColor: "#3b82f6",
                color: "#3b82f6",
                "&:hover": {
                  borderColor: "#2563eb",
                  backgroundColor: "#3b82f610",
                },
                textTransform: "none",
                px: 4,
              }}
            >
              Scan Another
            </Button>
          </Box>
        </Paper>
      )}

      {/* Scanner Dialog */}
      <Dialog
        open={scannerOpen}
        onClose={handleCloseScanner}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
          },
        }}
      >
        <DialogContent sx={{ p: 4, textAlign: "center" }}>
          <IconButton
            onClick={handleCloseScanner}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" fontWeight={600} mb={3} color="#1e3a5f">
            QR Code Scanner
          </Typography>

          {/* Scanner Placeholder */}
          <Box
            sx={{
              width: "100%",
              height: 300,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #1e3a5f 0%, #0f2540 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {scanning ? (
              <Box>
                <Typography variant="h6" color="#fff" mb={2}>
                  Scanning...
                </Typography>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    border: "4px solid #fff",
                    borderRadius: "50%",
                    borderTopColor: "transparent",
                    animation: "spin 1s linear infinite",
                    "@keyframes spin": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                />
              </Box>
            ) : (
              <Box>
                <QrCodeScannerIcon sx={{ fontSize: 80, color: "#fff", mb: 2 }} />
                <Typography color="#fff">Position QR code within frame</Typography>
              </Box>
            )}

            {/* Scanner Frame */}
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                border: "3px solid #3b82f6",
                borderRadius: "12px",
              }}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleScan}
            disabled={scanning}
            sx={{
              backgroundColor: "#3b82f6",
              "&:hover": {
                backgroundColor: "#2563eb",
              },
              textTransform: "none",
              py: 1.5,
            }}
          >
            {scanning ? "Scanning..." : "Start Scan"}
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
