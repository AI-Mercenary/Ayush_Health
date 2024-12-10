import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';

export default function SchemeNavbar() {
    return (
        <Box sx={{ backgroundColor: '#f8f9fa', padding: '10px 20px', borderBottom: '2px solid #ddd' }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {/* <Link underline="hover" color="inherit" href="Home.jsx" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    Home
                </Link> */}
                <Link underline="hover" color="inherit" href=" " sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    Schemes
                </Link>
                <Typography color="textPrimary" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    Offerings
                </Typography>
            </Breadcrumbs>
        </Box>
    );
}
