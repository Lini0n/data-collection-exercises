const assert = require('assert');
const countryPopulation = require('../001-country-population/country-population');

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
	});


	describe('.avarageUsPopulationBetweenYear1990To2000()', () => {
		it('returns a avarage number of people lived in united states during 1990 and 2000', () => {
			const result = countryPopulation.avarageUsPopulationBetweenYear1990To2000();

			assert.strictEqual(result, 266140765);
		});
	});
});
