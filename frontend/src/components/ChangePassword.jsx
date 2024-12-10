import React, { useState } from 'react';
import Refresh from "@mui/icons-material/Refresh";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import '../css/ChangePassword.css';

const ChangePassword = () => {
  const [captcha, setCaptcha] = useState('hhy6y');

  const handleCaptchaRefresh = () => {
    // Replace this with real captcha generation logic
    const newCaptcha = Math.random().toString(36).substring(2, 7);
    setCaptcha(newCaptcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password changed successfully!');
  };

  return (
    <Box className="change-password-container">
        <Box className="child-container">
      <Typography variant="h5" className="form-title">
        Change Password
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className="form-card">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Old Password"
              type="password"
              fullWidth
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="New Password"
              type="password"
              fullWidth
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} className="captcha-container">
            <Box className="captcha-image">
              <Typography>{captcha}</Typography>
              <IconButton onClick={handleCaptchaRefresh}>
                <RefreshIcon />
              </IconButton>
            </Box>
            <TextField
              label="Captcha"
              fullWidth
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              width="50px"
              className="change-password-button"
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
