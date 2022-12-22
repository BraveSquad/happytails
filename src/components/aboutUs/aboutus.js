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
  card: {
    // border: '3px solid black',
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
    // border: '3px solid pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '3px solid blue'
  }
}

export default function Aboutus() {

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={{ marginBottom: 5, marginTop: 2 }} variant="h2" component="h2" align="center" fontWeight="bold" >About Us</Typography>
      <Grid container spacing={4} sx={styles.card} justify-content="center" >
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
                <Typography variant="body2" color="text.secondary">
                  Tony is a software developer who wrote his first lines of code for his mySpace profile, which sparked a curiosity for coding. He’s a United States Coast Guard veteran and is bringing his electrician’s mate skills of maintenance, repair and management of sophisticated equipment into the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton aria-label="https://github.com/Edward-Regalado">
                <GitHub />
              </IconButton>
              <IconButton aria-label="https://www.linkedin.com/in/edward-regalado/">
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
                <Typography variant="body2" color="text.secondary">
                  Sarah is a software developer who is excited to join the tech industry with over 10 years of experience in customer service. She is looking forward to learning something new every day.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton aria-label="https://github.com/SarahTek">
                <GitHub />
              </IconButton>
              <IconButton aria-label="https://www.linkedin.com/in/sarah-t-31658b190/">
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
                <Typography variant="body2" color="text.secondary">
                  Danny’s was a musician before becoming a software developer, and loves applying music with his critical thinking skills, and is eager to bring a broad perspective to coding.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton aria-label="https://github.com/Dcastro99">
                <GitHub />
              </IconButton>
              <IconButton aria-label="https://www.linkedin.com/in/dcastro99/">
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
                <Typography variant="body2" color="text.secondary">
                  Software Developer specializing in JavaScript with a background in finances and customer service for more than 12 years. Becoming a software developer means I get to challenge myself in new ways, I am passionate about representing the underrepresented, As a Latina, I want to showcase my skills and bridge the gap between communities of color and the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton aria-label="https://github.com/Marthaquinram">
                <GitHub />
              </IconButton>
              <IconButton aria-label="https://www.linkedin.com/in/martha-quintanilla-ramirez/">
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
                <Typography variant="body2" color="text.secondary">
                Von is a software engineer and veteran who has served in the United States Navy. She obtained her Master’s degree in Data Science and Interaction Design and enrolled in coding bootcamps. Von enjoy’s exploring, learning, and is excited to further implement her skills in the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={styles.cardButtons}>
              <IconButton aria-label="https://github.com/ArzuVon">
                <GitHub  />
              </IconButton>
              <IconButton aria-label="https://www.linkedin.com/in/vonarzu'">
                <LinkedIn />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
