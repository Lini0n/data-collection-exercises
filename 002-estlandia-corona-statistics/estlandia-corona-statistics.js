const { interfaces } = require('mocha');
const data = require('./estlandia-corona-statistics.json');

//elements need array like ['name', 'name']
function mostOccuring(elements){
    let mostOccuredElement = "";
    let numberOfMostOccuredELement = 0;
    let elementsArray = elements;
    //console.log('ELEMENTS in ARRAY : ', elementsArray.length);

    while(elementsArray.length !== 0){
        const currenFirsElement = elementsArray[0];
        let occuredNumber = 0;

        elementsArray = elementsArray.filter(items => {
            if(items === currenFirsElement){
                occuredNumber++;
            }
            return items !== elementsArray[0];
        })
        //console.log(currenFirsElement, 'has occured', occuredNumber);

        if(occuredNumber > numberOfMostOccuredELement){
            numberOfMostOccuredELement = occuredNumber;
            mostOccuredElement = currenFirsElement;   
        }
    }
    //console.log('most occured item was', mostOccuredElement ,' it was there :', numberOfMostOccuredELement, 'times');
    return mostOccuredElement;
}

//console.log(mostOccuring(['anti', 'kalle', 'hans', 'konn', 'konn', 'kalle', 'konn']));

function allCoronaStatusesInAlpapheticalOrder() {
    // let list = data;

    // while(list.length !== 0){
    //     const firstStatusInList = list[0].coronaStatus;

    //     if(!endList.includes(firstStatusInList)){
    //         endList.push(firstStatusInList);
    //     }

    //     list = list.filter(humansInfo => humansInfo.coronaStatus !== firstStatusInList)
    // }

    // data.forEach(humansInfo => {
    //     if(!coronaStatuses.includes(humansInfo.coronaStatus)){
    //         coronaStatuses.push(humansInfo.coronaStatus);
    //     }
    // });

    const coronaStatuses = data.reduce((uniqeStatuses, currentStatuses) => {
        if(!uniqeStatuses.includes(currentStatuses.coronaStatus)){
            return uniqeStatuses.concat(currentStatuses.coronaStatus);
        }

        return uniqeStatuses;
    },[]);


    coronaStatuses.sort();

    return coronaStatuses;
}


function percentageSickPeople() {
    const numberOfPeople = data.length;

    const sickPeople = data.filter(peopleInfo => peopleInfo.coronaStatus === "sick");
    const numberOfSick = sickPeople.length;
    const percentOfSick = Math.round(numberOfSick / numberOfPeople * 100);

    return percentOfSick
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
    
    // const lastNames = [];

    // data.forEach(human => {
    //     let personName = human.name.split(' ');
    //     lastNames.push(personName[1]);
    // });


    // const lastNames = data.map(humanInfo =>{
    //     return humanInfo.name.split(' ')[1];
    // }) 

    // return mostOccuring(lastNames);

    // const occured = {
    //     "kalle" : 3,
    //     "muri" : 2,
    //     "mati" : 5
    // }

    const occuredNamesObject = data.reduce((occuredLastNames, personInfo) => {
        const lastName = personInfo.name.split(' ')[1];
        
        if(occuredLastNames[lastName] === undefined) {
            occuredLastNames[lastName] = 1;
            return occuredLastNames
        }

        occuredLastNames[lastName]++;

        return occuredLastNames;
    },{});
    
    // let mostOccuredName = "";
    // let numberMostNameOccured = 0;

    const mostOccuredName = {
        name: "",
        timesOccured: 0
    };

    for(const[key, value] of Object.entries(occuredNamesObject)) {
        if(value > mostOccuredName.timesOccured){
            mostOccuredName.name = key;
            mostOccuredName.timesOccured = value
        }
    }

    return mostOccuredName.name;
}

function mostPopularEmailProviderDomain() {
    const humanEmails = [];

    data.forEach(human => {
        let personEmail = human.email.split('@');
        humanEmails.push(personEmail[1]);
    });
    return mostOccuring(humanEmails);
}

function maleNameHavingMostPopularLastNameAndMaleFirstName() {
    const lastNames = [];
    const firstNames = [];

    data.forEach(humans => {
        let personName = humans.name.split(' ');
        firstNames.push(personName[0]);
        lastNames.push(personName[1]);
    });

    const popularestFullName = mostOccuring(firstNames) 
    + ' ' 
    + mostOccuring(lastNames);

    return popularestFullName;
}

module.exports = {
    allCoronaStatusesInAlpapheticalOrder,
    percentageSickPeople,
    numberOfRecoveredPeopleBornInThisMillenia,
    mostPopularLastName,
    mostPopularEmailProviderDomain,
    maleNameHavingMostPopularLastNameAndMaleFirstName,
}
