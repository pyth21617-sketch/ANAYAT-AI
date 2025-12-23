const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUc1Ni9kd0ozMytRdS9zY2lLR3Y4YWdLWkpWeU9MMDVpYWh0SWh3MjRXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VaOVJQS1JQNHpKSmN2RExCQjg4NDg0ZUxIdWJseWxxYS85M2RzWVduYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQUdXQld0WmxmNkxQK21KVXJVc241SGF0aFF2dHpheU9VZnJuQVpwMlY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCeTZEc2NmVFIvQ3pGNzNBVHI2ZHROOUxUQnlQMXJMa1FWckZCdTlHZEhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ObjFxb0RROEQrTG5GL3FOU3puWXVPdmNCSUl5RGxYaHFQRHpMaUN5VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxUVHpJRWJWVGR2WmNESENxQ3A0TkJTdDY3Z24rZEpHc0l1QkNKdkRJd0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBpZWlRQ2ppMlNVMmF5VkYrQUNwc2FzOTdDa1U4NW1vMitZRDkrUnkzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVpjeHM4MzYrQ1A5QXhLSWp4Nm85RDVCUmw2M0JsYjZyRHdCZk9VbDExbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZseWVoMEdMNGhuU2twS2d1QVFxY3hic2s1Zm1kWGNkTTFaaEgrSXFvS3RFZlRRVi9VVThnQThZSzA5WlFiK3B4cHRMMyswczhuenFtRjAwY2w2V2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJjamNCRHk3ZDF1WThaaisyWmRFeFJzYXROZUtpNitoYUhNQXV2UmdETzRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAwMTIwNTc0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzZFRTI0RjZCRkY0NDkzOTlBQUNFREYwNEI1NTRENSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2NTAzNDU2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxR09NZThOalM4NnZPclM2NV83QXRnIiwicGhvbmVJZCI6ImUwNzYzMTQ0LThkNjUtNGFkYi04ZWMyLTEzYTg1ODdlODk2OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUXY1aUlGbnJaOHJqdVlXZXA0M1ptdzdJWmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlNJTC9BdXRiU2RhemoxaGQxNnN3Yjl6YUZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY5NFhSSFpEIiwibWUiOnsiaWQiOiI5MTcwMDEyMDU3NDc6MjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjM4ODMzMjc1OTQ1MDA6MjRAbGlkIiwibmFtZSI6IktsYXVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbXU5OU1CRUpMb3Fzb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzamdKTUdYWENEQ2F0MlhjKzV1S1I2WTNTdGkzUEJYeVUvYThIVGY4MjFZPSIsImFjY291bnRTaWduYXR1cmUiOiJ2Qzd6Z05iN0lqWVNTLzJiVS9reENYNnNUcUcxbXZFMDlGejM0b2pJRDFsQ0pPZ25pNWpDR2p3ZUcwejQ0Q0gwdXZHT0RmNXRjTjZ3Q2NlTXRIUkNDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVIvVXhWaHJia2M2VkdsSGN3eXlaSHMxT0t4bkhvVTEzbE1TYUNhZWZBMnJnalJlc0lkWnJWVmRXMGFaZHl5UDZTRTljY0dtenF4MjcvS1pEOVFZanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMDEyMDU3NDc6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDQ0Q1RCbDF3Z3dtcmRsM1B1YmlrZW1OMHJZdHp3VjhsUDJ2QjAzL050VyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2NTAzNDU0LCJsYXN0UHJvcEhhc2giOiI0WlJQNlMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU54cyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
