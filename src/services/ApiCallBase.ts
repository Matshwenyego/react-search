import axios from 'axios';

const configs = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${process.env.REACT_APP_AUTHORIZATION_KEY}`,
  },
};

async function get(url: string) {
    const response = axios.get(url, configs);
    try {
      const responseJson = await response;
      return responseJson.data;
    } catch (err: any) {      
        return err.response;
    }
  }

  export { get };