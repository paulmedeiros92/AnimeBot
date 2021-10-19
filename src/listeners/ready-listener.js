const Firebase = require("../firebase/firebase-service.js");
const { Listener } = require('discord-akairo');
const cron = require('node-cron');

class ReadyListener extends Listener {
  constructor() {
    super('ready', {
      emitter: 'client',
      event: 'ready'
    });
  }

  exec() {
    const firebase = new Firebase()
    firebase.getShows(['pingpongDingDong']);
    // cron.schedule('0 10 * * 5', () => {
    //   targetChannels.forEach((channel) => {
    //     message.sendLineup(channel);
    //   });
    //   scriptServices.pythonScript(SLURPERPATH);
    // });
    // cron.schedule('55 19 * * 5', () => {
    //   logger.info('Announce Broadcast.');
    //   targetChannels.forEach((channel) => {
    //     message.announceBroadcast(channel);
    //   });
    // });
    // cron.schedule('0 10 * * 6', () => {
    //   logger.info('New LineUp Message');
    //   const promises = [
    //     sqlite.incEpisodes('1'),
    //     sqlite.updateShow(['Mystery Show', 1, 1, 'Special']),
    //   ];
    //   Promise.all(promises)
    //     .then(() => {
    //       targetChannels.forEach((channel) => {
    //         message.sendLineup(channel);
    //       });
    //     });
    //   });
  }
}

module.exports = ReadyListener;