const { Command } = require('discord-akairo');
const Firebase = require("../firebase/firebase-service.js");

class AddCommand extends Command {
    constructor() {
        super('add', {
           aliases: ['add'],
           args: [
             {
               id: 'day',
               type: 'number',
               default: 0
             },
             {
               id: 'hour',
               type: 'number',
               default: 0,
             },
             {
               id: 'minute',
               type: 'number',
               default: 0,
             }
           ]
        });
    }

    exec(message, args) {
      const firebase = new Firebase();
      return firebase.channelAdd(message, args.day, args.hour, args.minute);
    }
}

module.exports = AddCommand;