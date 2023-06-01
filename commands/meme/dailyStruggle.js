const { EmbedBuilder, SlashCommandBuilder, quote, Client } = require('discord.js');

const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily_struggle')
        .setDescription('Send a Daily Struggle meme with your desired text')
        .addStringOption((option) =>
            option.setName('left_button_text').setDescription('Text that appears on the left button').setRequired(true),
        )
        .addStringOption((option) =>
            option.setName('right_button_text').setDescription('Text that appears on the right button').setRequired(true),
        ),
    guildOnly: true,
    /**
     * Sends a Philosoraptor meme with the specified text
     * @param {*} interaction
     */
    async execute(interaction) {
        const leftButton = interaction.options.getString('left_button_text');
        const rightButton = interaction.options.getString('right_button_text');

        const raptorEmbed = new EmbedBuilder()
            .setTitle('Daily Struggle Meme')
            .setDescription(`Here is your requested meme! \n\n[Generated via Memegen.link](https://memegen.link/)`)
            .setColor('#b35843')
            .setTimestamp()
            .setImage(`https://api.memegen.link/images/ds/${leftButton}/${rightButton}`)
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [raptorEmbed] });
    },
};