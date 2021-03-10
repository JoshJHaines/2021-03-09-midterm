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

function oddIndices(arr) {
	newArr = [];
	for (i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function numOddValues(arr) {
	countOfOdds = 0;
	for (index of arr) {
		if (index % 2 !== 0) {
			countOfOdds++;
		}
	}
	return countOfOdds;
}

function averageStringLength(arr) {
	lengthOfAllStr = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (index of arr) {
			lengthOfAllStr += index.length;
		}
		return lengthOfAllStr / arr.length;
	}
}

function firstPunctuationIndex(str) {
	for (char of str) {
		if (char === "." || char === "!" || char === "?") {
			return str.indexOf(char);
		}
	}
	return -1;
}

function getPlace(highScores, newScore) {
	for (score of highScores) {
		place = (highScores.indexOf(score) +1).toString();
        lastPlace = highScores.length
        if (newScore >= score){
            if (place.endsWith("1")){
                return `${place}st place`
            }
            if (place.endsWith("2")){
                return `${place}nd place`
            }
            if (place.endsWith("3")){
                return `${place}rd place`
            } else {
                return `${place}th place`
            }
        } else {
            
        }
    }
}

test = getPlace ([19, 18, 16],20)
test 

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
