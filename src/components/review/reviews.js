import React, { useState } from 'react'
import axios from 'axios';
import { Form, Card } from 'react-bootstrap';
import "./reviews.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TextField } from "@mui/material"


export default function ReviewTails(props) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const [reviews, setReview] = useState('');
  console.log('STARS::', number);


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

      // leave this console here in order to grab your token for backend testing in Thunder Client

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
  // const { user } = props.auth0;
  const handleSubmit = (event) => {
    console.log('OK??::', event.target.review.value);
    event.preventDefault();
    setReview('');
    const newReview = {
      // username: user.name,
      review: event.target.review.value,
      star: number
    };
    console.log('ALMOST!!::', newReview);
    handleCreateReview(newReview);

  };

  return (
    <div className="review">
      <div className="position">
        <div className="content">
          <div className="tail">
            {/* <img
              style={{ width: 60, height: 60, objectFit: "cover" }}
              // src="https://www.pexels.com/photo/person-waking-on-hill-554609/"
              src={image}
              alt="Trail Pic"
            /> */}
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
            <Card>
              <TextField fullWidth label="fullWidth" id="fullWidth" />
            </Card>
            <button type='submit' onChange={(e) => { setReview(e.target.value) }} className={` ${!number && "disabled"} `}>Submit</button>
          </Form>

        </div>
      </div>
    </div >
  );
}


// import ReviewList from './reviewList';
// import React, { useState } from "react";
// import EachReview from './eachReview'
// import CreateReview from './CreateReview';



// export default function Reviews() {
//   //passing dummy data to test CRUD for reviews will refactor after
//   const [reviews, setReviews] = useState(ReviewList);

//   function deleteReview(id) {
//     //if the if is not equal to the id in item then return only those reviews
//     setReviews(reviews.filter((item) => { return id !== item.id }))


//   }


//   function addReview(review) {
//     setReviews([review, ...reviews])
//   }

//   return (
//     <>
//       <CreateReview handleCreateReview={addReview} />

//       {
//         reviews.length > 0 ? reviews.map((item, index) => {
//           return <EachReview reviews={item} key={index} handleDelete={() => deleteReview(item.id)} />
//         }) : 'No Reivew'
//       }
//     </>
//   )
// }
