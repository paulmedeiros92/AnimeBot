const { initializeApp } = require("firebase/app");
const { 
  getFirestore, collection, doc, getDoc, getDocs, setDoc, query, where 
} = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: "AIzaSyBO6KxdWW1iDA3J3iB3B8ztwmggzk7sBbM",
  authDomain: "animebot-64e6a.firebaseapp.com",
  projectId: "animebot-64e6a",
  storageBucket: "animebot-64e6a.appspot.com",
  messagingSenderId: "1092288496849",
  appId: "1:1092288496849:web:d22818bc1e67ac96c571f0",
  measurementId: "G-M6YBNFZ75C"
};

class Firebase {
  constructor() {
    this.db = getFirestore(initializeApp(firebaseConfig));
  }

  channelAdd(message, day, hour, minute) {
    const docRef = doc(this.db, 'channels', message.channel.id);
    setDoc(docRef, {id: message.channel.id, name: message.channel.name, day, hour, minute})
      .then(() => message.reply(`${message.channel.name} was successfully added/updated`))
      .catch(() => message.reply("something went wrong adding your channel"));
  }

  getShows(servers) {
    servers.forEach(async (server) => {
      console.log('SHOWS::');
      const q = await query(collection(this.db, 'shows'), where('serverSnowflake', '==', server));
      const serverShows = await getDocs(q);
      serverShows.forEach(doc => console.log(doc.data()));
    });
  }
}

module.exports = Firebase;