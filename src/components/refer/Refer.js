import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./refer.css";
import { Api_Url } from "../../Constant/Url";
import { useNavigate } from "react-router-dom";

const Refer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [refer, setRefer] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(Api_Url, {
      firstName,
      lastName,
      gender,
      age,
      mobile,
      refer,
    });
    navigate("/customer");
  };

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
            <Button variant="contained" onClick={postData}>
              Sumbit
            </Button>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Refer;
