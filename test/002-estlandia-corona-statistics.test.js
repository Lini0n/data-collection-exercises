const assert = require('assert');
const estlandiaCoronaStatistics = require('../002-estlandia-corona-statistics/estlandia-corona-statistics');

describe('estlandia-corona-statistics', () => {
	describe('.allCoronaStatusesInAlpapheticalOrder()', () => {
		it('returns unique corona statuses in alphaphetical order', () => {
			const result = estlandiaCoronaStatistics.allCoronaStatusesInAlpapheticalOrder();

			assert.deepStrictEqual(result, [
				'no',
				'recovered',
				'sick',
			]);
		});
	});

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

	describe('.mostPopularLastName()', () => {
		it('returns most popular last name', () => {
			const result = estlandiaCoronaStatistics.mostPopularLastName();

			assert.strictEqual(result, 'Howell');
		});
	});

	describe('.mostPopularEmailProviderDomain()', () => {
		it('returns most popular email provider domain', () => {
			const result = estlandiaCoronaStatistics.mostPopularEmailProviderDomain();

			assert.strictEqual(result, 'yahoo.com');
		});
	});

	describe('.maleNameHavingMostPopularLastNameAndMaleFirstName()', () => {
		it('returns most popular male first name plus last domain', () => {
			const result = estlandiaCoronaStatistics.mostPopularEmailProviderDomain();

			assert.strictEqual(result, 'Ronnie Howell');
		});
	});
});
