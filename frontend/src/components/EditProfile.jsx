import React,{useState} from 'react';
import '../css/Register.css';
import Grid from '@mui/material/Grid2';
import {
  Button,
  Autocomplete,
  TextField, 
} from "@mui/material";

const gender_options = ['Male','Female','Other'];

const countries = [
  'India','United States','Canada','United Kingdom','Australia','Germany','France','Japan','China','South Korea',
  'Brazil','Mexico','South Africa','Russia','Italy','Spain','Indonesia','Saudi Arabia','Turkey','Singapore'
];

const statesInIndia = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand',
  'Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands',
  'Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry'
];

const AP_DISTRICTS = [
    "Anakapalli","Anantapur","Annamaiah","Bapatla","Chittoor","Dr. B.R. Ambedkar Konaseema","East Godavari","Eluru",
    "Guntur","Kakinada","Krishna","Kurnool","Nandyal","NTR","Palnadu","Parvathipuram Manyam","Prakasam","Sri Potti Sriramulu Nellore",
    "Srikakulam","Sri Sathya Sai","Tirupati","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa","Alluri Sitharama Raju",
  ];


const EditProfile = () => {

  const [text, setText] = useState('');

  const handleChangeAdd = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    alert('Profile updated!');
    // Add form submission logic here
  };

  return (
    <div className='form-container'>
      <div className='first-head'>
       <h1 align='left'>Edit Profile</h1>
       <p>Please fill below form to edit your profile.</p>
      </div>
      
       <Grid container spacing={2} className='main-grid' sx={{marginLeft:{md:10,sm:15,xs:5}}}>
          
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                  label="First Name"
                  id="outlined-size-small"
                  size="small"
                  sx={{ width: {md:300,xs:400} }}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                  />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                disablePortal
                size='small'
                options={gender_options}
                sx={{ width: {md:300,xs:400} }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Contact Number"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                 <TextField
                    label="Email"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
                disablePortal
                size='small'
                options={countries}
                sx={{ width: {md:300,xs:400} }}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                    disablePortal
                    size='small'
                    options={statesInIndia}
                    sx={{ width: {md:300,xs:400} }}
                    renderInput={(params) => <TextField {...params} label="Select State" />}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                disablePortal
                size='small'
                options={AP_DISTRICTS}
                sx={{ width: {md:300,xs:400} }}
                renderInput={(params) => <TextField {...params} label="Select District" />}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
                 <TextField
                    label="Pincode"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: {md:300,xs:400} }}
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <TextField
                      label="Address"
                      multiline
                      rows={1} 
                      variant="outlined" 
                      value={text}
                      onChange={handleChangeAdd}
                      sx={{ width: {md:600,xs:400} }}
              />
          </Grid>
        </Grid>

        <Grid container className='btngroup' spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}> Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"> Cancel
        </Button>
        </Grid>
  </div>
  );
};

export default EditProfile;
