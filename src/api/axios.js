import * as Axios from 'axios';

const token = 'BQACsJhEghw03QSYbrxPA0KgDeqhjYaWL-bb6zU3MpYTrYv56PxMUc5KWgenAAge1qvv4Jof7M76WlZXIP8vDUF5WunndMKYJ2HPbvzf_abOf2JZYf7WEiDHx5LTJ1qJKrsQsmu7Q67yt4n5LCQWqleSFAPiwixglXdDqKpHa0-KoMpA5GU'

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