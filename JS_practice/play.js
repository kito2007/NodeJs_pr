const name = 'Max';
var age = 20;
var hasHobbies = true;

function summarizeUser(username, userAge, userHasHobbies){
    return (
        'Name is ' +
        username +
        ', age is' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobbies
    );
}

console.log(summarizeUser(name, age, hasHobbies));