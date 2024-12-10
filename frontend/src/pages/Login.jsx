import React, { useState } from "react";
import {
  TextField,
  Button,
  Link,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Grid  from "@mui/material/Grid2";
import { FcGoogle } from "react-icons/fc";
import { IoLogIn } from "react-icons/io5";
import "../css/Login.css";
import { PiFingerprintFill  } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SocialLogin() {
  return (
    <Box textAlign="center" mt={2}>
      <Button
        variant="outlined"
        startIcon={<FcGoogle />}
        sx={{ textTransform: "none" }}
      >
        Sign in with Google
      </Button>
    </Box>
  );
}

function BiometricAuth({ onFaceAuth, onFingerprintAuth }) {
  return (
    <Box textAlign="center">
      {/* <Typography>Or authenticate using biometrics:</Typography> */}
      <Button
        variant="text"
        // sx={{ margin: "10px" }}
        onClick={onFingerprintAuth}
      >
         <PiFingerprintFill size="30" title="Fingerprint Authentication"/>
      </Button>
      <Button
        variant="text"
        // sx={{ margin: "10px" }}
        onClick={onFaceAuth}
      >
        <FaUserCircle size="30" title="Face Authentication"/>
      </Button>
    
    </Box>
  );
}

function SignUpLink() {
  return (
    <Typography textAlign="center" className="clickhere" >
      Don&apos;t have an account?{" "}
      <Link href="/registration" underline="hover">
        Click Here
      </Link>
    </Typography>
  );
}

function ForgetPasswordLink({ onClick }) {
  return (
    <Box textAlign="right" mt={3}>
      <Link href="#" underline="hover" onClick={onClick} >
        <p sx={{marginTop:20}}>Forget Password?</p>
      </Link>
    </Box>
  );
}

function PasswordResetForm({ onBack }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email) {
      setError("Please enter your email.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3003/forgot-password", {
        email, // Send the entered email to the backend
      });

      if (response.status === 200) {
        setSuccess("Password reset email sent successfully!");
      } else {
        setError(response.data.message || "An error occurred.");
      }
    } catch (err) {
      console.error(err);
      setError("Could not connect to the server. Please try again.");
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    
    <form onSubmit={handleResetPassword}>
      <Typography className="subHead" mb={2}>
        Reset Password
      </Typography>
      <TextField
        label="Email or Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        sx={{width:{xs:300}}}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Box display="flex" alignItems="center" mt={2}>
        <input type="checkbox" style={{ marginRight: "8px" }} />
        <Typography>I&apos;m not a robot</Typography>
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        endIcon={<IoLogIn />}
      >
        Reset Password
      </Button>
      <Link
        variant="text"
        fullWidth
        sx={{ mt: 2}}
        onClick={onBack}
        underline="none"
      >
        Back to Login
      </Link>
    </form>
  );
}

function LoginFormContent({ onForgetPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const authenticateWithFace = () => {
    alert("Face authentication initiated!");
  };

  const authenticateWithFingerprint = () => {
    alert("Fingerprint authentication initiated!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        //alert(data.message); // Display success message

        // Store user details in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to the dashboard
        navigate("/dashboard");
      } else if (response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Could not connect to the server. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className='login-card-container' spacing={1}>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                id="email"
                value={email}
                sx={{ backgroundColor: '#f4f6f8', borderRadius: '8px',width:{xs:250,sm:300} }}
                onChange={(e) => setEmail(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                id="password"
                value={password}
                sx={{ backgroundColor: '#f4f6f8', borderRadius: '8px',width:{xs:250,sm:300} }}
                onChange={(e) => setPassword(e.target.value)}
            />
             {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}
        </Grid>
        <Grid container className='login-card-container' spacing={1}>
             <Grid item xs={12} sm={6}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2,         
                         width:{xs:300,sm:250},
                        alignSelf: "center",  }}
                        disabled={loading}
                    endIcon={<IoLogIn />}
                >
                    {loading ? "Logging in..." : "Login"}
                </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                <ForgetPasswordLink onClick={onForgetPassword} />
            </Grid>
        </Grid>
      </Grid>
      <div style={{ marginTop: "10px", margin: "10px" }} >OR</div>
      <BiometricAuth
        onFaceAuth={authenticateWithFace}
        onFingerprintAuth={authenticateWithFingerprint}
      />
      <SignUpLink />
    </form>
  );
}

const Login = () => {
  const [showResetForm, setShowResetForm] = useState(false);

  return (
    <Box
      className="login-container"  
    >
      <Card className="login-card">
        <CardContent>
            <Typography  className="heading" align="center">
             AYUSH LOGIN
            </Typography>
          {showResetForm ? (
            <PasswordResetForm onBack={() => setShowResetForm(false)} />
          ) : (
            <LoginFormContent onForgetPassword={() => setShowResetForm(true)} />
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
