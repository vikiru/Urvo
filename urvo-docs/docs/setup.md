---
slug: /setup
id: setup
title: ⚡ Setup Instructions
---

## ⚡ Setup Instructions

1. Clone this repository to your local machine.

```bash
git clone https://github.com/vikiru/Urvo.git
cd Urvo
```

2. Download & install all dependencies.

```bash
npm install
```

3. Setup your `config.json` file with the required values.

```json
{
"token": "your-token-goes-here",
"clientId": "your-client-id-here",
"DB_USER": "your-user-here",
"DB_PASS": "your-pass-here"
}
```

`token`: This is the token for your Discord bot, retrievable upon the creation of a new application via the [Discord Developer Portal](https://discord.com/developers/docs/intro).

`clientId`: This is the ID associated with your Discord bot, also accessible via the [Discord Developer Portal](https://discord.com/developers/docs/intro) post-application creation.

`DB_USER`: This is the username utilized when connecting to the SQLite Database for all 'Troopica' commands. This can be customized as per your preference.

`DB_PASS`: This is the password used when connecting to the SQLite Database for all 'Troopica' commands. This can be set to any secure string.

4. Deploy all commands, binding them to the Discord Bot application you've created previously.

```bash
npm run deploy
```

5. Ensure functionality of 'Troopica' commands by initializing the SQLite database.

```bash
node initializeDatabase.js
```

Upon completion of these steps, the Discord bot can be added to servers and all commands will be operational 🎉
