import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

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

function Profilr() {
  let profileData = JSON.parse(localStorage.getItem("token"));
  // const data = useSelector((state) => state.UserReducers);
  let useageData = JSON.parse(localStorage.getItem(profileData.fname));
  console.log(useageData);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name:{profileData.fname} {profileData.lname}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Active Subscription:{useageData.length}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Profilr;
