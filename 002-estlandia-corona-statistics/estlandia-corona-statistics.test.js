const assert = require('assert');
const estlandiaCoronaStatistics = require('./estlandia-corona-statistics');

describe('estlandia-corona-statistics', () => {
	describe('.percentageSickPeople()', () => {
		it('returns percentage how many people in this country are sick', () => {
			const result = estlandiaCoronaStatistics.percentageSickPeople();

			assert.strictEqual(result, 5);
		});
	});
	describe('.numberOfRecoveredPeopleBornInThisMillenia()', () => {
		it('returns number of people born in this millenia recovered from corona', () => {
			const result = estlandiaCoronaStatistics.numberOfRecoveredPeopleBornInThisMillenia();

			assert.strictEqual(result, 696);
		});
	});
});
