const assert = require('assert');
const countryPopulation = require('./country-population');

describe('country-population', () => {
	describe('.indiaPopulationInYear1990()', () => {
		it('returns Indias population in year 1990', () => {
			const result = countryPopulation.indiaPopulationInYear1990();

			assert.strictEqual(result, 873277798);
		});
	});

	describe('.howManyMoreMillionPeopleLivedIndiaVsUsIn2010()', () => {
		it('in India live that many more people live ', () => {
			const result = countryPopulation.howManyMoreMillionPeopleLivedIndiaVsUsIn2010();

			assert.strictEqual(result, 925);
		});
	});
});
