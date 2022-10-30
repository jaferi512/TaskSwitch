import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import apiConfig from '../../api/apiConfig';

export const getUsers = createAsyncThunk('users', async name => {
  try {
    const response = await apiConfig.get(
      '/?name=' + name,
    );
    if (response.status === 200) {
      return {
        error: '',
        filteredUsers: response.data,
      };
    } else {
      return {data: undefined, error: response.statusText};
    }
  } catch (err) {
    return {token: '', error: err.message};
  }
});

const initialState = {
  loading: false,
  filteredUsers: {},
};

export const mainReducer = createSlice({
  name: 'main',
  initialState,
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      // Add user to the state array
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = '';
        state.filteredUsers = action.payload.filteredUsers;
      }
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.pending, state => {
      // Add user to the state array
      state.error = '';
      state.loading = true;
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
    });
  },
});
export default mainReducer.reducer;
