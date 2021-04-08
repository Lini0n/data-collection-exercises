const data = require('./country-population.json');

// We need a number, how many people lived in india in year 1990.
function indiaPopulationInYear1990() {
	for(const countryYearPopulation of data){
		if(countryYearPopulation.date === "1990" && countryYearPopulation.countryiso3code === "IND"){
			return countryYearPopulation.value
		}
	}
		
}

// How many more million people lived in india in 2010 than united states.
function howManyMoreMillionPeopleLivedIndiaVsUsIn2010() {
	let usaPopulation2010 = 0;
	let indPopulation2010 = 0;

	for (const countryYearPopulation of data){
		if(countryYearPopulation.date ==="2010"){
			if(countryYearPopulation.countryiso3code === "USA"){
				usaPopulation2010 = countryYearPopulation.value;
			}
			if(countryYearPopulation.countryiso3code === "IND"){
				indPopulation2010 = countryYearPopulation.value;
			}
		}
	}

	const indMinusUsapopulation = Math.round((indPopulation2010 - usaPopulation2010)/ 1000 / 1000);

	return indMinusUsapopulation;
}

// Over all the provided years, how many people lived in united states on avarage.
function avarageUsPopulationFromAllPeriod() {
	throw new Error('Not implemented');
}

// How many people live in India between years 1990-2000 on avarage.
function avarageUsPopulationBetweenYear1990To2000() {
	throw new Error('Not implemented');
}

module.exports = {
	indiaPopulationInYear1990,
	howManyMoreMillionPeopleLivedIndiaVsUsIn2010,
	avarageUsPopulationFromAllPeriod,
	avarageUsPopulationBetweenYear1990To2000,
};
