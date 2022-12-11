import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
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
    margin: '30px',
    borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

  },
  grid: {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
  }
}

export default function Aboutus() {

  return (
    <div>
      <Typography variant="h2" component="h2" align="center" fontWeight="bold" >About Us</Typography>
      <Grid container spacing={4} sx={styles.card} justify-content="center" >
        <Grid item xs={4}  >
          <Card sx={{ maxWidth: 400 }}>
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
            <IconButton aria-label="share">
              <GitHub />
            </IconButton>
            <IconButton aria-label="share">
              <Facebook />
            </IconButton>
            <IconButton aria-label="share">
              <LinkedIn />
            </IconButton>
          </Card>
        </Grid>
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 400 }}>
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
            <IconButton aria-label="share">
              <GitHub />
            </IconButton>
            <IconButton aria-label="share">
              <Facebook />
            </IconButton>
            <IconButton aria-label="share">
              <LinkedIn />
            </IconButton>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 400 }}>
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
            <IconButton aria-label="share">
              <GitHub />
            </IconButton>
            <IconButton aria-label="share">
              <Facebook />
            </IconButton>
            <IconButton aria-label="share">
              <LinkedIn />
            </IconButton>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 400 }}>
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
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton aria-label="share">
              <GitHub />
            </IconButton>
            <IconButton aria-label="share">
              <Facebook />
            </IconButton>
            <IconButton aria-label="share">
              <LinkedIn />
            </IconButton>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 400 }}>
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
                  Von is a software engineer and veteran who served in the United States Navy for 8 years. She then obtained her Master’s degree in Data Science and Interaction design. Von likes exploring, learning, and is excited to bring her skills into the tech industry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton aria-label="share">
              <GitHub />
            </IconButton>
            <IconButton aria-label="share">
              <Facebook />
            </IconButton>
            <IconButton aria-label="share">
              <LinkedIn />
            </IconButton>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
