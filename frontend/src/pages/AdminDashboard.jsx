import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Paper, Grid } from "@mui/material";
import { FaUsers, FaUserPlus, FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/admin.css"; // Your custom CSS for styling

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Placeholder state variables for data
  const [users, setUsers] = useState(100); // Total users
  const [appliedUsers, setAppliedUsers] = useState(20); // Users applied for the scheme
  const [registrations, setRegistrations] = useState(50); // Total registrations

  const [userProfiles, setUserProfiles] = useState([]); // List of user profiles
  const [userDetails, setUserDetails] = useState(null); // Single user details for viewing

  // Function to fetch user data (use your API endpoint or static data)
  useEffect(() => {
    // Fetch user data from API or database (for demonstration)
    const fetchedProfiles = [
      { id: 1, name: "John Doe", document: "file1.pdf", status: "pending" },
      { id: 2, name: "Jane Smith", document: "file2.pdf", status: "pending" },
    ];
    setUserProfiles(fetchedProfiles);
  }, []);

  const handleViewProfile = (userId) => {
    // Navigate to user profile details page or show modal
    const profile = userProfiles.find((user) => user.id === userId);
    setUserDetails(profile);
  };

  const handleAcceptApplication = (userId) => {
    // Logic to accept the application
    alert(`Application for user ${userId} accepted.`);
    // Update the user status here
  };

  const handleRejectApplication = (userId) => {
    // Logic to reject the application
    alert(`Application for user ${userId} rejected.`);
    // Update the user status here
  };

  const handleAddUser = () => {
    // Navigate to the "Add User" form or display a modal
    navigate("/admin/add-user");
  };

  const handleEditUser = (userId) => {
    // Navigate to the "Edit User" page or show modal
    navigate(`/admin/edit-user/${userId}`);
  };

  const handleRemoveUser = (userId) => {
    // Logic to remove a user
    alert(`User ${userId} removed.`);
    setUserProfiles(userProfiles.filter((user) => user.id !== userId));
  };

  // Function to view uploaded document (opens PDF in a new tab)
  const handleViewDocument = (documentName) => {
    // This can be linked to a document viewing page or a direct link
    window.open(`/uploads/${documentName}`, "_blank");
  };

  return (
    <div>
      <div className="dashboard-header">
        <Typography variant="h4">Admin Dashboard</Typography>
      </div>

      <div className="stats-section">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper className="stat-card">
              <FaUsers size={40} />
              <Typography variant="h5">{users}</Typography>
              <Typography>Total Users</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className="stat-card">
              <FaFileAlt size={40} />
              <Typography variant="h5">{appliedUsers}</Typography>
              <Typography>Users Applied for Scheme</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className="stat-card">
              <FaUserPlus size={40} />
              <Typography variant="h5">{registrations}</Typography>
              <Typography>Registrations</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="user-application-management">
        <Typography variant="h5" gutterBottom>
          Manage User Applications
        </Typography>
        <div className="user-list">
          <Grid container spacing={3}>
            {userProfiles.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Paper className="user-card">
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>Document: {user.document}</Typography>
                  <Typography>Status: {user.status}</Typography>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleAcceptApplication(user.id)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleRejectApplication(user.id)}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewProfile(user.id)}
                    >
                      View Profile
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      Remove User
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewDocument(user.document)}
                    >
                      View Document
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      {/* View User Details Section */}
      {userDetails && (
        <div className="view-user-details">
          <Typography variant="h6">User Profile Details</Typography>
          <Typography>Name: {userDetails.name}</Typography>
          <Typography>Document: {userDetails.document}</Typography>
          <Typography>Status: {userDetails.status}</Typography>
          {/* Add more details here */}
        </div>
      )}

      {/* Button to Add New User */}
      <Box sx={{ marginTop: "20px", textAlign: "center" }}>
        <Button variant="contained" onClick={handleAddUser}>
          Add New User
        </Button>
      </Box>
    </div>
  );
};

export default AdminDashboard;
