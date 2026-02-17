import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Page = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1a2332, #243447)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const Card = styled(Paper)(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(4),
  borderRadius: 18,
  background: "rgba(255,255,255,0.95)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.25)",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

const IconCircle = styled(Box)({
  width: 64,
  height: 64,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #0043FF, #0066FF)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Forgot password states
  const [openForgot, setOpenForgot] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <Page>
      <Container maxWidth="sm">
        <Card elevation={0}>
          <IconCircle>
            <LoginIcon sx={{ color: "#fff", fontSize: 32 }} />
          </IconCircle>

          <Typography
            textAlign="center"
            fontWeight={700}
            fontSize={{ xs: "1.4rem", sm: "1.6rem" }}
            mb={1}
          >
            Welcome Back
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            fontSize="0.9rem"
            mb={3}
          >
            Sign in to continue
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              size="small"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              required
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              size="small"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon fontSize="small" />
                      ) : (
                        <VisibilityIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 600,
                background:
                  "linear-gradient(135deg, #0043FF, #0066FF)",
              }}
            >
              Sign In
            </Button>
          </form>

          <Typography
            textAlign="center"
            fontSize="0.85rem"
            color="#0043FF"
            mt={2}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setOpenForgot(true);
              setStep("email");
            }}
          >
            Forgot Password?
          </Typography>

          <Typography
            textAlign="center"
            fontSize="0.9rem"
            mt={2}
            color="text.secondary"
          >
            Don’t have an account?{" "}
            <Box component="span" color="#0043FF" fontWeight={600}>
              Sign Up
            </Box>
          </Typography>
        </Card>
      </Container>

      {/* ================= FORGOT PASSWORD POPUP ================= */}
      <Dialog
        open={openForgot}
        onClose={() => setOpenForgot(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle textAlign="center" fontWeight={700}>
          {step === "email" ? "Forgot Password" : "Verify Code"}
        </DialogTitle>

        <DialogContent>
          {step === "email" && (
            <>
              <Typography fontSize="0.9rem" mb={2} textAlign="center">
                Enter your email address
              </Typography>
              <TextField
                fullWidth
                label="Email"
                size="small"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
              />
            </>
          )}

          {step === "otp" && (
            <>
              <Typography fontSize="0.9rem" mb={2} textAlign="center">
                Enter 4 digit verification code
              </Typography>

              <Box display="flex" justifyContent="center" gap={1}>
                {otp.map((d, i) => (
                  <TextField
                    key={i}
                    id={`otp-${i}`}
                    value={d}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, i)
                    }
                    inputProps={{
                      maxLength: 1,
                      style: {
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      },
                    }}
                    sx={{ width: 48 }}
                  />
                ))}
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              background:
                "linear-gradient(135deg,#0043FF,#0066FF)",
            }}
            onClick={() => {
              if (step === "email") {
                console.log("Send OTP to:", forgotEmail);
                setStep("otp");
              } else {
                console.log("OTP:", otp.join(""));
                setOpenForgot(false);
              }
            }}
          >
            {step === "email" ? "Send Code" : "Verify"}
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}
