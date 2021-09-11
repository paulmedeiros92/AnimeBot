const { Listener } = require('discord-akairo');
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, query, where } = require('firebase/firestore/lite');


const firebaseConfig = {
  apiKey: "AIzaSyBO6KxdWW1iDA3J3iB3B8ztwmggzk7sBbM",
  authDomain: "animebot-64e6a.firebaseapp.com",
  projectId: "animebot-64e6a",
  storageBucket: "animebot-64e6a.appspot.com",
  messagingSenderId: "1092288496849",
  appId: "1:1092288496849:web:d22818bc1e67ac96c571f0",
  measurementId: "G-M6YBNFZ75C"
};

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const serversCol = collection(db, 'servers');
        getDocs(serversCol).then(servers => {
            servers.docs.forEach(async (doc) => {
                const server = doc.data();
                console.log(`SERVER::${server.serverSnowflake}`);
                console.log('SHOWS::');
                const q = await query(collection(db, 'shows'), where('serverSnowflake', '==', server.serverSnowflake));
                const serverShows = await getDocs(q);
                serverShows.forEach(doc => console.log(doc.data()));
            });
        });
    }
}

module.exports = ReadyListener;