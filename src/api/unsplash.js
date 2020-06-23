import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ys2fso8u9bI1GF8B5kPj9ScPl9cghidfe_j-8aYcCiw'
    }
});

