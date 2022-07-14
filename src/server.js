const express = require("express");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const app = express()
const port = process.env.PORT || 3000;
const { 
    eventUpdateCard,
    eventCommentCard 
} 
= require('./trello/index');

app.get('/api/webooks/receiver/e57832e3-b1d0-4be7-aa9e-52e77002c9c3', jsonParser, async (req, res) => {
    res.send({status: true})
})

app.post('/api/webooks/receiver/e57832e3-b1d0-4be7-aa9e-52e77002c9c3', jsonParser, async (req, res) => {
    try {
        const bodyRequest = req.body;
        switch (bodyRequest.action.type) {
            case "updateCard":
                eventUpdateCard(bodyRequest)
                break;
            case "commentCard":
                eventCommentCard(bodyRequest)
                break;
            default:
                break;
        }
       res.send({status: true})
    } catch (error) {
        res.send({status: false, message: error.message})
    }    
})

app.get('/', (req, res) => {
    res.send({message: "webhook receiver from trello"})
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});