/**
 * Iterate through all the MAL search results to find entries that match the specified title and type
 * @param {*} data
 * @param {*} title
 * @param {*} type
 * @returns A filtered array of MAL search results that match the specified title and type
 */
function findEntry(data, title, type) {
	const indexes = [];
	for (const element of data) {
		const entryType = element.type;
		if (entryType === type) {
			const titles = element.titles.map((titleEntry) => titleEntry.title.toLowerCase());
			const titleMatchExists = titles.findIndex(
				(titleEntry) => titleEntry.toLowerCase() === title || titleEntry.toLowerCase().includes(title),
			);
			const titleIncluded = titles.includes(title.toLowerCase());
			if (titleMatchExists || titleIncluded) {
				indexes.push(element);
			}
		}
	}
	let sortedIndexes = indexes.slice().sort((a, b) => a.year - b.year);
	sortedIndexes = sortedIndexes.slice(0, 9);
	return sortedIndexes;
}

module.exports.findEntry = findEntry;
