import axios from 'axios';

const Axios = axios.create ({
  baseURL: 'https://socer.serveo.net',
  timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'},
});

export const POST = async (url, data) => await Axios.post (url, data).then(r=>console.log("R", r));

export const GET = url => Axios.get (url).then(r=>r.data);
