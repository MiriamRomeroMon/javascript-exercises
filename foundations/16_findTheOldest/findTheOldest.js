const findTheOldest = function(people) {
    const currentDate = new Date().getFullYear();

    const old = people.reduce((oldestPerson, person) => {
        
        let oldestAge = (oldestPerson.yearOfDeath || currentDate) - oldestPerson.yearOfBirth;
        let currentAge = (person.yearOfDeath || currentDate) - person.yearOfBirth;

        if(currentAge > oldestAge) {
            oldestPerson = person;
        }
        return oldestPerson;
    })

    return old;
};

// Do not edit below this line
module.exports = findTheOldest;
