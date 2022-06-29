import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Api_Url } from "../../Constant/Url";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const updateUser = ({
    id,
    firstName,
    lastName,
    age,
    gender,
    mobile,
    refer,
  }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("refer", refer);
    navigate("/update");
  };
  const deleteUser = async (id) => {
    await axios.delete(Api_Url + id);
    callGetApi();
  };
  const callGetApi = async () => {
    const resp = await axios.get(Api_Url);
    setApiData(resp.data);
  };
  useEffect(() => {
    callGetApi();
  }, []);
  return (
    <div>
      <Header />
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">FirstName</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Mobile Number</TableCell>
                <TableCell align="right">Refered Person</TableCell>
                <TableCell align="right">Delete</TableCell>
                <TableCell align="right">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="right">{data.firstName}</TableCell>
                  <TableCell align="right">{data.lastName}</TableCell>
                  <TableCell align="right">{data.age}</TableCell>
                  <TableCell align="right">{data.gender}</TableCell>
                  <TableCell align="right">{data.mobile}</TableCell>
                  <TableCell align="right">{data.refer}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => deleteUser(data.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => updateUser(data)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Read;
