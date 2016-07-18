// #1

/*

function firstReverse (string) {
	return string.split("").reverse().join("");
	}
firstReverse('')

*/

// #2

function swapCase(letters){
    var newLetters = [];
    for(var i = 0; i < letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }
        else {
            newLetters += letters[i].toLowerCase();
        }
    }
    return newLetters;
}
swapCase("Hello World")