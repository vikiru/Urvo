---
slug: /setup
id: setup
title: ⚡ Setup Instructions
---

## ⚡ Setup Instructions

> 1. Clone this repository to your local machine.

```bash
git clone https://github.com/vikiru/Urvo.git
```

> 2. Download & install all dependencies.

```bash
npm install
```

> 3. Setup your `config.json` file with the required values

```json
{
	"token": "your-token-goes-here",
	"clientId": "your-client-id-here",
	"DB_USER": "your-user-here",
	"DB_PASS": "your-pass-here"
}
```

`token`: This is your Discord bot token, which can be found upon creating a new application via the [Discord Developer Portal](https://discord.com/developers/docs/intro).

`clientId`: This is the id associated with your Discord bot, which can additionally be found via the [Discord Developer Portal](https://discord.com/developers/docs/intro) once your application has been created.

`DB_USER`: This is the username that will be used when connecting to the SQLite Database for all 'Troopica' commands, this can be set to anything such as 'username'.

`DB_PASS`: This is the password that will be used when connecting to the SQLite Database for all 'Troopica' commands, this can be set to anything.
