import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Api_Url } from "../../Constant/Url";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [refer, setRefer] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const updateUser = async () => {
    await axios.put(Api_Url + id, {
      firstName,
      lastName,
      gender,
      age,
      mobile,
      refer,
      id,
    });
    navigate("/read");
  };
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setAge(localStorage.getItem("age"));
    setGender(localStorage.getItem("gender"));
    setMobile(localStorage.getItem("mobile"));
    setRefer(localStorage.getItem("refer"));
  }, []);
  return (
    <div>
      <Header />
      <div className="refer">
        <h1>Customer Reference Details</h1>
      </div>
      <div className="form">
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              type={"number"}
              value={age}
              onChange={(event) => setAge(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile No"
              type={"phone"}
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Refered by"
              value={refer}
              onChange={(event) => setRefer(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={updateUser}>
              Update
            </Button>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
