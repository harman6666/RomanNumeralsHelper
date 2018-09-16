/********************************************
 * Author: Harmanpreet Singh
 * File: Roman Numerals Converter Helper
 * Date: Sept 16th 2018
 *******************************************/

var RomanNumerals = (function () {
    // Create a global array of all the numbers. So, we can use them in both the below functions.
    // And also added Vinculum system values for the larger numbers.
    var data = [{1: 'I'}];
    data[1] = 'I';
    data[5] = 'V';
    data[10] = 'X';
    data[50] = 'L';
    data[100] = 'C';
    data[500] = 'D';
    data[1000] = 'M';
    data[5000] = 'V̅';
    data[10000] = 'X̅';
    data[50000] = 'L̅';
    data[100000] = 'C̅';
    data[500000] = 'D̅';
    data[1000000] = 'M̅';

    function numberToRoman(num) {
        try {
            var input = num.toString(); // Converting it into string to check the negative and decimal value in the input.
            if ((input.indexOf('.') != -1) || (input.indexOf('-') != -1)) {
                throw new Error("SORRY, there is no concept of parts of a number or negative numbers. Minus signs and decimal points not allowed (NO '.' OR '-' ALLOWED)");
            }
            // Removing anything that is not a numberical value
            input = input.replace(/[^\d]/g, '');

            if (input >= 4000000) {
                throw new Error("This number is way too big, Romans numeric system went from 1 to 3,999,999");
            }
            var outputResult = '';
            for (var key in input) {
                var number = parseInt(input[key]);
                while (number > 0) {
                    // Get the placement of the number, which decimal place are we in?
                    // 4th place: 1000, 2nd place: 10, last digit: 1
                    var numberOffset = Math.pow(10, input.length - key - 1);
                    // If we have a 9, we do the next 10 minus the 1.
                    if (number == 9) {
                        outputResult += data[numberOffset];
                        outputResult += data[numberOffset * 10];
                        number -= 9;
                    // Else, if the number is bigger than 5, take away the 5 and add the rest
                    } else if (number >= 5) {
                        outputResult += data[numberOffset * 5];
                        number -= 5;
                    // Else, if the number happens to be 4, then do like this 5 - 1
                    } else if (number == 4) {
                        outputResult += data[numberOffset];
                        outputResult += data[numberOffset * 5];
                        number -= 4;
                    // Else, the number has to be less than 4. Just keep taking 1 away and loop this loop
                    } else {
                        outputResult += data[numberOffset];
                        number -= 1;
                    }
                }
            }
            return outputResult;
        } catch (err) {
            console.error(err);
        }
    }


    function romanToNumber(input) {
        try {
            // If there are any symbols other than a roman numberal, we will get an error.
            if (input.match(/[^ivxlcdmIVXLCDM̅]/) != null) {
                throw new Error("SORRY, you entered a character that isn't a roman numeral: " + input.match(/[^ivxlcdmIVXLCDM̅]/g));
            }
            // we cannot add 4 in a row.
            if (input.match(/(.[̅]*)\1\1\1/) != null) {
                throw new Error("It's against the rules to have 4 or more in a row: " + input.match(/(.[̅]*)\1\1\1/));
            }
            input = input.toUpperCase();
            var outputResult = 0;
            // Go through each character from left to right
            for (var key = 0; key < input.length; key++) {
                var myChar = input[key];
                if (input[key + 1] == "̅") {
                    myChar += input[key + 1];
                    key += 1;
                }
                if (key == (input.length - 1)) {
                    outputResult += data.indexOf(myChar);
                    continue;
                }

                var nextChar = input[key + 1];
                // If the character is supposed to have a bar, add it to the value
                if (input[key + 2] == "̅") {
                    nextChar += input[key + 2];
                }
                // Check if this character is less than the one to the right
                // Rules state only one character can subtract from any other
                if (data.indexOf(myChar) < data.indexOf(nextChar)) {
                    outputResult -= data.indexOf(myChar);
                // Otherwise, we just add the number like usual
                } else {
                    outputResult += data.indexOf(myChar);
                }
            }
            return outputResult;
        } catch (err) {
            console.error(err);
        }
    }
    return {
        toRoman: numberToRoman,
        fromRoman: romanToNumber
    }
}());
