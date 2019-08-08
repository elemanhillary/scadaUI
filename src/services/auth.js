import axios from 'axios';

export const loginUser = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return fetch('https://scadabackend.herokuapp.com/scada/signin', options)
    .then(response => response.json());
};

export const signUpUser = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return fetch('https://scadabackend.herokuapp.com/scada/signup', options)
    .then(response => response.json());
};

export const uploadImage = (image) => {
  const formData = new FormData();
  formData.append('image', image);
  console.log(...formData);
  const ret = axios.post('https://scadabackend.herokuapp.com/scada/upload', formData);
  return ret;
};
