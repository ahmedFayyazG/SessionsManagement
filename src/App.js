import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./gallaryState";

import "./App.css";
import { getWordMeaning } from "./Redux/Dictionary/Dictionary";
import { Login } from "./Redux/Login/Login";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallary.photos);
  const words = useSelector((state) => state.dictionary.meaning);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState({ username: "", password: "" });
  // useEffect(() => {
  //   dispatch(getPhotos());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getWordMeaning());
  // }, [dispatch]);

  const onchangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const ClickHandler = (event) => {
    event.preventDefault();
    dispatch(Login(state));
    // dispatch(getWordMeaning(searchTerm));
    console.log("Clicked");
  };

  const handleInputChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };

  return (
    <div className="App">
      <h2>Dicktionary</h2>
      <form>
        <input
          placeholder="Please Enter the word..."
          onChange={(e) => {
            handleInputChange("username", e.target.value);
          }}
        />
        <input
          placeholder="Please Enter the Password..."
          onChange={(e) => {
            handleInputChange("password", e.target.value);
          }}
        />
        <button onClick={ClickHandler}>Search</button>
      </form>

      <h2>{words}</h2>
      <hr />
      <div className="gallary">
        {photos.map((photo) => {
          return (
            <img
              style={{ width: "400px", height: "400px", margin: "4px" }}
              src={photo.download_url}
              alt={photo.id}
              key={photo.id}
            />
          );
        })}
        <hr />
      </div>
    </div>
  );
}

export default App;
