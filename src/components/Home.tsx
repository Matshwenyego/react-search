import React, { useState } from 'react';
import { TextField } from '@mui/material';
import List from "../components/List";
import "./App.css";

const Home: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e: any) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (

    //header
    //text header
    //list (done)
    //loading state => show react logo
    <>
      <h1>GitHub Search</h1>
      <div className="search">
      <TextField
          id='outlined-basic'
          onChange={inputHandler}
          variant='outlined'
          fullWidth
          label='Search'
        />
      </div>
      <List input={inputText} />
    </>
  );
}

export default Home;