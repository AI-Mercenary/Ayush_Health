import React,{useState} from 'react';
import '../css/Register.css';
import Grid from '@mui/material/Grid2';
import {
  Button,
  Autocomplete,
  TextField,
  useTheme, 
  InputLabel
} from "@mui/material";
import { IoLogIn } from "react-icons/io5";
import axios from 'axios'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Govt. Organisations',
  'Private Organisations',
  'Individuals'
];
const subnames = {
  'Govt. Organisations': ['Govt. Hospitals', 'Clinics', 'Option 3'],
  'Private Organisations': ['Private Option 1', 'Private Option 2', 'Private Option 3'],
  'Individuals': ['Individual 1', 'Individual 2', 'Individual 3']
};


const Registration = () => {

  const [text, setText] = useState('');
  const [selectedOrgType, setSelectedOrgType] = useState('');
  const [filteredSubnames, setFilteredSubnames] = useState([]);
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaText, setCaptchaText] = useState(''); // CAPTCHA string
  const [inputCaptcha, setInputCaptcha] = useState(''); // User-entered value
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  

  const [values,setValues]=useState({
    fname:'',
    lname:'',
    email:'',
    gender:'',
    contact:'',
    country:'',
    state:'',
    district:'',
    pincode:'',
    address:''
  })

  const handleOrgTypeChange = (event, value) => {
    setSelectedOrgType(value);
    setFilteredSubnames(subnames[value] || []);
  };

  const handleAadhaarChange = (event) => {
    setAadhaar(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = () => {
    if (aadhaar.length === 12) {
      setIsOtpSent(true);
      alert('OTP Sent');
    } else {
      alert('Enter a valid Aadhaar Number');
    }
  };

  const handleVerifyOtp = async () => {
    if (otp !== '1234') {
      alert('Invalid OTP');
      return;
    }
  
    try {
      const response = await axios.get('/ayush/aadhardata',{aadhaar}); // Replace with your actual endpoint
      const data = response.data;
      console.log(data)
      // Update the form fields with the response data
      setValues((prevValues) => ({
        ...prevValues,
        fname: data.fname||'',
        lname: data.lname || '',
        email: data.email || '',
        gender: data.gender || '',
        contact: data.contact || '',
        country: data.country || '',
        state: data.state || '',
        district: data.district || '',
        pincode: data.pincode || '',
        address: data.address || '',
      }));
      setIsOtpVerified(true);
      alert('OTP Verified Successfully');
    } catch (error) {
      console.error('Error fetching Aadhaar data:', error);
      alert('Failed to fetch Aadhaar data. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeAdd = (event) => {
    setText(event.target.value);
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
  

  const handleSubmit = () => {
    if (!isCaptchaValid) {
      alert('Please enter the correct CAPTCHA');
      return;
    }
    alert('Registration successful!');
    // Add form submission logic here
  };

  return (
    <div className='form-container'>
      <div className='first-head'>
       <h1 align='left'>Register</h1>
       <p>Please fill below form to register.</p>
      </div>
      
       <Grid container spacing={2} className='main-grid' sx={{marginLeft:{md:10,sm:15,xs:5}}}>
          {/* Organisation Type */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
        <Autocomplete
          disablePortal
          size="small"
          options={names}
          name='orgtype'
          value={selectedOrgType}
          onChange={handleOrgTypeChange}
          sx={{ width: { md: 300, xs: 400 } }}
          renderInput={(params) => <TextField {...params} label="Organization Type" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Autocomplete
          disablePortal
          size="small"
          name='sorg'
          options={filteredSubnames}
          sx={{ width: { md: 300, xs: 400 } }}
          renderInput={(params) => <TextField {...params} label="Sub Organization Type" />}
        />
      </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                label="Aadhar Number"
                id="outlined-size-small"
                size="small"
                name='aadhar'
                value={aadhaar}
                onChange={handleAadhaarChange}
                sx={{ width: {md:300,xs:400} }}
              />
            </Grid>
            <Grid>
            <Button variant="contained" fullWidth onClick={handleSendOtp} disabled={!aadhaar}>
              Send otp
            </Button>
            </Grid>
          
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
                label="OTP"
                id="outlined-size-small"
                size="small"
                name='otp'
                value={otp}
                onChange={handleOtpChange}
                sx={{ width: {md:300,xs:400} }}
                disabled={!isOtpSent}
              />
            </Grid>
            <Grid>
            <Button variant="contained" fullWidth onClick={handleVerifyOtp} disabled={!isOtpSent}>
              Verify Otp
            </Button>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                  label="First Name"
                  id="outlined-size-small"
                  size="small"
                  value={values.fname}
                  name='fname'
                  onChange={handleInputChange}
                  sx={{ width: {md:300,xs:400} }}
                  disabled={!isOtpVerified}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    size="small"
                    name='lname'
                    sx={{ width: {md:300,xs:400} }}
                    onChange={handleInputChange}
                    disabled={!isOtpVerified}
                  />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                disablePortal
                size='small'
                options={names}
                onChange={handleInputChange}
                name='gender'
                sx={{ width: {md:300,xs:400} }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
                disabled={!isOtpVerified}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Organization Name"
                    id="outlined-size-small"
                    size="small"
                    name='orgname'
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Registration Number"
                    id="outlined-size-small"
                    size="small"
                    name='rnumber'
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Registration Date"
                    id="outlined-size-small"
                    size="small"
                    name='rdate'
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Contact Number"
                    id="outlined-size-small"
                    size="small"
                    name='contact'
                    onChange={handleInputChange}
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                 <TextField
                    label="Email"
                    id="outlined-size-small"
                    size="small"
                    name='email'
                    onChange={handleInputChange}
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
                disablePortal
                size='small'
                options={names}
                onChange={handleInputChange}
                name='country'
                sx={{ width: {md:300,xs:400} }}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
                disabled={!isOtpVerified}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                    disablePortal
                    size='small'
                    options={names}
                    sx={{ width: {md:300,xs:400} }}
                    renderInput={(params) => <TextField {...params} label="Select State" />}
                    disabled={!isOtpVerified}
                    name='fname'
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                disablePortal
                size='small'
                onChange={handleInputChange}
                name='district'
                options={names}
                sx={{ width: {md:300,xs:400} }}
                renderInput={(params) => <TextField {...params} label="Select District" />}
                disabled={!isOtpVerified}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
                 <TextField
                    label="Pincode"
                    id="outlined-size-small"
                    size="small"
                    name='pincode'
                    sx={{ width: {md:300,xs:400} }}
                    onChange={handleInputChange}
                    disabled={!isOtpVerified}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <TextField
                      label="Address"
                      multiline
                      name='address'
                      rows={2} // Number of visible lines
                      variant="outlined" // Can be 'outlined', 'filled', or 'standard'
                      value={text}
                      //onChange={handleChangeAdd}
                      onChange={handleInputChange}
                      sx={{ width: {md:600,xs:400} }}
                      disabled={!isOtpVerified}
              />
          </Grid>
        </Grid>

      {selectedOrgType !== 'Individuals' && (
       <div>
        <div className='first-head'>
          <h3 align='left'>Organization Details:</h3>
         </div>
        <Grid container spacing={2} className='sec-grid' sx={{marginLeft:{md:10,sm:15,xs:5}}}>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Head of the Organization"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Contact Number"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Email ID"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={12}>
              <TextField
                      label="Address"
                      multiline
                      rows={2} // Number of visible lines
                      variant="outlined" // Can be 'outlined', 'filled', or 'standard'
                      value={text}
                      onChange={handleChangeAdd}
                      sx={{ width: {md:600,xs:400} }}
                      disabled={!isOtpVerified}
              />
          </Grid>
        </Grid>
        </div>
        )}
      
        <div className='first-head'>
          <h3 align='left'>Project Details:</h3>
         </div>
        <Grid container spacing={2} className='sec-grid' sx={{marginLeft:{md:10,sm:15,xs:5}}}>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Programme Coordinator"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Contact Number"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Email ID"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
        </Grid>
          
      {selectedOrgType === 'Individuals' && (
      <div>
        <div className='first-head'>
          <h3 align='left'>Bank Account Details:</h3>
         </div>
        <Grid container spacing={2} className='sec-grid' sx={{marginLeft:{md:10,sm:15,xs:5}}}>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Name as per the Bank Account"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Account Number"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Bank Name"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Branch Name"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="IFSC Code"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="MICR Code"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                    disabled={!isOtpVerified}
                  />
          </Grid>
        </Grid>
        <div className='last-head'>
          {/* <h3 align='left'>Bank Account Details:</h3> */}
        <Grid container spacing={2} className='sec-grid' marginLeft={10}>
          <Grid item xs={12} sm={6} md={4} >
                <TextField
                    label="Captcha"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: 150 }}
                  />
          </Grid>
        </Grid>
        </div>
      </div>
      )}

    
    <div className='captchasection'>
      <Grid container spacing={2} className='sec-grid' sx={{marginLeft:{md:10,sm:15,xs:5}}}>
      {/* CAPTCHA Display */}
      <Grid item xs={12} sm={6} md={4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              disabled
              value={captchaText}
              size="small"
              sx={{
                width: { md: 150, xs: 150 },
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={generateCaptcha}
              sx={{ marginLeft: 2 }}
            >
              Generate
            </Button>
          </div>
        </Grid>

        {/* CAPTCHA Input */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Enter CAPTCHA"
            value={inputCaptcha}
            onChange={handleCaptchaChange}
            size="small"
            sx={{ width: { md: 300, xs: 400 } }}
          />
        </Grid>
      </Grid>
      </div>

        <Grid container className='btngroup' spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          disabled={!isCaptchaValid}> Register
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"> Cancel
        </Button>
        </Grid>
        <Grid container className='logbtn' spacing={2}>
        <InputLabel>Already Registered ? Click Here To</InputLabel>
        <Button variant="contained" endIcon={<IoLogIn  />}>
        Login
      </Button>
        </Grid>
  </div>
  );
};

export default Registration;
