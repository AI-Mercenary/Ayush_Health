import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Outlet,useLocation } from 'react-router-dom';
import {
  AppBar,Toolbar,Typography,IconButton,Menu,MenuItem,Divider,Button,Grid,Card,CardContent,Box,
} 
from "@mui/material";
import {
  AccountCircle,ExpandMore as ExpandMoreIcon,Dashboard as DashboardIcon,Edit as EditIcon,Assignment as AssignmentIcon,
  PendingActions as PendingActionsIcon,Lock as LockIcon,Feedback as FeedbackIcon,Campaign as BroadcastIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import "../css/UserInterface.css";


const UserInterface = () => {
    const navigate =useNavigate();
    const location = useLocation();

  const [dropdownAnchor, setDropdownAnchor] = useState(null);

  const handleDropdownOpen = (event) => {
    setDropdownAnchor(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchor(null);
  };

  const dropdownOpen = Boolean(dropdownAnchor);
  const isEditing = location.pathname.includes("/editprofile") || location.pathname.includes("/changepassword");

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" style={{ backgroundColor: "#3F51B5" }}>
        <Toolbar>
          {/* Logo */}
          <img
            src="logo.png" // Add your logo path here
            alt="Logo"
            className="navbar-logo"
          />

          {/* Navbar Links */}
          <Box display={{ xs: "none", sm: "block" }}></Box>

          {/* Profile Dropdown on the Right */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDropdownOpen}
            style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <AccountCircle />
            <Typography variant="body1" style={{ marginLeft: "8px" }}>
              Profile
            </Typography>
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            anchorEl={dropdownAnchor}
            open={dropdownOpen}
            onClose={handleDropdownClose}
            PaperProps={{
              style: {
                width: "220px",
              },
            }}
          >
            <MenuItem>
              <DashboardIcon style={{ marginRight: "10px" }} /> Dashboard
            </MenuItem>
            <MenuItem onClick={()=>navigate('/userinterface/editprofile')}>
              <EditIcon style={{ marginRight: "10px" }} /> Edit Profile
            </MenuItem>
            <MenuItem>
              <AssignmentIcon style={{ marginRight: "10px" }} /> Schemes
            </MenuItem>
            <MenuItem>
              <PendingActionsIcon style={{ marginRight: "10px" }} /> My Application
            </MenuItem>
            <MenuItem onClick={()=>navigate('/userinterface/changepassword')}>
              <LockIcon style={{ marginRight: "10px" }} /> Change Password
            </MenuItem>
            <MenuItem>
              <FeedbackIcon style={{ marginRight: "10px" }} /> Feedback
            </MenuItem>
            <MenuItem>
              <BroadcastIcon style={{ marginRight: "10px" }} /> Broadcast
            </MenuItem>
            <Divider />
            <MenuItem>
              <LogoutIcon style={{ marginRight: "10px" }} /> Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {isEditing ? (
        <Outlet /> // Only render child routes (EditProfile or ChangePassword)
      ) : (
        <>

      {/* Dashboard and Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="20px">
        <Typography variant="h4" component="div">
          Dashboard
        </Typography>
        <Button variant="contained" style={{ backgroundColor: "#64C7CC", color: "#fff" }}>
          Apply for Scheme
        </Button>
      </Box>

      {/* Cards Section */}
      <Grid container spacing={4} padding="20px">
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card card-colored">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Total Applications
              </Typography>
              <Typography variant="h5">120</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card card-colored">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Total Applications Pending
              </Typography>
              <Typography variant="h5">45</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card card-colored">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Total Applications Classification
              </Typography>
              <Typography variant="h5">35</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fourth Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card card-colored">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Total Applications Approved
              </Typography>
              <Typography variant="h5">75</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fifth Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card card-colored">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Total Applications Rejected
              </Typography>
              <Typography variant="h5">10</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sixth Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card card-colored">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Total Applications Draft
              </Typography>
              <Typography variant="h5">15</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </>
      )}
    </>
  );
};

export default UserInterface;