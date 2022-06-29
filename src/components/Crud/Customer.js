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

const Read = () => {
  const [apiData, setApiData] = useState([]);
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
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.age}</TableCell>
                  <TableCell>{data.gender}</TableCell>
                  <TableCell>{data.mobile}</TableCell>
                  <TableCell>{data.refer}</TableCell>
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
