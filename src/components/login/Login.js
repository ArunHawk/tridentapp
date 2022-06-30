import Footer from "../footer/Footer";
import Header from "../header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getEmail = window.localStorage.getItem("email");
  const getPassword = window.localStorage.getItem("password");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email === getEmail && password === getPassword) {
      alert("login sucessful");
      navigate("/product");
    } else {
      alert("Pls check the password and mail");
    }   
  };

  return (
    <div>
      <Header />
      <div className="register">
        <form>
          <Paper elevation={3} className="papers">
            <Box>
              <div className="field">
                <h2 className="names">User Login</h2>
                <TextField
                  required
                  id="outlined-required"
                  label="Mail Id"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={handleSubmit}>
                  Login
                </Button>
              </div>
            </Box>
          </Paper>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
