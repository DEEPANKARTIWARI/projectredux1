import React from "react";
import { Box, Typography } from "@mui/material";

function AboutUs() {
  window.onload = function () {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      console.log(value);
      if (value >= 520 && value <= 1200) {
        let value2 = value - 520;
        img1.style.right = value2 * -1.5 + "px";
        img2.style.left = value2 * -1.5 + "px";
        if (value >= 584 && value <= 1000) {
          img3.style.top = value * 1.01 + "px";
        }
        img4.style.right = value2 * 0.5 + "px";
        img5.style.right = value2 * -0.5 + "px";
      }
    });
  };

  return (
    <>
      <Box display={"flex"} width="100%">
        <Box
          sx={{
            m: "10%",
            backgroundColor: "gainsboro",
            borderRadius: 8,
            marginTop: "10.5%",
          }}
          px={"11%"}
          zIndex={2}
        >
          <Typography variant="h2">About Us</Typography>
          <Typography variant="subtitle1" mt={1}>
            ScreenBucket is a free Entairtainment website where millions visit
            to watch anime online. ScreenBucket provides users with various
            genres including Action, Comedy, Drama, Historical, Romance,
            Supernatural, etc. This is the perfect place to expand the
            imagination as well as spread beautiful images of friendship,
            family, teammates, magic, etc. ScreenBucket is committed to keeping
            you updated with the latest releases and providing excellent
            streaming capabilities for the best experience possible.
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            Watch the best Anime from the comfort of your living room, no
            restrictions on how much you can watch. ScreenBucket is free
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            Thousands of anime episodes now streaming for free on AnimeHeaven.
            Start watching instantly.
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            ScreenBucket - user friendly and secure site with SSL certificate by
            CloudFlare Inc!
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            Offering a premium viewing experience AnimeSeason needs attention.
            There is nearly no advertisement while anime series are nicely
            arranged within categories. Famous series they have are One Piece,
            Hunter X Hunter, and Naruto. You can download whatever you want from
            ScreenBucket as long as they can be found. You can watch anime
            online and download (only on XServer) them from Google Drive to your
            local files.
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            Disclaimer: This site (ScreenBucket) does not store any files on its
            server. All contents are provided by non-affiliated third parties.
          </Typography>
        </Box>
        <div
          style={{
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "end",
            zIndex: 3,
          }}
          id={"img1"}
        >
          <img src="images\img1.png" />
        </div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "start",
            zIndex: 3,
          }}
          id={"img2"}
        >
          <img src="images\img2.png" />
        </div>
        <Box
          width={"100%"}
          position="absolute"
          display={"flex"}
          justifyContent="center"
          id={"img3"}
          zIndex={1}
        >
          <img src="images\img3.png" width={"15%"} height={"15%"} />
        </Box>
        <Box
          width={"100%"}
          position="absolute"
          display={"flex"}
          justifyContent="start"
          id={"img4"}
          marginTop={"19%"}
          zIndex={3}
        >
          <img src="images\img4.png" width={"15%"} height={"18%"} />
        </Box>
        <Box
          width={"100%"}
          position="absolute"
          display={"flex"}
          justifyContent="end"
          id={"img5"}
          marginTop={"15%"}
          zIndex={3}
        >
          <img src="images\img5.png" width={"18%"} height={"20%"} />
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
