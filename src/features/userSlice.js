import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  newUser: '',
  favorite: [],

}

export const getStoreItems = createAsyncThunk('products/getStoreItems', async (thunkAPI) => {
  try {

    const res = await axios.get();

    return [...res.data];

  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }

});


export const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log('Favorite Array from favoriteSlice', action.payload)
      state.favoriteArray.push(action.payload);

    },
  }, extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('NEW USER', action.payload)
      state.newUser = action.payload;
    })
    builder.addCase(postUser.rejected, (state) => {
      state.isLoading = false;
    })



  },

});


//---------------AXIOS CALL TO 'POST' UPDATE------------------//

export const postUser = createAsyncThunk(

  "type/postData",
  async (data) => {
    try {
      const config = {
        method: 'put',
        // baseURL: 'http://localhost:3080',
        baseURL: process.env.REACT_APP_HEROKU_URL,
        url: '/user',
        data: data,
      };
      let res = await axios(config);
      return res.data;
    } catch (err) {
      console.error(err)
      return data;
    }
  }
);

//   const res = await this.props.auth0.getIdTokenClaims();
//   const jwt = res.__raw;

//   const config = {
//     headers: { Authorization: `Bearer ${jwt}` },
//     method: 'POST',
//     baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
//     url: '/user',
//     data: this.props.auth0
//   };
//   const rest = await axios(config);
//   console.log('resPost', rest)
// };


export const { addToFavorites } = userSlice.actions;

export default userSlice.reducer;