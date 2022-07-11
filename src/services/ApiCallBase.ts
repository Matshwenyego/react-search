import axios from 'axios';

const configs = {
  headers: {
    'Content-Type': 'application/json',
    //move to env file
    Authorization: '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',
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