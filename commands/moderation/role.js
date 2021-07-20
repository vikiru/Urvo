module.exports = {
	name: 'role',
	description: 'Creates a new role based on inputted name and colour',
	args: true,
	usage: '<role name> <colour>',
	guildOnly: true,
	execute(message, args) {
		const roleName = args[0];
		const colour = args[1];

		var hexColor = '';

		switch (colour.toLowerCase()) {
			case 'aqua':
				var hexColor = '#1ABC9C';
				break;
			case 'black':
				var hexColor = '#23272A';
				break;
			case 'blue':
				var hexColor = '#3498DB';
				break;
			case 'green':
				var hexColor = '#57F287';
				break;
			case 'purple':
				var hexColor = '#9B59B6';
				break;
			case 'orange':
				var hexColor = '#E67E22';
				break;
			case 'red':
				var hexColor = '#E74C3C';
				break;
			case 'yellow':
				var hexColor = '#FFFF00';
				break;
			case 'white':
				var hexColor = '#FFFFFF';
				break;
		}

		if (hexColor === '') hexColor = '#000000';

		message.guild.roles.create({ data: { name: roleName, color: hexColor } });
		message.channel.send('The role, ' + '`' + roleName + '`' + ' has been created!');
	},
};
