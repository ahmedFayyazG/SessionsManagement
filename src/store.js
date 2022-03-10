import { configureStore } from "@reduxjs/toolkit";
import gallaryReducer from "./gallaryState";
import DictionaryReducer from "./Redux/Dictionary/Dictionary";
const store = configureStore({
  reducer: {
    gallary: gallaryReducer,
    dictionary: DictionaryReducer,
  },
});

export default store;
