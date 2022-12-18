import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap';
import "./reviews.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Box, Card, Stack, Typography, Button, TextField } from '@mui/material';

export default function ReviewTails(props) {
  console.log('Props in REVIEW', props)
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const [reviews, setReview] = useState('');
  console.log('STARS::', number);

  const reviewArray = useSelector(state => state.review.reviewArray);


  const handleText = () => {
    // console.log('NUMBER::', number);
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Very Dissatisfied";
      case 2:
        return "Dissatisfied";
      case 3:
        return "Neutral";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "Thank you for your rating. How can Happy Tails improve?";
      case 5:
        return "What is your favorite thing about Happy Tails?";
      default:
        return "Comment here...";
    }
  };



  const handleCreateReview = async (newReview) => {
    if (props.auth0.isAuthenticated) {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;


      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'POST',
        baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
        url: '/review',
        data: newReview
      };

      const reviewResponse = await axios(config);

      console.log('Review from DB: ', reviewResponse.data);
    }
  };
  const { user } = props.auth0;
  const handleSubmit = (event) => {
    console.log('OK??::', event.target.review.value);
    event.preventDefault();
    setReview('');
    const newReview = {
      userName: user.given_name,
      email: user.email,
      review: event.target.review.value,
      stars: number
    };
    console.log('ALMOST!!::', newReview);
    handleCreateReview(newReview);

  };

  let allReviews = [];

  if (reviewArray.length > 0) {

    allReviews = reviewArray.map(review => (
      <Card key={review.id} sx={styles.card}>
        <Box sx={styles.informationBox}>
          <Box sx={styles.nameBox}>
            <Typography sx={styles.textName}>
              Name: {review.userName}
              <Box sx={styles.lineBreak} />
            </Typography>
          </Box>
          <Typography sx={styles.textBreed}>
            Email: {review.email}
          </Typography>
          <Typography sx={styles.textGender}>
            My Review: {review.review}
          </Typography>
          <Typography sx={styles.textGender}>
            Stars: {review.stars}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={styles.favoriteButton} value={review} >Update</Button>
            <Button sx={styles.detailsButton}  >Delete</Button>
          </Stack>
          {/* {favorites.map(x => { return x === animal ? <h4>Added to Favorites</h4> : ''})} */}
        </Box>
      </Card>
    ))
  }



  return (
    <div className="review">
      <div className="position">

        <div className="content">

          <div className="tail">
            <h1 id='Title'>Happy Tails Reviews</h1>
          </div>
          <div>
            <h1 >{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <Form className='reviewFrom' onSubmit={(e) => { handleSubmit(e) }}>
            <Form.Group className="mb-3" controlId="review">
              <Form.Control

                className='reviewTextBox'
                type='text'
                value={reviews}
                onChange={(e) => { setReview(e.target.value) }}
                placeholder={handlePlaceHolder()} />
            </Form.Group>
            <button type='submit' onChange={(e) => { setReview(e.target.value) }} className={` ${!number && "disabled"} `}>Submit</button>
          </Form>
        </div>
        <Box sx={{ width: '40%', marginTop: 10 }}>
          <Card sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            <div id='reviewBox'>
              <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                Reviews
              </Typography>
              <div id='line-3' >
                <hr />
              </div>
              <div id='simpleCartBox'>
                {allReviews}
              </div>
            </div>

          </Card>
        </Box>
      </div>

    </div >
  );
}

const styles = {
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  animalCardWrapperBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  titleText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '3rem'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '20px',
    padding: '15px',
    borderRadius: '7px',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2);',
    maxWidth: '20%',
    minWidth: '400px',

  },
  media: {
    height: '200px',
    minWidth: '200px',
    borderRadius: '4px',
  },
  informationBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '200px',
    width: '100%',
    // border: '2px solid red',
  },
  lineBreak: {
    height: '2px',
    width: '100%',
    backgroundColor: '#676767',
    borderRadius: '20px'
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  textName: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  textBreed: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  },
  textGender: {
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  favoriteButton: {
    backgroundColor: '#676767',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: '	#FF0000',
      // color: 'black',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
  },
  detailsButton: {
    // border: '1px solid black',
    backgroundColor: '#1ee8c0',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      color: 'black',
    }
  },
}

