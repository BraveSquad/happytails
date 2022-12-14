import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, TextField, CardContent, Button } from "@mui/material";
import dog from "../../assets/images/dog.jpg";


const styles = {
  card: {
    margin: '30px',
    borderRadius: '7px', alignItems: 'center', display: "flex", justifyContent: "center",
    // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

  },
  grid: {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
  },
  position: {
    float: "right",
    fontSize: 20,
    fontWeight: 540
  },
  position2: {
    fontSize: 20,
    fontWeight: 600,
  },
  cardStyle: {
    // height: '600px',
    // width: '600px',
    borderRadius: '4px',
    justifyContent: 'center',
    alignItems: 'center',
  }
}


export default function inquiry() {

  return (
    <div>
      <Grid  >
        <Typography variant="h3" component="h2" align="center" fontWeight="bold">Details</Typography>
        <Grid container spacing={1} sx={styles.card} justify-content="center" >
          <Grid item xs={0}  >
            <Card >
              <CardActionArea>
                <CardMedia
                  sx={styles.cardStyle}
                  component="img"
                  image={dog}
                  alt="Tony's Image"
                />
              </CardActionArea>
            </Card>
            <Card sx={{ borderRadius: 7, marginTop: 3 }} >
              <CardContent >
                <Grid container spacing={1} >
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2} > Breed </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} > Golden Retriever </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2} > Age </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} >3 </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2} > Color </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} > Brown </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2} > Size/Weight </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} > 10 lbs</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2} > Sex </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} > Male </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid >
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }} sx={styles.grid}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="adress" placeholder="Adress" label="Adress" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={5} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
