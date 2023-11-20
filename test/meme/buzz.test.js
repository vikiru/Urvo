const memeParser = require('../../utils/memeParser');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Memegen.link API - Buzz Lightyear Meme', () => {
	it('Should return valid meme image', async () => {
		const topText = memeParser.parseText('Tests!');
		const bottomText = memeParser.parseText('Tests everywhere!');
		const format = '.png';
		const memeImage = `https://api.memegen.link/images/buzz/${topText}/${bottomText}${format}`;

		chai
			.request(memeImage)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
			});
	});
});
