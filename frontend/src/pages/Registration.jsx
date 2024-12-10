import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import { Button, TextField, Container, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import '../css/Register.css'; // Custom CSS file
import { HiOutlineRefresh } from "react-icons/hi"

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .Mui-disabled": {
            color: "#0f4ea5",
            fontWeight:'bold',
            fontFamily:'cambria',
          },
        },
      },
    },
  },
});

const Registration = () => {
  const [aadhar, setAadhar] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [formData, setFormData] = useState({});
  const [formDisabled, setFormDisabled] = useState(true);
  const [otpDisabled, setOtpDisabled] = useState(true);
  const [captchaText, setCaptchaText] = useState(''); // CAPTCHA string
  const [inputCaptcha, setInputCaptcha] = useState(''); // User-entered value
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleAadharChange = (e) => {
    const value = e.target.value;
    setAadhar(value);
    setFormDisabled(value.length !== 12);
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post('/send-otp', { aadhar });
      if (response.data.status === 'success') {
        setIsOtpSent(true);
        setOtpDisabled(false);
        alert('OTP sent successfully');
      } else {
        alert(response.data.message || 'Error sending OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP');
    }
  };
  

  const verifyOtp = async () => {
    try {
      const response = await axios.post('/verify-otp', { otp });
      if (response.data.status === 'success') {
        setIsOtpVerified(true);
        setFormData(response.data.userData); // Populate form with user data
        alert('OTP verified successfully!');
      } else {
        alert(response.data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP');
    }
  };

  

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/user-data/${aadhar}`);
      setFormData(response.data);
      setFormDisabled(false); // Enable form fields after user data is fetched
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!isCaptchaValid) {
        alert('Please enter the correct CAPTCHA');
        return;
      }
  
      const response = await axios.post('/register', { formData });
  
      if (response.data.status === 'success') {
        alert('Registration successful! Check your email for the password.');
        // navigate("/login");
      } else {
        alert(response.data.message || 'Error during registration');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration');
    }
  };
  

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setInputCaptcha(value);
    setIsCaptchaValid(value === captchaText); // Check if input matches CAPTCHA
  };

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    // Set the CAPTCHA only if it is not already set or needs to regenerate
    if (!captchaText) {
      setCaptchaText(result); // Initialize CAPTCHA text
    } else {
      setCaptchaText(result); // Regenerate CAPTCHA
    }
  
    setIsCaptchaValid(false); // Reset CAPTCHA validation
  };
  
  // Generate initial CAPTCHA when the component loads (if using React)
  useEffect(() => {
    generateCaptcha();
  }, []);
  
  return (
    <Container className="registration-container">
      <Box className="form-header">
        <Typography className="heading" align="center">
          Registration Form
        </Typography>
        <Typography align="left" gutterBottom>
          Please fill all the below details:
        </Typography>
      </Box>

      <form onSubmit={handleSubmit} className="registration-form">
        <div class="main">
          <div class="first">
            <Grid container spacing={3}>
              {/* Aadhar Input */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Aadhar Number"
                  variant="outlined"
                  fullWidth
                  value={aadhar}
                  onChange={handleAadharChange}
                  sx={{ backgroundColor: '#f4f6f8', borderRadius: '8px', width: { sm: 300, xs: 400 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="text"
                  color="primary"
                  fullWidth
                  onClick={sendOtp}
                  disabled={!aadhar || aadhar.length !== 12 || isOtpSent}
                  sx={{ marginTop: 1, textDecoration: 'underline' }}
                >
                  Send OTP
                </Button>
              </Grid>
              {isOtpSent && !isOtpVerified && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Enter OTP"
                      variant="outlined"
                      fullWidth
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      disabled={otpDisabled}
                      sx={{ backgroundColor: '#f4f6f8', borderRadius: '8px', width: { md: 300, xs: 250 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="text"
                      color="primary"
                      fullWidth
                      onClick={verifyOtp}
                      disabled={otp.length !== 6}
                      sx={{ marginTop: 1, textDecoration: 'underline' }}
                    >
                      Verify OTP
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </div>

          <div class="second">
            {/* User Details Form */}
            {isOtpVerified && (
              <Grid container spacing={3}>
                {/* User Information Fields */}
                {[{ label: 'First Name', key: 'firstname' },
                  { label: 'Last Name', key: 'lastname' },
                  { label: 'Contact', key: 'contact' },
                  { label: 'Email', key: 'email' },
                  { label: 'Gender', key: 'gender' },
                  { label: 'District', key: 'district' },
                  { label: 'State', key: 'state' },
                  { label: 'Country', key: 'country' },
                  { label: 'Pincode', key: 'pincode' },
                  { label: 'Address', key: 'address' }
                ].map((field) => (
                  <Grid item xs={12} sm={6} md={4} key={field.key}>
                    <TextField
                      label={field.label}
                      type={field.type || 'text'}
                      variant="outlined"
                      fullWidth
                      value={formData[field.key] || ''}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      disabled
                      sx={{ backgroundColor: '#f4f6f8', borderRadius: '8px', width: { md: 300, xs: 250 } }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>

          {isOtpVerified && (
            <div className="captchasection">
              <Grid container spacing={2} sx={{ marginLeft: { md: 5, sm: 15, xs: 5 } }}>
                {/* CAPTCHA Display */}
                <Grid item xs={12} sm={6} md={4}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
  disabled
  value={captchaText}
  size="small"
  onCopy={(e) => e.preventDefault()} // Prevent copy
  sx={{
    width: { md: 150, xs: 150 },
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    userSelect: 'none', // Prevent selection
  }}
/>

<Button
  variant="contained"
  color="secondary"
  size="small"
  onClick={generateCaptcha}
  sx={{
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: '#ff8c00', // Example hover color
    },
  }}
>
  <HiOutlineRefresh size={30}/>
</Button>

                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <TextField
  label="Enter CAPTCHA"
  value={inputCaptcha}
  onChange={handleCaptchaChange}
  variant="outlined"
  fullWidth
  size="small"
  error={!isCaptchaValid && inputCaptcha.length > 0} // Error styling
  helperText={!isCaptchaValid && inputCaptcha.length > 0 ? 'CAPTCHA does not match' : ''}
  sx={{
    width: { md: 300, xs: 250 },
    backgroundColor: '#f4f6f8',
    borderRadius: '8px',
  }}
/>

                </Grid>
              </Grid>
            </div>
          )}
          <div class="three">
          {/* Submit Button */}
          {isOtpVerified && (
            <Grid item xs={12}>
              <Button
  type="submit"
  variant="contained"
  sx={{
    width: { md: 200, xs: 250 },
    backgroundColor: '#0f4ea5',
    color: 'white',
    fontWeight: 'bold',
  }}
  fullWidth
  disabled={formDisabled || !isCaptchaValid} // Ensure CAPTCHA is valid
>
  Register
</Button>

            </Grid>
          )}
        </div>
        </div>
      </form>
    </Container>
  );
};

export default Registration;
