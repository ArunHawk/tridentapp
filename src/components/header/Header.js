import "./header.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { pink } from "@mui/material/colors";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const homgate = useNavigate();
  const handleHome = () => {
    homgate("/");
  };
  const handleLogin = () => {
    navigate("/product/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="head">
      <div className="headbar">
        <div className="headContainer">
          <span className="logo">Aqua Product</span>
          <div className="home">
            <HomeTwoToneIcon
              onClick={handleHome}
              sx={{ fontSize: 40, color: pink[500] }}
            />
          </div>
          {type !== "list" && (
            <div className="headItems">
              <button className="headButton" onClick={handleRegister}>
                Register
              </button>
              <button className="headButton" onClick={handleLogin}>
                Login
              </button>
            </div>
          )}
          <div className="avatar"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
