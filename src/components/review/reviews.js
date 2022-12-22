import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap';
import { styles } from './reviewStyle'
import PetsIcon from '@mui/icons-material/Pets';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import "./reviews.css";
import { reviewSlice } from '../../features/reviewSlice'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Box, Card, Stack, Typography, Button, Modal, Select, MenuItem, TextField } from '@mui/material';
import { addReview, reviewToBeUpdated } from '../../features/reviewSlice'

export default function ReviewTails(props) {
  const dispatch = useDispatch();
  // console.log('Props in REVIEW', props)
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const [reviews, setReview] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const reviewArray = useSelector(state => state.review.reviewArray);
  // console.log('UPDATED REVIEW IN STATE', reviewArray)

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
        return "Thank you for your rating!";
      case 5:
        return "What is your favorite thing about Happy Tails?";
      default:
        return "Comment here...";
    }
  };

  const deleteReview = (review) => {
    // console.log('deleteReview id', review);
    dispatch(reviewSlice.actions.deleteReview(review))
    handleDeleteReview(review._id)
  }

  const handleUpdateChange = (event) => {
    setNumber(event.target.value);


  };

  const onSave = (newReview) => {
    // console.log('review id', newReview._id);
    handleUpdateReview(newReview)
    setNumber('')
    setReview('')
    setOpen(false)
  }


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
      await axios(config);
      // console.log('Review from DB: ', reviewResponse.data);
    }
  };



  const handleDeleteReview = async (id) => {
    // console.log('WHAT ARE YOU', id)

    if (props.auth0.isAuthenticated) {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'delete',
        baseURL: process.env.REACT_APP_HEROKU_URL,
        url: `/review/${id}`,
      };

      await axios(config);


    }
  };

  const handleUpdateReview = async (updateReview) => {
    // console.log('passing update', updateReview)
    const newReview = {
      _id: updateReview._id,
      userName: updateReview.userName || props.user.nickName,
      email: updateReview.email,
      review: reviews,
      stars: number
    };
    // console.log('newReview', newReview)
    dispatch(reviewToBeUpdated(newReview))

    if (props.auth0.isAuthenticated) {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      // console.log('token: ', jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'put',
        baseURL: process.env.REACT_APP_HEROKU_URL,
        url: `/review/${newReview._id}`,
        data: newReview,
      };

      await axios(config);

      // console.log('UPDATED REVIEW!', rest.data);

    }

  };




  const { user } = props.auth0;
  const handleSubmit = (event) => {
    // console.log('OK??::', event.target.review.value);
    event.preventDefault();
    setReview('');
    const newReview = {
      userName: user.given_name,
      email: user.email,
      review: event.target.review.value,
      stars: number
    };
    // console.log('ALMOST!!::', newReview);
    dispatch(addReview(newReview))
    handleCreateReview(newReview);

  };







  let allReviews = [];

  if (reviewArray.length > 0) {

    allReviews = reviewArray.map(review => (
      <Card key={review.id} sx={styles.card}>
        <Box sx={styles.informationBox}>
          <Box sx={styles.nameBox}>
            <Typography sx={styles.textName}>
              Post From: {review.userName || review.nickname}
              <Box sx={styles.lineBreak} />
            </Typography>
          </Box>

          <Typography sx={styles.textGender}>
            Review: {review.review}
          </Typography>


          {review.stars === 0 ? (<SentimentVeryDissatisfiedRoundedIcon />
          ) : ('')}

          {review.stars === 1 ? (<AiFillStar style={{ color: "orange" }} />
          ) : ('')}

          {review.stars === 2 ? (
            <Box sx={{ display: 'flex' }}>
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
            </Box>
          ) : ('')}
          {review.stars === 3 ? (
            <Box sx={{ display: 'flex' }}>
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
            </Box>
          ) : ('')}
          {review.stars === 4 ? (
            <Box sx={{ display: 'flex' }}>
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
            </Box>
          ) : ('')}
          {review.stars === 5 ? (
            <Box sx={{ display: 'flex' }}>
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
              <AiFillStar style={{ color: "orange" }} />
            </Box>
          ) : ('')}


          {/* <Typography sx={styles.textGender}>
            Stars: {review.stars}
          </Typography> */}
          <Stack direction="row" spacing={2}>

            {review.email === user.email ? (
              <Box  >
                <Button sx={{ color: 'salmon' }} onClick={handleOpen}>Update</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"


                >
                  <Box sx={styles.modal} >
                    <Typography id='updateTitle' variant="h6" component="h2">
                      Update you review!
                    </Typography>
                    <TextField sx={styles.updateBody} onChange={(e) => setReview(e.target.value)} label='What would you like to say?'></TextField>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 7 }}>
                      <Box sx={{ marginRight: 1, fontWeight: 'bolder', color: 'black', fontSize: '18px' }}>Stars: </Box>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={number}
                        label="stars"
                        onChange={handleUpdateChange}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </Box>
                    <Button sx={styles.saveButton} onClick={() => { onSave(review) }}>Save</Button>
                  </Box>

                </Modal>

              </Box>
            ) : ('')}
            {review.email === user.email ? (<Button sx={styles.detailsButton} onClick={() => deleteReview(review)}>Delete</Button>)
              : ('')}

          </Stack>
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
          <PetsIcon sx={styles.logo} />
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
            <button onChange={(e) => { setReview(e.target.value) }} className={` ${!number && "disabled"} `}>Submit</button>
          </Form>
        </div>
        <Box sx={{ width: '40%', marginTop: 10 }}>
          <Card sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            <div id='reviewBox'>
              <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>
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

