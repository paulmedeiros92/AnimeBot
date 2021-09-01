require('dotenv').config();
const { AkairoClient, CommandHandler } = require('discord-akairo');

class MyClient extends AkairoClient {
  constructor() {
    super({
        ownerID: '123992700587343872', // or ['123992700587343872', '86890631690977280']
    }, {
        disableMentions: 'everyone',
        intents: ['GUILD_MESSAGES']
    });
    this.commandHandler = new CommandHandler(this, {
      directory: './commands/',
      prefix: '<3',
    });
    this.commandHandler.loadAll();
  }
}

const client = new MyClient();
client.login(process.env.TOKEN);