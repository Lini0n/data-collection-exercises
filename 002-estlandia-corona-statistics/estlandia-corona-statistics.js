const data = require('./estlandia-corona-statistics.json');

function allCoronaStatusesInAlpapheticalOrder() {
    const endList = [];
    let list = data;

    while(list.length !== 0){
        const firstStatusInList = list[0].coronaStatus;

        if(!endList.includes(firstStatusInList)){
            endList.push(firstStatusInList);
        }
        list = list.filter(humansInfo => humansInfo.coronaStatus !== firstStatusInList)
    }
    endList.sort();
    return endList;
}


function percentageSickPeople() {
    const numberOfPeople = data.length;

    const sickPeople = data.filter(peopleInfo => peopleInfo.coronaStatus === "sick");
    const numberOfSick = sickPeople.length;

    const procentOfSick = Math.round(numberOfSick / numberOfPeople * 100);
    return procentOfSick
}

function numberOfRecoveredPeopleBornInThisMillenia() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const recoverdPeople = data.filter(humansInfo => {
        return humansInfo.coronaStatus === "recovered"
            && parseInt(humansInfo.idCode.slice(1, 3)) <= currentYear - 2000;
    });
    return recoverdPeople.length;
}

function mostPopularLastName() {
    // //test
    // data.forEach(allNames => {
    //     const humanName = allNames.name.split(' ');
    //     const wordsInName = humanName.length;
    //     if(wordsInName !== 2){
    //         console.error("name not 2 word :",humanName);
    //     }
    // })
    // //
    // let highestOccurdName = "";
    // let timesNameOccured = 0;
    // let i = 0;
    // let humansData = data;
    // while(humansData.length !== 0 && i !== 5){
    //     i++;
    //     const CurrentName = humansData[0].name;
    //     humansData = humansData.filter(thatHuman => {

    //         return thatHuman.name !== CurrentName;
    //     })
    // }
    // console.log(humansData[0]);
    throw new Error('not implemented');

}

function mostPopularEmailProviderDomain() {
    throw new Error('not implemented');
}

function maleNameHavingMostPopularLastNameAndMaleFirstName() {
    throw new Error('not implemented');
}

module.exports = {
    allCoronaStatusesInAlpapheticalOrder,
    percentageSickPeople,
    numberOfRecoveredPeopleBornInThisMillenia,
    mostPopularLastName,
    mostPopularEmailProviderDomain,
    maleNameHavingMostPopularLastNameAndMaleFirstName,
}
