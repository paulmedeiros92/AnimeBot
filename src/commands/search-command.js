const { Command } = require('discord-akairo');

class SearchCommand extends Command {
    constructor() {
        super('search', {
           aliases: ['search', 'lookup'] 
        });
    }

    exec(message) {
        return message.reply('A synopsis of the anime you looked up');
    }
}

module.exports = SearchCommand;