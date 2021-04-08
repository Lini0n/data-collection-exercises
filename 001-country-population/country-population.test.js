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
		it('returns a number how many millions of less people lived in Usa vs India in year 2010', () => {
			const result = countryPopulation.howManyMoreMillionPeopleLivedIndiaVsUsIn2010();

			assert.strictEqual(result, 925);
		});
	});

	describe('.avarageUsPopulationFromAllPeriod()', () => {
		it('returns a avarage number of people lived in united states over the period of the data-set', () => {
			const result = countryPopulation.avarageUsPopulationFromAllPeriod();

			assert.strictEqual(result, 253773772);
		});
	})
});
