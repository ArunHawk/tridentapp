import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handleClick = () => {
    window.localStorage.setItem("firstName", firstName);
    window.localStorage.setItem("lastName", lastName);
    window.localStorage.setItem("age", age);
    window.localStorage.setItem("mobile", mobile);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    navigate("/product/login");
  };

  return (
    <div>
      <Header />
      <div className="register">
        <Paper elevation={3} className="papers">
          <Box>
            <div className="field">
              <h2 className="names">Register page</h2>
              <TextField
                required
                id="outlined-required"
                label="FirstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="LastName"
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <TextField
                id="outlined-required"
                label="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
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
              <Button variant="contained" onClick={handleClick}>
                Register
              </Button>
            </div>
          </Box>
        </Paper>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
