---
title: ⚡ Setup Instructions
description: Step-by-step guide to set up and deploy the Urvo Discord bot.
---

1. Clone this repository to your local machine.

```bash
git clone https://github.com/vikiru/Urvo.git
cd Urvo
```

2. Download & install all dependencies.

```bash
pnpm install
```

3. Setup your `.env` file with the required values.

```txt
TOKEN=your-token-goes-here
CLIENT_ID=your-client-id-here
DB_USER=your-user-here
DB_PASS=your-pass-here
```

`TOKEN`: This is the token for your Discord bot, retrievable upon the creation of a new application via the [Discord Developer Portal](https://discord.com/developers/docs/intro).

`CLIENT_ID`: This is the ID associated with your Discord bot, also accessible via the [Discord Developer Portal](https://discord.com/developers/docs/intro) post-application creation.

`DB_USER`: This is the username utilized when connecting to the SQLite Database for all 'Troopica' commands. This can be customized as per your preference.

`DB_PASS`: This is the password used when connecting to the SQLite Database for all 'Troopica' commands. This can be set to any secure string.

4. Deploy all commands, binding them to the Discord Bot application you've created previously.

```bash
pnpm run deploy
```

5. Ensure functionality of 'Troopica' commands by initializing the SQLite database.

```bash
pnpm init-db
```

Upon completion of these steps, the Discord bot can be added to servers and all commands will be operational 🎉
