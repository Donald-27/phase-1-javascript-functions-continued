// code your solution here
// Function for Saturday activities
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function for Monday work activities
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Function to wrap adjectives with visual flair
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a hard worker")); // "You are !!!a hard worker!!!"

console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."
