// // use the axios : npm install axios

// const axios = require('axios');
// const express = require('express');
// const app = express();
// const port = 3000;

// const apiurl = 'https://jsonplaceholder.typicode.com/posts';

// let data = null; // Declare data outside the callback

// axios.get(apiurl).then(response => {
//    data = response.data; // Assign the fetched data
//    app.listen(port, () => {
//     console.error('Error fetching data:', error.message, error.response ? error.response.data : 'No response data');
//    });
// }).catch(error => {
//     console.error('Error fetching data:', error);
// });

const axios = require('axios');
const apiurl = 'https://jsonplaceholder.typicode.com/posts';

const fetchdata = async () => {
    try {
        const response = await axios.get(apiurl);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error.message, error.response ? error.response.data : 'No response data');
        throw error; // Re-throw the error for further handling if needed
    }
}
fetchdata()