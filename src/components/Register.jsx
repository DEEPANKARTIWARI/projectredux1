import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { fetchUserApi } from "../actions/action";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validation from "./validation";

function Register({ setRegisterModal, RegisterModal }) {
  const initialUserValue = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
  };
  const dispatch = useDispatch();

  const [newUser, setnewUser] = useState(initialUserValue);
  const [validateFname, setValidateFname] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });
  const [validateLname, setValidateLname] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });
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
  const [validateRole, setValidateRole] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={RegisterModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              REGISTER
            </Typography>{" "}
          </div>
          <div>
            {" "}
            <CloseIcon
              onClick={() => {
                setRegisterModal(false);
              }}
            />{" "}
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="First Name"
            variant="filled"
            onChange={(e) => {
              setnewUser({ ...newUser, fname: e.target.value });
            }}
            error={validateFname.error}
            helperText={validateFname.errorinfo}
            onKeyUp={(e) => {
              setValidateFname(validation("name", e.target.value));
            }}
          />
          <TextField
            label="Last Name"
            variant="filled"
            onChange={(e) => {
              setnewUser({ ...newUser, lname: e.target.value });
            }}
            error={validateLname.error}
            helperText={validateLname.errorinfo}
            onKeyUp={(e) => {
              setValidateLname(validation("name", e.target.value));
            }}
          />

          <TextField
            label="E-mail"
            variant="filled"
            onChange={(e) => {
              setnewUser({ ...newUser, email: e.target.value });
            }}
            error={validateEmail.error}
            helperText={validateEmail.errorinfo}
            onKeyUp={(e) => {
              setValidateEmail(validation("email", e.target.value));
            }}
          />
          <TextField
            label="Password"
            variant="filled"
            onChange={(e) => {
              setnewUser({ ...newUser, password: e.target.value });
            }}
            error={validatePassword.error}
            helperText={validatePassword.errorinfo}
            onKeyUp={(e) => {
              setValidatePassword(validation("password", e.target.value));
            }}
          />
          <TextField
            label="Role"
            variant="filled"
            onChange={(e) => {
              setnewUser({ ...newUser, role: e.target.value });
            }}
            error={validateRole.error}
            helperText={validateRole.errorinfo}
            onKeyUp={(e) => {
              setValidateRole(validation("name", e.target.value));
            }}
          />
        </Box>
        <Box marginLeft={"80%"}>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(fetchUserApi(newUser), setnewUser(initialUserValue));
            }}
          >
            SUBMIT
          </Button>
        </Box>{" "}
      </Box>
    </Modal>
  );
}

export default Register;
