const { Command } = require('discord-akairo');

class UpdateCommand extends Command {
    constructor() {
        super('update', {
           aliases: ['update', 'edit'] 
        });
    }

    exec(message) {
        return message.reply('These are the anime you edited');
    }
}

module.exports = UpdateCommand;