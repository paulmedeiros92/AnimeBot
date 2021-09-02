require('dotenv').config();
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

class MyClient extends AkairoClient {
  constructor() {
    super({
        ownerID: '123992700587343872', // not a real id
    }, {
        disableMentions: 'everyone',
        intents: ['GUILD_MESSAGES']
    });

    this.commandHandler = new CommandHandler(this, {
      directory: './src/commands/',
      prefix: '>_<',
      defaultCooldown: 1000,
    });

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: './src/inhibitors/',
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: './src/listeners/',
    })

    this.commandHandler.loadAll();
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      inhibitorHandler: this.inhibitorHandler,
      listenerHandler: this.listenerHandler,
    });
    this.inhibitorHandler.loadAll();
    this.listenerHandler.loadAll();
  }
}

const client = new MyClient();
client.login(process.env.TOKEN);