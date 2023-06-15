function parseText(text) {
	const textReplacement = {
		' ': '_',
		'_': '__',
		'-': '--',
		'?': '~q',
		'&': '~a',
		'%': '~p',
		'#': '~h',
		'/': '~s',
		'\\': '~b',
		'<': '~l',
		'>': '~g',
		'"': "''",
	};
	let resultingText = text.replace(/[_ ?#!%/\\<>"]/gm, (char) => textReplacement[char] ?? char);
	if (!text.toLowerCase().includes('null')) {
		resultingText = resultingText.replace(/[null]*\s^/gim, '');
	}
	return resultingText;
}

module.exports.parseText = parseText;
