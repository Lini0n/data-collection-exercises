const assert = require('assert');
const fileSystem = require('../003-file-system/file-system');

describe('estlandia-corona-statistics', () => {
	describe('.getDirectoryTextFileNamesArray()', () => {
		it('returs all the text files in given directory', () => {
			const result = fileSystem.getDirectoryTextFileNamesArray();

			assert.deepStrictEqual(result, [
				'logs-2020.txt',
				'logs-2021.txt',
			]);
		});
	});

	describe('.getDirectoryTextFilesAllLogRows()', () => {
		it('returns unique corona statuses in alphaphetical order', () => {
			const result = fileSystem.getDirectoryTextFilesAllLogRowsArray();

			assert.deepStrictEqual(result, [
				'INFO: starting server',
				'INFO: server started',
				'INFO: api server closing',
				'INFO: api server closed',
			]);
		});
	});
});
