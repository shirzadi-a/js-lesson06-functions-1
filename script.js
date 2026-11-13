var startMyDay = function () {
    return "Time to freshen up and have some coffee!";
};

console.log(startMyDay());


var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolate chip"));


var introduce = function (name, occupation) {
    return `Hello my name is ${name} and I'm a ${occupation}.`;
};

console.log(introduce("Aria", "Web Developer"));
// console.log(introduce("Larry", "Lizard"));


var hydrationFeedback = function () {
    var numGlasses = Number(prompt("How many glasses of water did you have today?"));
    if (numGlasses >= 8) {
        console.log("Good job staying hydrated!");
    } else {
        console.log("Not too bad, let's aim for more tomorrow!");
    }
};

// hydrationFeedback();