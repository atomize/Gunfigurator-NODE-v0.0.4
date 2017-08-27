# Gunfigurator-nodejs
A self-hosted version of Gunfigurator that allows for real-time editing of the Gunbot 4.0.5 configuration file from a web browser via NodeJS and ExpressJS.

Instructions:

REQUIREMENTS: Node JS (Win/Mac/Linux)

Unzip the Gunfigurator-NODE.zip file IN YOUR GUNBOT FOLDER (required)

A folder will be created called Gunfigurator-NODE

In a terminal, navigate to to the newly created Gunfigurator-NODE folder.

Run node app.js  [or use your preference of node process manager, like pm2)

Navigate to http://VPSIP_or_LOCALHOSTIFYOURUNGUNBOTONYOURPC:3000 [i.e http://173.111.111.45:3000 if you run GB on a remote server (obvs use YOUR ip) or http://localhost:3000 if you run Gunbot on your home computer]

If you extracted it to the right place, it will automatically load your config.js, check the tabs for you exchange(s) used... makes changes... click GENERATE! Check Gunbot output for config change notification.

