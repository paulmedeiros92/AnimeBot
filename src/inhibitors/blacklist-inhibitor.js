const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
  constructor() {
    super('blacklist', {
        reason: 'blacklist'
    })
  }

  exec(message) {
    // This function should return true to block a message
    const blacklist = []; // ['283785573351686144'];
    return blacklist.includes(message.author.id);
  }
}

module.exports = BlacklistInhibitor;