const { EmbedBuilder, SlashCommandBuilder, quote, Client } = require('discord.js');

const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kermit')
        .setDescription('Send a Mocking Spongebob meme with your desired text')
        .addStringOption((option) =>
            option.setName('top_text').setDescription('Text that appears on the top').setRequired(true),
        )
        .addStringOption((option) =>
            option.setName('bottom_text').setDescription('Text that appears on the bottom').setRequired(true),
        ),
    guildOnly: true,
    /**
     * Sends a Mocking Spongebob Meme with the specified text
     * @param {*} interaction
     */
    async execute(interaction) {
        const topText = interaction.options.getString('top_text');
        const bottomText = interaction.options.getString('bottom_text');

        const spongebobEmbed = new EmbedBuilder()
            .setTitle('Mocking Spongebob Meme')
            .setDescription(`Here is your requested meme! \n\n[Generated via Memegen.link](https://memegen.link/)`)
            .setColor('#b35843')
            .setTimestamp()
            .setImage(`https://api.memegen.link/images/spongebob/${topText}/${bottomText}`)
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [spongebobEmbed] });
    },
};