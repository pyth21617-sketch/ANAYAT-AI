const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FuZDltQndkOVdOMlpNdXhKUXAwdm1YbW4vRnVEejEyekg5eUsvU08xTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjJ5T252QW1ZVHJFZ05nWkNreVYxSkE3eldWSFJLZ2NNMGFkUHY3SU1uZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTXVVZHNPVmRDQVNWc0lBOURSeU9UeFpxVmNIYkR6S05lVVhOK2QxUFhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NUdxbm5LbjF2Tk9PVHZWTXZKbC8yUStMU2FHZEFxekloWTllWW9VZHhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMNFgzL242V2JZc04rL2M2dnNtM3NJSHM2NFh1bUErZ290WWhtSXoyRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8wZXVKU3dYYnlwamcwYXdUV3BzR1VnT24xTnR0S1M5bS83RmtqMHBubXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU55K3RjeWVWcGY1eEQrK01YMncxVmN5d0dvRTc3bk1kTjZKaGpKaHduND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1N2UXF6eXV5UWRsUXVTY3E0cmVTRW9LL3VRYXArWHBiR0liam5wWndnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQzZDl4SzVlTnBhS1hhYUtDcWxNdzNaRTAvRG9rSmN1OFh4c2ovT2xLNmhWWGtGZ2doVWlxTXhmUVk0RXZRZ1BhK25ZVmE0VXNSa0xTZnA5bWt5bkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJ0K1pjMHJDL1ZYb25rQ2Vma3RVQkMzcDQrYVI1SHdwYnMxZ2duSWNmWTljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAwMTIwNTc0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzg3NDI4NTBGQUQ4NUMxREFERUU1NEY3OTkxRTY4MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2NTI2MzcyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvWTd5ajJ5Q1NqdXJiWW55U0FMT3FRIiwicGhvbmVJZCI6ImFiY2FhNjY3LWUyMDUtNGQ2ZC1hZDk3LTZjNWUzZjZmZTI4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZnZkcVlVRGNmd0U2Y0lkYWcyTTIwMFFEOGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia25HME84ZTBERU5mS0lEWk9lQkNpRnZBUEtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVCMjc2VzlNIiwibWUiOnsiaWQiOiI5MTcwMDEyMDU3NDc6MjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjM4ODMzMjc1OTQ1MDA6MjlAbGlkIiwibmFtZSI6IktsYXVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNnU5OU1CRUpXYnJNb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzamdKTUdYWENEQ2F0MlhjKzV1S1I2WTNTdGkzUEJYeVUvYThIVGY4MjFZPSIsImFjY291bnRTaWduYXR1cmUiOiJKc0lYbS9ldmZ6QnRVU3VxcHhCNG82NTJDeGxzZUxhRThuem5zbzUwaE51aExGV01CcXI3dVVSeXB5TXNTc3ROd1cxT3RpUE1UTTU1YXNmUGhxWFVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGE3bDYrRklVYmJZUWNYcERRc2liTTBNdmVUR3hEdFU4Z1RjZGcyQ1Fhb1hEQ3VVcWFLaVBuOFY3UFlVTjlXTnB5NEw1WFZFaXpaZmZCTkxEUG8rQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMDEyMDU3NDc6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDQ0Q1RCbDF3Z3dtcmRsM1B1YmlrZW1OMHJZdHp3VjhsUDJ2QjAzL050VyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2NTI2MzcxLCJsYXN0UHJvcEhhc2giOiI0WlJQNlMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpNYiJ9",
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
