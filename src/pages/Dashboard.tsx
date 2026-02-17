import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../components/Sidebar";
import Overview from "./dashboard/Overview";
import Analytics from "./dashboard/Analytics";
import Users from "./dashboard/Users";
import Settings from "./dashboard/Settings";
import Attendance from "./dashboard/Attendance";
import Scanner from "./dashboard/Scanner";

const MainContainer = styled(Box)({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#f5f7fa",
});

const ContentBox = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

const StyledAppBar = styled(AppBar)({
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  color: "#1e3a5f",
});

const MainContent = styled(Box)({
  flexGrow: 1,
  padding: "24px",
});

export default function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    navigate("/login");
  };

  return (
    <MainContainer>
      <Sidebar isMobile={isMobile} mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />

      <ContentBox>
        <StyledAppBar position="static" elevation={0}>
          <Toolbar>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            )}

            <Box sx={{ flexGrow: 1 }} />

            <IconButton color="inherit" sx={{ mr: 1 }}>
              <NotificationsIcon />
            </IconButton>

            <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: "#3b82f6", width: 36, height: 36 }}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>My Account</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </StyledAppBar>

        <MainContent>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainContent>
      </ContentBox>
    </MainContainer>
  );
}
