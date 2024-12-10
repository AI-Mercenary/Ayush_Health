// Required imports
import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material"; // MUI components
import Grid from "@mui/material/Grid"; // For layout
import { FaUsers, FaUserGraduate, FaRupeeSign } from "react-icons/fa"; // React Icons
import { useNavigate } from "react-router-dom"; // Navigation hook
import "../css/home.css"; // Ensure correct relative path

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleAdminClick = () => {
    navigate("/admin"); // Navigate to the Admin page
  };

  const handleUserClick = () => {
    navigate("/user"); // You can add a user page if needed
  };

  const marqueeMessages = [
    "Streamline your startup journey with the AYUSH Registration Portal – Register Now!",
    "Explore funding, mentorship, and networking opportunities through the AYUSH Portal!",
    "Supporting over 500+ AYUSH startups and counting – Join the movement!",
    "Committed to fostering Sustainable Development Goals in the AYUSH sector.",
    "Collaborate with industry experts through our mentorship programs!",
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Founder, HealthTech Innovations",
      feedback:
        "The AYUSH Portal has been instrumental in our startup's growth, providing both visibility and access to industry experts.",
    },
    {
      name: "Jane Smith",
      role: "Co-Founder, Wellness Solutions",
      feedback:
        "A fantastic platform that streamlined the entire registration process and connected us with valuable funding opportunities.",
    },
    {
      name: "Raj Kumar",
      role: "Founder, HerbalLife Enterprises",
      feedback:
        "The AYUSH Portal’s support has been crucial in helping us navigate the challenges of starting a business in the wellness space.",
    },
    {
      name: "Anita Roy",
      role: "Founder, PureHerbs Ltd.",
      feedback:
        "Thanks to the AYUSH Portal, we have gained the mentorship and resources we needed to grow and expand our business.",
    },
    {
      name: "Vikram Singh",
      role: "CEO, EcoHealth Solutions",
      feedback:
        "A seamless experience, the AYUSH portal connected us with industry leaders and accelerated our development.",
    },
  ];

  const partnerLogos = [
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/lg5.png",
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/lg2.png",
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/lg1.png",
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/lg4.png",
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/lg6.png",
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/lg7.png",
    "https://ayushedu.bisag-n.gov.in/AYUSH_EDU/admin/assets/img/pm_gatishakti.png",
  ];

  return (
    <div>
      {/* Main Content Section */}
      <div className="main-content full-width">
        <img
          src="https://s01.sgp1.digitaloceanspaces.com/large/850680-12489-krbpmhjakn-1505442949.jpg"
          alt="Campus"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <div className="overlay">
          <h1>
            Welcome to{" "}
            <span style={{ color: "#ff0000" }}>AYUSH</span> Registration Portal
          </h1>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="Scroll-Marquee">
        <div className="Scroll-Marquee-content">
          {marqueeMessages.map((message, index) => (
            <a key={index} className="link-notification parent-notification">
              <div className="triangle-left"></div>
              <div className="link-notification Scroll-Marquee-tag">
                {message}
              </div>
              <div className="triangle-right"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="left-section">
          <h1>
            Unlock Opportunities with the{" "}
            <span>AYUSH Startup Registration Portal</span>
          </h1>
          <p>
            Welcome to the AYUSH Startup Registration Portal – a platform
            dedicated to empowering startups in the AYUSH sector. Launched
            under the vision of promoting entrepreneurship and innovation, this
            portal streamlines the registration process for AYUSH startups,
            ensuring efficiency, transparency, and accessibility.
          </p>
          <p>
            The platform encourages collaboration between innovators, industry
            experts, and government officials to foster growth and
            sustainability in the AYUSH sector.
          </p>
        </div>
        <div className="right-section">
          <div className="card">
            <h2>Ranking</h2>
            <p>
              Ranked among the top platforms promoting innovation and
              entrepreneurship in the AYUSH sector, the AYUSH Startup
              Registration Portal is dedicated to supporting Sustainable
              Development Goals (SDGs) and fostering growth in traditional
              Indian medicine and wellness systems.
            </p>
          </div>
        </div>
      </div>

      {/* Current Info Section */}
      <CurrentInfo />

      {/* Trusted Partners Section */}
      <div className="trusted-partners-section">
        <h2>Our Trusted Partners</h2>
        <div className="trusted-partners-slider">
          <div className="slider-track">
            {partnerLogos.map((logo, index) => (
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                key={index}
                className="partner-logo"
              />
            ))}
            {partnerLogos.map((logo, index) => (
              <img
                src={logo}
                alt={`Partner ${index + 1} Duplicate`}
                key={`duplicate-${index}`}
                className="partner-logo"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Users Are Saying</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="feedback">"{testimonial.feedback}"</p>
              <p className="user-name">- {testimonial.name}</p>
              <p className="user-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#003366",
          padding: "10px 0",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#003366",
            color: "white",
          }}
          onClick={handleAdminClick} // Navigate to Admin
        >
          Admin
        </Button>
        <Button
          variant="contained"
          sx={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            "&:hover": { backgroundColor: "#005500" },
          }}
          onClick={handleUserClick} // Navigate to User (optional)
        >
          User
        </Button>
      </Box>
    </div>
  );
};

// Current Info Component
const CurrentInfo = () => {
  return (
    <Box
      sx={{ backgroundColor: "#fbb03b", padding: "50px 0", textAlign: "center" }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "white" }}>
        Current Info
      </Typography>
      <hr
        style={{
          width: "50px",
          border: "1px solid #fff",
          margin: "0 auto 40px",
        }}
      />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{
              backgroundColor: "#ffebc5",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaUsers size={40} color="#003366" />
            <Typography
              variant="h5"
              sx={{ color: "#003366", marginBottom: "10px" }}
            >
              4250
            </Typography>
            <Typography sx={{ color: "#666666" }}>Registered Startups</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{
              backgroundColor: "#ffebc5",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaUserGraduate size={40} color="#003366" />
            <Typography
              variant="h5"
              sx={{ color: "#003366", marginBottom: "10px" }}
            >
              3100
            </Typography>
            <Typography sx={{ color: "#666666" }}>
              AYUSH Startups with Funding
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{
              backgroundColor: "#ffebc5",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaRupeeSign size={40} color="#003366" />
            <Typography
              variant="h5"
              sx={{ color: "#003366", marginBottom: "10px" }}
            >
              350 Crore
            </Typography>
            <Typography sx={{ color: "#666666" }}>Funds Disbursed</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
