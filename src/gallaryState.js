import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URI = "https://picsum.photos/v2/list";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list");
  const formattedResponse = await response.json();
  // console.log("FORMATTED", formattedResponse);
  return formattedResponse;
});

export const gallarySlice = createSlice({
  name: "gallary",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gallarySlice.reducer;
