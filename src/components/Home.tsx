import React, { useState } from 'react';
import { TextField } from '@mui/material';
import List from "../components/List";
import "./App.css";

const Home: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    setInputText(text);
  };

  return (
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