const assert = require('assert');
const fileSystem = require('../003-file-system/file-system');

describe('estlandia-corona-statistics', () => {
	describe('.getDirectoryTextFileNamesArray()', () => {
		it('returs all the text files in given directory', (done) => {
			fileSystem.getDirectoryTextFileNamesArray((err, result) => {
				assert.strictEqual(err, null);
				assert.deepStrictEqual(result, [
					'logs-2020.txt',
					'logs-2021.txt',
				]);

				return done();
			});
		});
	});

	describe('.getDirectoryTextFilesAllLogRows()', () => {
		it('returns unique corona statuses in alphaphetical order', (done) => {
			fileSystem.getDirectoryTextFilesAllLogRowsArray((err, result) => {
				assert.strictEqual(err, null);
				assert.deepStrictEqual(result, [
					'INFO: starting server',
					'INFO: server started',
					'INFO: api server closing',
					'INFO: api server closed',
				]);

				return done();
			});
		});
	});
});
