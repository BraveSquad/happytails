import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import { addToFavorites } from '../../features/favoriteSlice';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Image from '../../assets/images/paw.jpg';
import '../../assets/style/list.css';

export default function Animals(props) {

  // const [pageNumber, setPageNumber]
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 9;

  const { isLoading } = props.auth0;
  const dispatch = useDispatch();
  // const [updateFav, setUpdateFav] = useState([])
  const animals = useSelector(state => state.animals.apiAnimals);
  const favorites = useSelector(state => state.favorite.favoriteArray);

  const pagesVisited = pageNumber * itemsPerPage;

  function handleAddToFavorites(animal) {
    dispatch(addToFavorites(animal));

  };

  function handleDetail(animal) {
    dispatch(animalDetail(animal))
  };

  setTimeout(() => {
    handlePostFav()

  }, 2000)

  let handlePostFav = async () => {
    const res = await props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const updatedUser = {
      _id: props.user._id,
      userName: props.user.userName,
      email: props.user.email,
      picture: props.user.picture,
      favorite: favorites,
      isLoading: props.auth0.isLoading
    }
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'PUT',
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      url: `/fav/${updatedUser._id}`,
      data: updatedUser
    };
    const rest = await axios(config);
    console.log('USER CONFIG', rest.data);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  let animalArr = [];

  if (animals.length > 0) {
    animalArr = animals.slice(pagesVisited, pagesVisited + itemsPerPage).map(animal => (
      <Card key={animal.id} sx={styles.card}>
        {animal.primary_photo_cropped === null ? (
          <CardMedia image={Image} sx={styles.media} />
        ) : (<CardMedia image={animal.primary_photo_cropped.medium} sx={styles.media} />)}
        <Box sx={styles.informationBox}>
          <Box sx={styles.nameBox}>
            <Typography sx={styles.textName}>
              {animal.name}
              <Box sx={styles.lineBreak} />
            </Typography>
          </Box>
          <Typography sx={styles.textBreed}>
            {animal.breeds.primary}
          </Typography>
          <Typography sx={styles.textGender}>
            {animal.gender}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={styles.favoriteButton} value={animal} onClick={() => handleAddToFavorites(animal)}>Favorite</Button>
            <Button sx={styles.detailsButton} href='/details' onClick={() => handleDetail(animal)}>Details</Button>
          </Stack>
          {/* {favorites.map(x => { return x === animal ? <h4>Added to Favorites</h4> : ''})} */}
        </Box>
      </Card>
    ))
  }

  const pageCount = Math.ceil(animals.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.titleText}>
        Browse our Animals
      </Typography>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
      <Box sx={styles.animalCardWrapperBox}>
        {animalArr}
      </Box>
    </Box>
  )
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
    width: '45%',
    // border: '2px solid red',
  },
  lineBreak: {
    height: '2px',
    width: '90%',
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
    backgroundColor: '#70E1F5',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      color: 'black',
    }
  },
}
