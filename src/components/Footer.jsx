import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DownloadIcon from "@mui/icons-material/Download";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        mt: "5%",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        color: "whitesmoke",
      }}
    >
      <Box sx={{ alignSelf: "center" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: {
              xs: "none",
              sm: "block",
              fontFamily: "fantasy",
              fontSize: "60px",
            },
          }}
          onClick={() => {
            navigate("/landingPage");
          }}
        >
          SCREENBUCKET
        </Typography>
      </Box>
      <Box sx={{ my: "5%" }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Home"
              secondary="www.screenbucket.com"
              secondaryTypographyProps={{ color: "white" }}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Signup" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DownloadIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Downloads" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Typography align="left" variant="h5">
          Follow us :
        </Typography>
        <Box>
          <GoogleIcon sx={{ fontSize: "60px" }} />
          <TwitterIcon sx={{ fontSize: "60px" }} />
          <FacebookIcon sx={{ fontSize: "60px" }} />
          <InstagramIcon sx={{ fontSize: "60px" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
