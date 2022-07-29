const findTheOldest = function(people) {
    return people.reduce((oldest,person) =>{
        if(!(person.yearOfDeath)){
            person.yearOfDeath = new Date().getFullYear();
        }
        if(!(oldest.yearOfDeath)){
            oldest.yearOfDeath = new Date().getFullYear();
        }
        const personAge = person.yearOfDeath - person.yearOfBirth
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth
        if(personAge >= oldestAge){
            return person
        } else {
            return oldest
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
