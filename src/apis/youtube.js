import axios from 'axios';


const KEY = 'AIzaSyDeL3e2GZM0_HntCrYt_Cc2-vsXAD5aA2s';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  }
})