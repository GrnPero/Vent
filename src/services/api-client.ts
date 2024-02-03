import axios from 'axios';

export default axios.create({
    baseURL: 'https://chat-zxuidajwqa-uc.a.run.app',
    headers: {
        'Content-Type': 'application/json',
    },
});