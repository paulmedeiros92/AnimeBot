const { Command } = require('discord-akairo');

class ScheduleCommand extends Command {
    constructor() {
        super('schedule', {
           aliases: ['schedule', 'anime'] 
        });
    }

    exec(message) {
        return message.reply('This is the upcoming anime on such and such date');
    }
}

module.exports = ScheduleCommand;