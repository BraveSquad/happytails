
export const styles = {
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
    borderRadius: '20px',
    marginTop: 1
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
    fontSize: '1.2rem',

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
  saveButton: {
    backgroundColor: '#1ee8c0',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      color: '#1ee8c0',
    },
    width: '30%',
    marginTop: 1
  },
  menuBoxLink: {
    color: 'white', "& button:focus": { color: "#3b3b3b" },
    "& button:active": { color: "black" }, "&:hover ": {
      "background-color": 'white', color: 'black'
    },

    padding: 1,
    marginBottom: 2,
    marginTop: 2,
    backgroundColor: '#1ee8c0',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '14px',
    width: 100,
    height: 35
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
  },
  updateBody: {
    marginTop: 1,
    marginBottom: 1,
    width: '100%'
  },
  logo: {
    fontSize: '3rem',
    color: 'grey'
  },

}

