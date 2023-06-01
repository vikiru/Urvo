const { EmbedBuilder, SlashCommandBuilder, quote, Client } = require('discord.js');

const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buzz_lightyear')
        .setDescription('Send a Buzz Lightyear Everywhere meme with your desired text')
        .addStringOption((option) =>
            option.setName('top_text').setDescription('Text that appears on the top').setRequired(true),
        )
        .addStringOption((option) =>
            option.setName('bottom_text').setDescription('Text that appears on the bottom').setRequired(true),
        )
        .addStringOption((option) =>
            option
            .setName('format')
            .setDescription('The format of the meme')
            .addChoices({ name: 'PNG', value: '.png' }, { name: 'GIF', value: '.gif' }),
        ),
    guildOnly: true,
    /**
     * Sends a Buzz Lightyear Everywhere with the specified text
     * @param {*} interaction
     */
    async execute(interaction) {
        const topText = interaction.options.getString('top_text');
        const bottomText = interaction.options.getString('bottom_text');
        const format = interaction.options.getString('format');

        const buzzEmbed = new EmbedBuilder()
            .setTitle('Buzz Lightyear Everywhere Meme')
            .setDescription(`Here is your requested meme! \n\n[Generated via Memegen.link](https://memegen.link/)`)
            .setColor('#b35843')
            .setTimestamp()
            .setImage(`https://api.memegen.link/images/buzz/${topText}/${bottomText}${format}`)
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [buzzEmbed] });
    },
};