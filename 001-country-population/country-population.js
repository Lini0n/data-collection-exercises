const data = require('./country-population.json');

// We need a number, how many people lived in india in year 1990.
function indiaPopulationInYear1990() {
	// for(const countryYearPopulation of data){
	// 	if(countryYearPopulation.date === "1990" && countryYearPopulation.countryiso3code === "IND"){
	// 		return countryYearPopulation.value
	// 	}
	// }
	const indPopulation = data.find(element => (element.date === "1990" && element.countryiso3code ==="IND"));
	return indPopulation.value;
}

// How many more million people lived in india in 2010 than united states.
function howManyMoreMillionPeopleLivedIndiaVsUsIn2010() {
	// let usaPopulation2010 = 0;
	// let indPopulation2010 = 0;
	// for (const countryYearPopulation of data){
	// 	if(countryYearPopulation.date ==="2010"){
	// 		if(countryYearPopulation.countryiso3code === "USA"){
	// 			usaPopulation2010 = countryYearPopulation.value;
	// 		}
	// 		if(countryYearPopulation.countryiso3code === "IND"){
	// 			indPopulation2010 = countryYearPopulation.value;
	// 		}
	// 	}
	// }
	// const indMinusUsapopulation = Math.round((indPopulation2010 - usaPopulation2010)/ 1000 / 1000);
	// return indMinusUsapopulation;
	const a = data.filter(element => element.date === "2010");
	return Math.round((a[1].value - a[0].value) /1000 / 1000);
}

// Over all the provided years, how many people lived in united states on avarage.
function avarageUsPopulationFromAllPeriod() {

	// let peopleCount = 0;
	// let yearsCount = 0;

	// for(const countryYearPopulation of data){
	// 	if(countryYearPopulation.countryiso3code === "USA"){
	// 		peopleCount += countryYearPopulation.value;
	// 		yearsCount++;
	// 	}
	// }
	// return Math.round(peopleCount / yearsCount);
	let YearCounter = 0;
	let totalPopulationNumber = 0;
	data.forEach( element => {
		if(element.countryiso3code ==="USA"){
			YearCounter++;
			totalPopulationNumber += element.value;
		}
	})
	return Math.round(totalPopulationNumber / YearCounter);
}

// How many people live in USA between years 1990-2000 on avarage.
function avarageUsPopulationBetweenYear1990To2000() {
	// let peopleCount = 0;
	// let yearsCount = 0;
	// for(const countryYearPopulation of data){
	// 	if(countryYearPopulation.countryiso3code === "USA"){
			
	// 		let numCountryYearpopulation = Number(countryYearPopulation.date);
	// 		if(numCountryYearpopulation <= 2000 && numCountryYearpopulation >= 1990){
	// 			peopleCount += countryYearPopulation.value;
	// 			yearsCount++;
	// 		}
	// 	}
	// }
	// return Math.round(peopleCount / yearsCount);
	let yearCount = 0;
	const sum = data.reduce((accumulator, currentValue) => {
		if(parseInt(currentValue.date) <= 2000 && parseInt(currentValue.date) >= 1990 && currentValue.countryiso3code === "USA"){
			yearCount++;
			return accumulator + currentValue.value;
		}
		return accumulator;		
	},0)
	return Math.round(sum / yearCount);
}
avarageUsPopulationBetweenYear1990To2000();
module.exports = {
	indiaPopulationInYear1990,
	howManyMoreMillionPeopleLivedIndiaVsUsIn2010,
	avarageUsPopulationFromAllPeriod,
	avarageUsPopulationBetweenYear1990To2000,
};
