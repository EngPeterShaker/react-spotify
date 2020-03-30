import * as Axios from 'axios';

const token = 'BQB5WdyQ47mMuFp1bmExW-cO_iZqGysqcXR6PloJbaPCr-_nvemM0P5V1KgYCMswK4WGbSJqNAEWzOgCKBeprW0eg7QvcPA9i-7aJUotdTzEt3WsQZorKOM4RfuT_Sf-5CHHYPo7kgXBjGHJEIGrbqARZDY52zPlCGuAwptlViJopE7BotU'

 const axios = Axios.create({
  timeout: 5000,
  headers: {'content-type': 'application/json'}
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.baseURL = 'https://api.spotify.com/v1/'
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});


export default axios;