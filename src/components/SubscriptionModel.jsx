import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InputLabel, MenuItem, Radio, Select, TextField } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addSubscription } from "../actions/action";
import { useDispatch } from "react-redux";
import validation from "./validation";
const style = {
  position: "absolute",

  // transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const initialvalues = {
  invoiceNumber: "",
  type: "",
  name: "",
  plan: "",
  price: 0,
};

function SubscriptionModel({ setMysubs, mysubs }) {
  const [open, setOpen] = useState(false);
  const [validateMname, setValidateMname] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });
  const [validatePrice, setValidatePrice] = useState({
    error: false,
    errorinfo: "",
    finalsubmit: true,
  });
  const handleOpen = () => {
    setOpen(true);
    setSubscriptionData({
      ...subscriptionData,
      invoiceNumber: Math.round(Math.random() * 1000000000),
    });
  };
  const dispatch = useDispatch();
  const [subscriptionData, setSubscriptionData] = useState({
    invoiceNumber: "",
    type: "",
    name: "",
    plan: "",
    price: 0,
  });

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpen}
        sx={{ fontFamily: "fantasy", fontSize: "25px", color: "black" }}
      >
        {" "}
        ADD SUBSCRIPTION
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <CloseTwoToneIcon
              fontSize="large"
              onClick={() => {
                setOpen(false);
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ADD SUBSCRIPTION....
            </Typography>
            <Typography>
              Invoice Number :{subscriptionData.invoiceNumber}
            </Typography>
          </Box>
          <Box>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="Movie"
              >
                <FormControlLabel
                  value="Movie"
                  control={<Radio />}
                  label="Movie"
                  onClick={(e) => {
                    setSubscriptionData({
                      ...subscriptionData,
                      type: e.target.value,
                    });
                  }}
                />
                <FormControlLabel
                  value="Series"
                  control={<Radio />}
                  label="Series"
                  onClick={(e) => {
                    setSubscriptionData({
                      ...subscriptionData,
                      type: e.target.value,
                    });
                  }}
                />
              </RadioGroup>
            </FormControl>
            <Box>
              <TextField
                label={`${subscriptionData.type} Name`}
                onChange={(e) => {
                  setSubscriptionData({
                    ...subscriptionData,
                    name: e.target.value,
                  });
                }}
                error={validateMname.error}
                helperText={validateMname.errorinfo}
                onKeyUp={(e) => {
                  setValidateMname(validation("movie", e.target.value));
                }}
              />
              <Typography> Plan</Typography>

              <Select
                value={subscriptionData.plan}
                defaultValue="Monthly"
                onChange={(e) => {
                  setSubscriptionData({
                    ...subscriptionData,
                    plan: e.target.value,
                  });
                }}
              >
                <MenuItem value={"Monthly"}>Monthly</MenuItem>
                <MenuItem value={"Quarterly"}>Quarterly</MenuItem>
                <MenuItem value={"Annual"}>Annual</MenuItem>
              </Select>

              <Typography>Bill Details</Typography>
              <TextField
                label={"Item Price"}
                type="number"
                sx={{ display: "block" }}
                onChange={(e) => {
                  setSubscriptionData({
                    ...subscriptionData,
                    price: e.target.value,
                  });
                }}
                error={validatePrice.error}
                helperText={validatePrice.errorinfo}
                onKeyUp={(e) => {
                  setValidatePrice(validation("price", e.target.value));
                }}
              />
              <Typography>Coupon</Typography>

              <TextField
                label="Apply Coupon"
                onChange={(e) => {
                  setSubscriptionData({
                    ...subscriptionData,
                    name: e.target.value,
                  });
                }}
              />
              <Button sx={{ display: "Block" }}>Apply</Button>
              <hr />
              <Typography>Total:{subscriptionData.price}</Typography>
              <Button
                sx={{ float: "right" }}
                onClick={() => {
                  if (validation("Miscellaneous", subscriptionData)) {
                    addSubscription(subscriptionData, setMysubs, mysubs);
                    setOpen(false);
                    setSubscriptionData(...initialvalues);
                  }
                }}
              >
                Add Subscription
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default SubscriptionModel;
