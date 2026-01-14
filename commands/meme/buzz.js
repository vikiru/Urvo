const { EmbedBuilder, SlashCommandBuilder, hyperlink } = require('discord.js');
const memeParser = require('../../utils/memeParser.js');

/**
 * Create an embed containing information about the Buzz Lightyear Meme
 * @param {*} interaction
 * @param {*} options
 * @returns An embed containing information about the Buzz Lightyear Meme
 */
function createEmbed(interaction, options) {
  const title = 'Buzz Lightyear Everywhere Meme';
  const description =
    'Here is your requested meme! \n\nGenerated via ' + hyperlink('Memegen.link', 'https://memegen.link/');

  const topText = options.topText;
  const bottomText = options.bottomText;
  const format = options.format;

  const image = `https://api.memegen.link/images/buzz/${topText}/${bottomText}${format}`;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const buzzEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(client.embedColour)
    .setTimestamp()
    .setImage(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

  return buzzEmbed;
}

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
  cooldown: 10,
  /**
   * Sends a Buzz Lightyear Everywhere with the specified text
   * @param {*} interaction
   */
  async execute(interaction) {
    const topText = memeParser.parseText(interaction.options.getString('top_text'));
    const bottomText = memeParser.parseText(interaction.options.getString('bottom_text'));
    const format = interaction.options.getString('format') ?? '.png';

    const options = { topText: topText, bottomText: bottomText, format: format };
    const buzzEmbed = createEmbed(interaction, options);
    interaction.reply({ embeds: [buzzEmbed] });
  },
};
