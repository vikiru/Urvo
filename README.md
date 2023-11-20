<p align="center">
  <a href="https://github.com/vikiru/Urvo">
    <img src="/logo.png" alt="Urvo"/>
  </a>
</p>

<p align="center">
	<a href="https://github.com/vikiru/Urvo/blob/main/LICENSE">
		<img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License Badge"/>
	</a>
	<a href="https://vikiru.github.io/Urvo/">
		<img src="https://img.shields.io/badge/documentation-docs-orange" alt="Documentation"/>
	</a>
	<a href="https://github.com/prettier/prettier">
		<img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="Code Style - Prettier"/>
	</a>
</p>

<p align="center">
	<a href="https://github.com/vikiru/Urvo/releases">
		<img src="https://img.shields.io/github/v/release/vikiru/Urvo" alt="Release"/>
	</a>
	<a href="https://github.com/vikiru/Urvo/issues?q=is%3Aissue+is%3Aclosed">
		<img src="https://img.shields.io/github/issues-closed/vikiru/Urvo" alt="Closed Issues"/>
	</a>
	<a href="https://github.com/vikiru/Urvo/pulls?q=is%3Apr+is%3Aclosed">
		<img src="https://img.shields.io/github/issues-pr-closed/vikiru/Urvo?label=closed%20prs" alt="Closed PRs">
	</a>
</p>

---

<a href="">
	<img src="https://github.com/vikiru/Urvo/blob/docs/urvo-docs/public/utility/help.gif" alt="Urvo Help Command GIF">
</a>

**Urvo** is a versatile Discord bot that offers over 65 commands across 8 categories to enhance your Discord experience!

- **📷 [Images](https://vikiru.github.io/Urvo/commands/category-overview#-images)**: Enhance your mood with a random image of an animal from the available options or an image of coffee to boost your energy!
- **❓ [Information](https://vikiru.github.io/Urvo/commands/category-overview#-information)**: Whether you’re a fan of anime or manga, Digimon or Disney, or just curious about a term, you’ll find everything you need here!
- **😂 [Memes](https://vikiru.github.io/Urvo/commands/category-overview#-memes)**: Generate memes to enjoy with your friends, using easy prompts!
- **🕹️ [Minigames](https://vikiru.github.io/Urvo/commands/category-overview#%EF%B8%8F-minigames)**: The cure for boredom. Beat the bot and have a blast!
- **🛡️ [Moderation](https://vikiru.github.io/Urvo/commands/category-overview#%EF%B8%8F-moderation)**: Use these commands to manage the server effectively and efficiently!
- **🎲 [Random](https://vikiru.github.io/Urvo/commands/category-overview#-random)**: An assortment of commands that provide you with random pieces of information such as motivating you with a quote or making you laugh with a joke!
- **⚔️ [Troopica](https://vikiru.github.io/Urvo/commands/category-overview#%EF%B8%8F-troopica)**: Rise to the top of your server by amassing wealth and troops!
- **🛠️ [Utility](https://vikiru.github.io/Urvo/commands/category-overview#%EF%B8%8F-utility)**: Additional commands that can prove useful to yourself or the server!

<p align="justify">
	A comprehensive overview detailing all available commands can be located within the documentation under the <strong><a href="https://vikiru.github.io/Urvo/commands/category-overview">Category Overview</a></strong> section. Each command has a dedicated page detailing its usage, including optional parameters, cooldowns (if any), required user permissions, any associated external APIs, and finally, a demonstration of the command is also provided for clarity.
</p>

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [🏁 Getting Started](#-getting-started)
	- [📝 Prerequisites](#-prerequisites)
	- [⚡ Setup Instructions](#-setup-instructions)
- [🔍 Testing](#-testing)
- [✨ Acknowledgments](#-acknowledgments)
- [©️ License](#️-license)

## 🏁 Getting Started

### 📝 Prerequisites

Ensure that the following dependencies are installed onto your machine by following the [Setup Instructions](#-setup-instructions).

- [Node.js (v16.9.0+)](https://nodejs.org/en/download)
- [Sequelize (v6.32.0+)](https://sequelize.org/)
- [SQLite3 (v5.1.6+)](https://www.npmjs.com/package/sqlite3)
- [discord.js (v14.11.0)](https://discord.js.org/)

### ⚡ Setup Instructions

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

Upon completion of these steps, the Discord bot can be added to servers and all commands will be operational 🎉.

## 🔍 Testing

The comprehensive suite of tests for this project is housed within the **[test](./test/)** directory. These tests are primarily designed to verify the functionality and reliability of the external APIs.

The tests can be run with the following command:

```bash
npm test
```

## ✨ Acknowledgments

- [discord.js Documentation](https://old.discordjs.dev/#/docs/discord.js/14.11.0/general/welcome)
- [discord.js Guide](https://discordjs.guide/)
- [Docusaurus](https://docusaurus.io/)
- [Shields Badges](https://github.com/badges/shields)
- [Sequelize Documentation](https://sequelize.org/docs/v6/)

Additionally, the majority of the commands provided by this bot would not be possible without all of the various APIs that are being used, see **[API Reference](https://vikiru.github.io/Urvo/commands/api-references)**.

## ©️ License

The contents of this repository are licensed under the terms and conditions of the **[MIT](https://choosealicense.com/licenses/mit/)** license.

**[MIT](LICENSE)** © 2021-present Visakan Kirubakaran.
