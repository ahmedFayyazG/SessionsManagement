import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URI = "https://api.dictionaryapi.dev/api/v2/entries/en/Gate";

export const getWordMeaning = createAsyncThunk(
  "wordMeaning",
  async (object) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${object}`
    );
    const formatedResponse = await response.json();
    console.log(
      "Dictinary Data",
      formatedResponse[1].meanings[0].definitions[1].definition
    );
    const mazeedFormatted =
      formatedResponse[1].meanings[0].definitions[1].definition;
    return mazeedFormatted;
  }
);

export const DicSlice = createSlice({
  name: "dictionary",
  initialState: {
    meaning: "",
    isLoading: false,
  },

  extraReducers: {
    [getWordMeaning.pending]: (state) => {
      state.isLoading = true;
    },
    [getWordMeaning.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.meaning = action.payload;
    },
    [getWordMeaning.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default DicSlice.reducer;
