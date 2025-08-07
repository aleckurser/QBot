const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Session will auto-save in ./auth/ folder
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot is ready!');
});

client.on('message', message => {
  const msg = message.body.toLowerCase();

  if (msg === 'menu') {
    message.reply(
      '*📋 Main Menu:*\n' +
      '1️⃣ - Get today’s quote\n' +
      '2️⃣ - Get current time\n' +
      '3️⃣ - About this bot\n\n' +
      '_Please reply with a number (1, 2, or 3)_'
    );
  } else if (msg === '1') {
    message.reply('🌟 "Success is not final; failure is not fatal: It is the courage to continue that counts." – Winston Churchill');
  } else if (msg === '2') {
    const now = new Date();
    message.reply(`🕒 Current time: ${now.toLocaleTimeString()}`);
  } else if (msg === '3') {
    message.reply('🤖 I am a simple menu bot built using whatsapp-web.js!');
  }
});

client.initialize();
