// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function ageToAbilities(num) {
	if (num < 16) {
		return "You can't drive.";
	}
	if (num >= 16 && num <= 17) {
		return "You can drive but not vote.";
	}
	if (num >= 18 && num <= 24) {
		return "You can vote but not rent a car.";
	} else {
		return "You can do pretty much anything.";
	}
}

function oddIndices(arr){
    newArr = []
    for (i = 0; i < arr.length; i ++){
        if (i % 2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function numOddValues(arr){
    countOfOdds = 0
    for (index of arr){
        if (index % 2 !== 0){
            countOfOdds++
        }
    }
    return countOfOdds
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === "undefined") {
	ageToAbilities = undefined;
}
if (typeof oddIndices === "undefined") {
	oddIndices = undefined;
}
if (typeof numOddValues === "undefined") {
	numOddValues = undefined;
}
if (typeof averageStringLength === "undefined") {
	averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === "undefined") {
	firstPunctuationIndex = undefined;
}
if (typeof getPlace === "undefined") {
	getPlace = undefined;
}

module.exports = {
	ageToAbilities,
	oddIndices,
	numOddValues,
	averageStringLength,
	firstPunctuationIndex,
	getPlace,
};
