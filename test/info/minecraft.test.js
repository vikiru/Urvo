const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Minotar API', () => {
	it('Should return valid Minecraft avatar image', async () => {
		const minecraftImage = `https://minotar.net/body/Steve/200.png`;

		chai
			.request(minecraftImage)
			.get('')
			.end((err, res) => {
				expect(res).to.have.status(200);
			});
	});
});
