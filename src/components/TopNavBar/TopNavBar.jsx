
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import styled from 'styled-components';
import SuperAdmin from '../SuperAdmin/SuperAdmin';

// Styled Badge for blue dot notifications
const BlueDotBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#3b82f6", // Blue color for the dot
    color: "#3b82f6", 
    width: "5px", 
    height: "5px",
    borderRadius: "50%", 
    right: 6, 
    top: 6,
  },
}));

const TopNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1c1c1c' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Side: Logo, Divider, and Title */}
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ height: "20px", width: "110px", marginRight: "5px" }}
            />
            <Box sx={{ height: "25px", width: "0.5px", backgroundColor: "#ffffff", margin: "0 10px" }} />
            <Typography variant="body2" sx={{ fontSize: "15px", color: "#ffffff", fontFamily: "Nunito Sans" }}>
              <span style={{ fontWeight: "lighter" }}>Property Management Solution</span>
            </Typography>
          </Typography>

          {/* Centered Search Bar */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <TextField
              variant="standard"
              placeholder="Search"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "#9b9ea3", ml: '10px' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#424242",
                  borderRadius: "4px",
                  color: "#ffffff",
                  width: "400px",
                  padding: "2px 5px", 
                  height: "35px",
                },
                inputProps: {
                  style: { fontSize: "13px" },
                },
              }}
            />
          </Box>

          {/* Right Side: Notifications and SuperAdmin */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" size="large">
              <BlueDotBadge overlap="circular" badgeContent=" " variant="dot">
                <NotificationsNoneOutlinedIcon />
              </BlueDotBadge>
            </IconButton>
            <Box sx={{ height: "25px", width: "0.5px", backgroundColor: "#ffffff", margin: "0 10px" }} />
            
            {/* SuperAdmin Component */}
            <SuperAdmin />

            {/* Optional: User Avatar and Name if needed */}
            
                      </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavBar;
