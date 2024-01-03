describe('Info Category API Tests', () => {
	require('./digimon.test');
	require('./disney.test');
	require('./guessUser.test');

	describe('JikanAPI', () => {
		require('./anime.test');
		setTimeout(() => {
			return;
		}, 1000);

		require('./manga.test');
		setTimeout(() => {
			return;
		}, 1000);
		require('./manhua.test');
		setTimeout(() => {
			return;
		}, 1000);

		require('./manhwa.test');
		setTimeout(() => {
			return;
		}, 1000);

		require('./topAnime.test');
		setTimeout(() => {
			return;
		}, 1000);

		require('./topManga.test');
	});

	require('./minecraft.test');
	require('./urban.test');
});
