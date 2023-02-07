import { AlignHorizontalCenter } from "@mui/icons-material";
import {
  Button,
  colors,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import SubscriptionModel from "./SubscriptionModel";

function MyAccount() {
  const [mysubs, setMysubs] = useState(false);
  let token = JSON.parse(localStorage.getItem("token"));
  let ls = JSON.parse(localStorage.getItem(token.fname));
  const deleteSubscription = (index) => {
    ls.splice(index, 1);
    localStorage.setItem(token.fname, JSON.stringify(ls));
    setMysubs(!mysubs);
  };
  let isEmpty = true;
  if (ls.length > 0) {
    isEmpty = false;
  }
  return (
    <Box sx={{ backgroundColor: "black", Width: "100%" }}>
      <Box position={"sticky"} top={0} zIndex={3}>
        <LandingPage />
      </Box>
      <Table sx={{ backgroundColor: "white" }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>
              <Typography variant="h3">MY ACCOUNT</Typography>
              <Typography>&#11088; Member Since October 2011</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5}>
              <Typography>Your Profiles</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3}>
              <Typography>Membership & Billing</Typography>
            </TableCell>
            <TableCell align="center">E-mail</TableCell>
            <TableCell align="center">abc@xyz.com</TableCell>
            <TableCell colSpan={2} align="center">
              <Button variant="contained" color="error">
                Change
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">********</TableCell>
            <TableCell colSpan={2} align="center">
              <Button variant="contained" color="error">
                Change
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">XX-XXX-XXX-XX</TableCell>
            <TableCell colSpan={2} align="center">
              <Button variant="contained" color="error">
                Change
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Your Base Plan</TableCell>
            <TableCell align="center">
              <Typography sx={{ fontFamily: "fantasy", fontSize: "30px" }}>
                STANDARD
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography sx={{ fontFamily: "fantasy", fontSize: "30px" }}>
                HD
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography sx={{ fontFamily: "fantasy", fontSize: "30px" }}>
                PREMIUM HD
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{ border: "solid", borderColor: "red" }}
            >
              <Typography
                sx={{ fontFamily: "fantasy", fontSize: "30px", color: "gold" }}
              >
                GOLD
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Parental Control</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                variant="h4"
                sx={{ fontFamily: "fantasy", fontSize: "50px", color: "Red" }}
              >
                <span style={{ color: "black" }}> YOUR </span> SUBSCRIPTIONS
              </Typography>
            </TableCell>
            <TableCell colSpan={4} align="center">
              <SubscriptionModel setMysubs={setMysubs} mysubs={mysubs} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table sx={{ backgroundColor: "whitesmoke" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontFamily: "fantasy", fontSize: "25px" }}>
              Invoice Number
            </TableCell>
            <TableCell sx={{ fontFamily: "fantasy", fontSize: "25px" }}>
              Type
            </TableCell>
            <TableCell sx={{ fontFamily: "fantasy", fontSize: "25px" }}>
              Movie Name
            </TableCell>
            <TableCell sx={{ fontFamily: "fantasy", fontSize: "25px" }}>
              Plan
            </TableCell>
            <TableCell sx={{ fontFamily: "fantasy", fontSize: "25px" }}>
              Price
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "fantasy", fontSize: "25px" }}
            >
              OPTIONS
            </TableCell>
          </TableRow>
        </TableHead>
        {isEmpty && (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "cursive", color: "slategray" }}
                >
                  It feels a bit lonley here ..............
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
        {ls && (
          <TableBody>
            {ls.map((element, index) => (
              <TableRow key={index}>
                <TableCell>{element.invoiceNumber}</TableCell>
                <TableCell>{element.type}</TableCell>
                <TableCell>{element.name}</TableCell>
                <TableCell>{element.plan}</TableCell>
                <TableCell>{element.price}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      deleteSubscription(index);
                    }}
                  >
                    Unsubscribe
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <Footer />
    </Box>
  );
}

export default MyAccount;
