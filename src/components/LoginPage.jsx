import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Register from "./Register";
import { checkUserApi } from "../actions/action";
import { useNavigate } from "react-router";
import validation from "./validation";

function LoginPage() {
  const navigate = useNavigate();
  const initialLogin = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [RegisterModal, setRegisterModal] = useState(false);
  const [loginUser, setLoginUser] = useState(initialLogin);
  const [tokenStatus, setTokenStatus] = useState(false);
  const [validateEmail, setValidateEmail] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });
  const [validatePassword, setValidatePassword] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });

  return (
    <>
      <Box
      // sx={{
      //   display: "flex",
      //   backgroundImage:
      //     "url('https://th.bing.com/th/id/OIP.CjapPOOsM5chDPqEA4IKlgHaF0?pid=ImgDet&w=202.99999999999997&h=159.48187499999997&c=7&dpr=1.3')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      >
        <Box
          sx={{
            width: "30%",
            border: 3,
            backgroundColor: "white",
            borderColor: "black",
            borderRadius: 15,
            marginLeft: "65%",
            marginTop: "50px",
            marginBottom: "45px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ marginTop: "50px", fontFamily: "fantasy" }}
            >
              Login
            </Typography>

            <TextField
              error={validateEmail.error}
              helperText={validateEmail.errorinfo}
              label="E-mail"
              sx={{ width: "60%", m: 3 }}
              onChange={(e) => {
                setLoginUser({ ...loginUser, email: e.target.value });
              }}
              onKeyUp={(e) => {
                setValidateEmail(validation("email", e.target.value));
              }}
            />
          </Box>
          <Box>
            <TextField
              type="Password"
              label="Password"
              sx={{ width: "60%", m: 3 }}
              onChange={(e) => {
                setLoginUser({ ...loginUser, password: e.target.value });
              }}
              error={validatePassword.error}
              helperText={validatePassword.errorinfo}
              onKeyUp={(e) => {
                setValidatePassword(validation("password", e.target.value));
              }}
            />
          </Box>
          <Button
            disabled={validateEmail.finalsubmit || validatePassword.finalsubmit}
            sx={{ fontSize: "30px", fontFamily: "fantasy" }}
            onClick={() => {
              dispatch(
                checkUserApi(loginUser, setTokenStatus),
                setLoginUser(initialLogin)
              );
            }}
          >
            LOGIN
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography paddingTop={1} paddingBottom={1}>
              Not a User ?
            </Typography>

            <Button
              sx={{ display: "block" }}
              onClick={() => {
                setRegisterModal(true);
              }}
            >
              REGISTER
            </Button>
          </Box>
          <Typography sx={{ marginBottom: "5px" }}>
            forgot password ?
          </Typography>
          <div>
            <img
              style={{
                border: "",
                borderColor: "black",
                borderRadius: "50px",
              }}
              src={
                "https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg"
              }
              alt={"Loginimg"}
              width={"100%"}
            />
          </div>
        </Box>
        {RegisterModal && (
          <Register
            setRegisterModal={setRegisterModal}
            RegisterModal={RegisterModal}
          />
        )}
        {localStorage.getItem("token") && navigate("/landingPage")}
      </Box>
    </>
  );
}

export default LoginPage;
