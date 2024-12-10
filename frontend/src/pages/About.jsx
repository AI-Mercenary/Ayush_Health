import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import "../css/About.css";

const About = () => {
  return (
    <Container className="about-us-container">
      <Box className="about-us-box">
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <img
              src="https://ngo.ayush.gov.in/uploads/ckeditor/aboutus.jpg" 
              alt="Ayush"
              className="about-us-image"
            />
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h2" className="about-us-heading">
              About Us
            </Typography>
            <Typography variant="body1" className="about-us-content">
              The Ministry of Ayush was formed on the 9th of November 2014 with a vision of reviving the profound knowledge of our ancient systems of medicine and ensuring the optimal development and propagation of the Ayush systems of healthcare. Earlier, the Department of Indian System of Medicine and Homoeopathy (ISM&H) formed in 1995, later on renamed as the Department of Ayurveda, Yoga, and Naturopathy, Unani, Siddha, and Homoeopathy (Ayush) in November 2003. For more details, visit{" "}
              <a href="https://ayush.gov.in" target="_blank" rel="noopener noreferrer">
                https://ayush.gov.in
              </a>.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
