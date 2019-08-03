import axios from 'axios';

const KEY ='AIzaSyDnYreIe6DUYMrS6cIH6wOYaRtKmBx_3gE';

export default axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults: 5,
            key: KEY
        }
    }
);
