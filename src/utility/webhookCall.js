const axios = require('axios');
const querystring = require('qs');

const webhookCalls = async (Payload) => {
    try {
        const Headers = {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Accept': 'application/json',
        }
    
        const data = querystring.stringify({
            payload: JSON.stringify({text: Payload}), 
        });

        await axios.post(
        process.env.URL_RECEIVER,
        data,
        {
          headers: Headers,
        })
        .then(function (response) {
          console.log(`Sending webhook calls :: `, response.data);
        })
        .catch(function (error) {
          console.log(`Sending webhook calls :: `, error.message);
        });
    } catch (error) {
      console.log(`Webhook calls Error :: `, error.message);
    }
  }
  
  module.exports = {
    webhookCalls
}