import axios from 'axios';

export const apiHelper = async (method, url, body) => {
  const baseUrl = 'https://63da3a5fb28a3148f681bd6a.mockapi.io';

  try {
    const data = await axios[method](`${baseUrl}/${url}`, body);
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
};
