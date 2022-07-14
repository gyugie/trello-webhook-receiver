const { webhookCalls } = require('../utility/webhookCall');

const eventUpdateCard = async (payload) => {
    try {
        console.log(":: eventUpdateCard :: ", payload);
        const model = payload.model;
        const action = payload.action;
        const data = action.data;
        const display = action.display;
        const card = data.card;
        if(display.translationKey != 'action_move_card_from_list_to_list') return false;
     
        const messages = `--- Board ${model.name} - Event Card Moving --- \n\nCard : ${card.name}\nFrom : ${display.entities.listBefore.text} >>> ${display.entities.listAfter.text}\nBy : ${display.entities.memberCreator.text}\nLink : https://trello.com/c/${card.shortLink}\n\n`;
        
        webhookCalls(messages);

        console.log(":: messages :: ", messages);
    } catch (error) {
        console.log(":: eventUpdateCard :: ", error.message);
    }
}

const eventCommentCard = async (payload) => {
    try {
        console.log(":: eventCommentCard :: ", payload);
        const model = payload.model;
        const action = payload.action;
        const data = action.data;
        const display = action.display;
        const card = data.card;
        if(display.translationKey != 'action_comment_on_card') return false;
 
        const messages = `--- Board ${model.name} - Event Card Comment --- \n\nCard : ${card.name}\nComment : ${display.entities.comment.text}\nBy : ${display.entities.memberCreator.text}\nLink : https://trello.com/c/${card.shortLink}\n\n`;

        webhookCalls(messages);

        console.log(":: messages :: ", messages);
    } catch (error) {
        console.log(":: eventCommentCard :: ", error.message);
    }
}

module.exports = {
    eventUpdateCard,
    eventCommentCard
}