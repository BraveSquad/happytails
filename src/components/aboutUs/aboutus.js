import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { CardActionArea, Grid } from "@mui/material";
import sarah from "../../assets/images/Sarah.jpg"
import Martha from "../../assets/images/Martha.jpg"
import Von from "../../assets/images/Von.jpg"
import Tony from "../../assets/images/Tony.jpg"
import Danny from "../../assets/images/Danny.jpg"


const styles = {
  mainGrid: {
    // border: '3px solid black',//BLACK
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    width: '90%'
  },
  grid: {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 2
  },
  gridEach: {
    // border: '3px solid pink',//PINK
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2
  },
  mainBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    // border: '3px solid blue'//BLUE
  },
  cardtext: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    height: '140px',
    // border: '3px solid green'
  },
  title: {
    marginBottom: 5,
    marginTop: 4,
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold'
  }
}

export default function Aboutus() {

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.title} component="h2"  >About Us</Typography>
      <Grid container sx={styles.mainGrid} justify-content="center" >
        <Grid item xs={4} sx={styles.gridEach} >
          <Card sx={{ maxWidth: 400 }} elevation={10}>
            <CardActionArea>
              <CardMedia
                sx={{ height: '400px', width: '400px', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', }}
                component="img"
                height="200"
                image={Tony}
                alt="Tony's Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tony
                </Typography>
                <Typography sx={styles.cardtext} variant="body2" color="text.secondary">
                  Tony is a software developer who wrote his first lines of code for his mySpace profile, which sparked a curiosity for coding. He’s a United States Coast Guard veteran and is bringing his electrician’s mate skills of maintenance, repair and management of sophisticated equipment into the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton href="https://github.com/Edward-Regalado" target='_blank'>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/edward-regalado/" target='_blank'>
                <LinkedIn />
              </IconButton>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sx={styles.gridEach}>
          <Card sx={{ maxWidth: 400 }} elevation={10}>
            <CardActionArea>
              <CardMedia
                sx={{ height: '400px', width: '400px', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', }}
                component="img"
                height="200"
                image={sarah}
                alt="Sarah's Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sarah
                </Typography>
                <Typography sx={styles.cardtext} variant="body2" color="text.secondary">
                  Sarah is a software developer who is excited to join the tech industry with over 10 years of experience in customer service. She is looking forward to learning something new every day.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton href="https://github.com/SarahTek" target='_blank'>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/sarah-t-31658b190/" target='_blank'>
                <LinkedIn />
              </IconButton>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sx={styles.gridEach}>
          <Card sx={{ maxWidth: 400, }} elevation={10}>
            <CardActionArea>
              <CardMedia
                sx={{ height: '400px', width: '400px', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', }}
                component="img"
                height="200"
                image={Danny}
                alt="DAnny's image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Danny
                </Typography>
                <Typography sx={styles.cardtext} variant="body2" color="text.secondary">
                  As a musician turned software developer, Danny leverages his artistic and technical skills to bring a multidimensional approach to his coding endeavors. With a deep appreciation for the power of music to inspire critical thinking, Danny is eager to infuse his work with a breadth of perspective and creativity.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton href="https://github.com/Dcastro99" target='_blank'>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/dcastro99/" target='_blank'>
                <LinkedIn />
              </IconButton>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sx={styles.gridEach}>
          <Card sx={{ maxWidth: 400 }} elevation={10}>
            <CardActionArea>
              <CardMedia
                sx={{ height: '400px', width: '400px', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', }}
                component="img"
                height="200"
                image={Martha}
                alt="Martha's image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Martha
                </Typography>
                <Typography sx={styles.cardtext} variant="body2" color="text.secondary">
                  Software Developer specializing in JavaScript with a background in finances and customer service for more than 12 years. Becoming a software developer means I get to challenge myself in new ways, I am passionate about representing the underrepresented, As a Latina, I want to showcase my skills and bridge the gap between communities of color and the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton href="https://github.com/Marthaquinram" target='_blank'>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/martha-quintanilla-ramirez/" target='_blank'>
                <LinkedIn />
              </IconButton>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sx={styles.gridEach}>
          <Card sx={{ maxWidth: 400 }} elevation={10}>
            <CardActionArea>
              <CardMedia
                sx={{ height: '400px', width: '400px', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', }}
                component="img"
                height="200"
                image={Von}
                alt="Von's image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Von
                </Typography>
                <Typography sx={styles.cardtext} variant="body2" color="text.secondary">
                  Von is a software engineer and veteran who has served in the United States Navy. She obtained her Master’s degree in Data Science and Interaction Design and enrolled in coding bootcamps. Von enjoy’s exploring, learning, and is excited to further implement her skills in the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton href="https://github.com/ArzuVon" target='_blank'>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/vonarzu" target='_blank'>
                <LinkedIn />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box >
  );
}
