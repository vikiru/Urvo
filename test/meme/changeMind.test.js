const memeParser = require('../../utils/memeParser');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Memegen.link API - Change My Mind Meme', () => {
	it('Should return valid meme image', async () => {
		const topText = memeParser.parseText('Tests are great!');
		const format = '.png';
		const memeImage = `https://api.memegen.link/images/cmm/${topText}${format}`;

		chai
			.request(memeImage)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
			});
	});
});
