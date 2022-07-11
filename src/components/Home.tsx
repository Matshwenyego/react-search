import React, { useState } from 'react';
import { TextField } from '@mui/material';
import List from "../components/List";
import "./Home.css";

const Home: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    setInputText(text);
  };

  return (
    <div className="home">
      <h1>Github Search</h1>
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
    </div>
  );
}

export default Home;