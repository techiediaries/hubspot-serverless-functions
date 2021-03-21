const axios = require('axios');
const API_KEY = 'e58ac1ac429c4bcfb9fa7277cb7a4441';

exports.main = async ( _ , sendResponse) => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=techiediaries&from=2021-03-12&sortBy=popularity&apiKey=${API_KEY}`);
  console.log('Data received from the news API:', response.data);
    
  sendResponse({ body: { response: response.data }, statusCode: 200 });
};