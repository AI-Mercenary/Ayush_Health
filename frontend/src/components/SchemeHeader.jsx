import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AyushLogo from '../pictures/startupmission.png'; 

export default function SchemeHeader() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#005a36', padding: '5px 20px' }}>
            <Toolbar>
                {/* Logo Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img
                        src={AyushLogo}
                        alt="Logo"
                        height="50"
                        style={{ marginRight: '15px', borderRadius: '50%' }}
                    />
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                            Government of India
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ddd' }}>
                            Ministry of Ayush
                        </Typography>
                    </Box>
                </Box>

                {/* Search Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                    <InputBase
                        placeholder="Search schemes or services..."
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '4px',
                            padding: '0 10px',
                            width: '250px',
                            marginRight: '10px',
                        }}
                    />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* Right Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* <img
                        src='https://cracku.in/latest-govt-jobs/wp-content/uploads/2022/05/Department-of-Ayush-Logo.jpg'
                        alt="Ayush Mission Logo"
                        height="40"
                        style={{ borderRadius: '5px' }}
                    /> */}
                    <Button
                        variant="contained"
                        startIcon={<TranslateIcon />}
                        sx={{ backgroundColor: '#007bff', '&:hover': { backgroundColor: '#0056b3' } }}
                    >
                        हिन्दी
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" sx={{ color: '#fff', cursor: 'pointer' }}>
                            A+
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff', cursor: 'pointer' }}>
                            A
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff', cursor: 'pointer' }}>
                            A-
                        </Typography>
                    </Box>
                    <IconButton color="inherit">
                        <AccessibilityIcon />
                    </IconButton>
                    {/* <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
