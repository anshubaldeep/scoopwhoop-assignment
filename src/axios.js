const Axios = require('axios');

const instance = Axios.create({
    baseURL:'https://www.scoopwhoop.com/api/v4/read/all/'
});


export default instance;