import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Router from 'next/router';

const initialState = {
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login', userData, {
        headers: {
          "Content-Type": "application/json",
          apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message || 'Login failed');
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  'auth/fetchUserDetails',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', {
        headers: {
          "Content-Type": "application/json",
          apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('User Details:', response.data.data);
      return response.data.data;
    } catch (error) {
      toast.error('Failed to fetch user details');
      return rejectWithValue(error.response.data);
    }
  }
);


const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        toast.success('Login successful');
        // dispatch(fetchUserDetails(action.payload.token));
        
        const userRole = action.payload.role; // Assuming the role is returned in the response
        if (userRole === 'admin') {
          Router.push('/Dashboard/ListUser');
        } else {
          Router.push('/');
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
         // Assuming the role is returned in the response
      })
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;

