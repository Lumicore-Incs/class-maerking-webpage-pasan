import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const drawerWidth = 260;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    background: "linear-gradient(180deg, #1e3a5f 0%, #0f2540 100%)",
    color: "#fff",
    borderRight: "none",
  },
}));

const LogoBox = styled(Box)({
  padding: "24px 20px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
});

interface SidebarProps {
  isMobile: boolean;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

export default function Sidebar({ isMobile, mobileOpen, onDrawerToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Scanner", icon: <QrCodeScannerIcon />, path: "/dashboard/scanner", highlight: true },
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Analytics", icon: <BarChartIcon />, path: "/dashboard/analytics" },
     { text: "Student Marking", icon: <BorderColorIcon />, path: "/dashboard/students" },
     { text: "Attendance", icon: <AssignmentTurnedInIcon />, path: "/dashboard/attendance" },
    { text: "Users", icon: <PeopleIcon />, path: "/dashboard/users" },
    { text: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
    if (isMobile) {
      onDrawerToggle();
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const drawer = (
    <Box>
      <LogoBox>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "8px",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          M
        </Box>
        <Typography variant="h6" fontWeight={700}>
          MarkingWeb
        </Typography>
      </LogoBox>

      <List sx={{ px: 2, py: 3 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleMenuClick(item.path)}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: isActive ? "rgba(255,255,255,0.15)" : item.highlight ? "rgba(59, 130, 246, 0.2)" : "transparent",
                  border: item.highlight ? "1px solid rgba(59, 130, 246, 0.4)" : "none",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                  transition: "all 0.2s",
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mx: 2 }} />

      <List sx={{ px: 2, py: 2 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledDrawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={onDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {drawer}
    </StyledDrawer>
  );
}
