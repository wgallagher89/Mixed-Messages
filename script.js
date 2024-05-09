// Mixed Messages JavaScript Project

// Object to hold 3 arrays to hold random output for messages
const mixedMessages = {
    favShows: ['Game of Thrones', 'Breaking Bad', 'Entourage', 'Lost', 'Succession', 'Ted Lasso'],
    favActor: ['Peter Dinklage', 'Bryan Cranston', 'Adrian Grenier', 'Matthew Fox', 'Brian Cox', 'Phil Dunster'],
    nextShows: ['Manhunt', 'The Regime', 'Shogun', 'Masters of the Air', 'Stranger Things', 'House of Dragons']
};

// Function to return randomized output from each array
const randomizer = obj => {
    const tempArr = [];
    for (arr in obj) {
        switch (arr) {
            case 'favShows': 
                tempArr.push(obj[arr][Math.floor(Math.random() * obj[arr].length)]);
                break;
            case 'favActor':
                tempArr.push(obj[arr][Math.floor(Math.random() * obj[arr].length)]);
                break;
            case 'nextShows':
                tempArr.push(obj[arr][Math.floor(Math.random() * obj[arr].length)]);
                break;
        }
    }
    return tempArr;
};

// Function to generate the mixed messages
const mixedMessageGenerator = obj => {
    const getMessages = randomizer(obj);
    console.log(`Your favorite show is: ${getMessages[0]}`);
    console.log(`Your favorite actor is: ${getMessages[1]}`);
    console.log(`The next show you'll watch is: ${getMessages[2]}`);
}

mixedMessageGenerator(mixedMessages);