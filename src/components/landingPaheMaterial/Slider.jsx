import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "DEMON SLAYER",
    about:
      "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.",
    imgPath:
      "https://www.anmosugoi.com/wp-content/uploads/2020/07/Bleach-Brave-Souls.jpg",
    img2Path:
      "https://www.nicepng.com/png/detail/145-1456033_naruto-characters-naruto-shippuden.png",
  },
  {
    label: "BLEACH",
    about:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result. However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.",
    imgPath:
      "https://th.bing.com/th/id/R.904b0f8ee9afe1c0fd2b380fbc7d4cbd?rik=0MtnRRqMhrl6HQ&riu=http%3a%2f%2ffc05.deviantart.net%2ffs70%2ff%2f2010%2f022%2f0%2f7%2fBleach_Wallpapers_by_KuroKura.jpg&ehk=8eebGUWfDQ3BF7rZwH2Mi2t8xHwJ7tNWkEiqVplVppo%3d&risl=&pid=ImgRaw&r=0",

    img2Path: "./img/naruto.png",
  },
  {
    label: "NARUTO",
    about:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.",
    imgPath: "https://p9.storage.canalblog.com/93/12/1455787/110708626_o.jpg",
    img2Path: "./img/naruto.png",
  },
  {
    label: "ONE PUNCH MAN",
    about:
      "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.One day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.",
    imgPath:
      "https://1.bp.blogspot.com/-Vsfsf_J5fhs/XRJug-TPGmI/AAAAAAAABp4/uLxl44dO5Uceil9ppxsFRVq8txOqt3_PQCLcBGAs/s1600/one_punch_man-752x440.jpg",
    img2Path: "./img/naruto.png",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div id="Carousel">
      <Box
        sx={{
          position: "relative",
          flexGrow: 1,
          width: "90%",
          marginLeft: "5%",
          marginTop: 1,
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            marginRight: 30,
            bottom: "20%",
            zIndex: 1,
            backgroundColor: "transparent",
            position: "absolute",
            borderRadius: "50px",
            width: "900px",
            pl: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                alignContent: "start",
                mixBlendMode: "screen",
                backgroundColor: "white",
                fontSize: 80,
              }}
            >
              <Typography
                sx={{
                  alignContent: "start",

                  fontSize: 80,
                }}
              >
                {images[activeStep].label}
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                }}
              >
                {images[activeStep].about}
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                height: 300,
                width: 1800,
                display: "block",
                overflow: "hidden",
                zIndex: 1,
              }}
              src={images[activeStep].img2Path}
              alt={images[activeStep].label}
            />
          </Box>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    mixBlendMode: "inherit",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep} */}
        {/* nextButton={ */}
        <Button
        //       size="small"
        //       onClick={handleNext}
        //       disabled={activeStep === maxSteps - 1}
        //     >
        //       Next
        //       {theme.direction === "rtl" ? (
        //         <KeyboardArrowLeft />
        //       ) : (
        //         <KeyboardArrowRight />
        //       )}
        //     </Button>
        //   }
        // backButton={
        // <Button
        //   size="small"
        //   onClick={handleBack}
        //   disabled={activeStep === 0}
        // >
        //   {theme.direction === "rtl" ? (
        //     <KeyboardArrowRight />
        //   ) : (
        //     <KeyboardArrowLeft />
        //   )}
        //   Back
        // </Button>
        //}
        />
      </Box>
    </div>
  );
}

export default Slider;
