import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";

function Tiles() {
  return (
    <Box
      id={"Cards"}
      display={"flex"}
      justifyContent={"space-evenly"}
      marginTop="70px"
      mx={6}
    >
      <Card
        sx={{
          flex: 1,
          mx: 2,
          boxShadow: "-16px -17px 14px -6px rgba(0,0,0,0.38)",
          transition: 3,
          "&:hover": { flex: 2, zIndex: 1, transition: 3 },
        }}
      >
        <CardHeader
          title="Demon Slayer"
          sx={{ paddingBottom: "0px" }}
          variant="h1"
        />
        <Typography marginLeft="20px" color="text.secondary">
          (Kimetsu no Yaiba)
        </Typography>

        <CardMedia
          component="img"
          height="800"
          image="https://th.bing.com/th/id/OIP.azd2uDvLdKlAQ8CByK3BowHaQD?pid=ImgDet&rs=1"
          alt="Demon Slayer"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Genre:
          </Typography>
          <Typography variant="body2" color="secondary">
            Action, Adventure, Drama, Fantasy, Shounen, Super Power,
            Supernatural, Demons
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          flex: 1,
          mx: 2,
          boxShadow: "-16px -17px 14px -6px rgba(0,0,0,0.38)",
          transition: 3,
          "&:hover": { flex: 2 },
        }}
      >
        <CardHeader title="Naruto" sx={{ paddingBottom: "0px" }} variant="h1" />
        <Typography marginLeft="20px" color="text.secondary">
          (Naruto)
        </Typography>

        <CardMedia
          component="img"
          height="800"
          image="https://th.bing.com/th/id/R.7e2f36deef18215a1fa3e81f77193663?rik=18SG2TL0%2fma7Rg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2ff%2fe%2f118735.jpg&ehk=n%2fL4ioJUUV8Uzti09NcBt%2f4NYRzdlEAU6yjqiYtO2L0%3d&risl=&pid=ImgRaw&r=0"
          alt="Naruto"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Genre:
          </Typography>
          <Typography variant="body2" color="secondary">
            Action, Adventure, Drama, Fantasy, Shounen, Super Power,
            Supernatural, Demons
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          flex: 1,
          mx: 2,
          boxShadow: "-16px -17px 14px -6px rgba(0,0,0,0.38)",
          transition: 3,
          "&:hover": { flex: 2 },
        }}
      >
        <CardHeader title="Bleach" sx={{ paddingBottom: "0px" }} variant="h1" />
        <Typography marginLeft="20px" color="text.secondary">
          (Bleach)
        </Typography>

        <CardMedia
          component="img"
          sx={{ zIndex: 1 }}
          height="800"
          image="https://i.pinimg.com/originals/83/57/3b/83573b44349c706e933f32672cc65a9a.jpg"
          alt="Bleach"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Genre:
          </Typography>
          <Typography variant="body2" color="secondary">
            Action, Adventure, Drama, Fantasy, Shounen, Super Power,
            Supernatural, Demons
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          flex: 1,
          mx: 2,
          boxShadow: "-16px -17px 14px -6px rgba(0,0,0,0.38)",
          transition: 3,
          "&:hover": { flex: 2 },
        }}
      >
        <CardHeader
          title="One Punch Man"
          sx={{ paddingBottom: "0px" }}
          variant="h1"
        />
        <Typography marginLeft="20px" color="text.secondary">
          (One Punch Man)
        </Typography>

        <CardMedia
          component="img"
          height="800"
          image="https://i.pinimg.com/originals/a7/8f/41/a78f415a8d299058e3a45998fe93d63c.jpg"
          alt="One Punch Man"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Genre:
          </Typography>
          <Typography variant="body2" color="secondary">
            Action, Adventure, Drama, Fantasy, Shounen, Super Power,
            Supernatural, Demons
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Tiles;
