import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import AboutUs from "./landingPaheMaterial/AboutUs";
import Slider from "./landingPaheMaterial/Slider";
import Tiles from "./landingPaheMaterial/Tiles";

function Landing2() {
  return (
    <Box
      sx={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp4805654.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box position={"sticky"} top="0px" zIndex={4}>
        <LandingPage />
      </Box>
      <Slider />
      <AboutUs />
      <Tiles />
      <Footer />
    </Box>
  );
}

export default Landing2;
