function findMissing(arr1, arr2) {
	if (arr1.length === 0 || arr2.length === 0 || arr1.length === arr2.length) {
		return 0;
	}

	var missing;

	arr1.forEach(function(num) {
		if (arr2.indexOf(num) === -1) {
			missing = num;
		}
	});

	if (missing !== undefined) return missing;

	arr2.forEach(function(num) {
		if (arr1.indexOf(num) === -1) {
			missing = num;
		}
	});

	return missing;
}

module.exports = findMissing;