# CONVERTING ROMAN NUMERALS
____________
Introduction
------------

The numeric system represented by Roman numerals originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers in this system are represented by combinations of letters from the Latin alphabet.Roman numerals, as used today, are based on seven symbols:

![Default-numbers](https://s15.postimg.cc/43kh43liz/Screen_Shot_2018-09-16_at_2.31.38_PM.png)

As you can see, we have a limited set of symbols here. We can create the numbers to fill the spaces by chaining multiple symbols. Let's have a look at the numbers 1-10.

![num-series](https://s15.postimg.cc/uomzzqnx7/Screen_Shot_2018-09-16_at_2.32.55_PM.png)

Logic 
--------
Let's take a look at two special cases 4 and 9. What happens here is that instead of adding values, we are subtracting the first value from the second. So the Roman numeral at 4 is effectively **5-1**. At 9 we are looking at **10-1**. In every other case, we are simply adding up all the numbers to build the sum. So **VII** is **5+1+1 = 7**. As a rule of thumb, you should keep in mind that no letter should be repeated more than **3** times. If you are repeating it more than that, you should skip to the next letter and calculate the number using subtraction instead. Let's have a look at some examples:

![example](https://s15.postimg.cc/8dz4zg5yz/Screen_Shot_2018-09-16_at_2.36.11_PM.png)

Usage 
---------
First of all, include the script in the starting of the file so it gets loaded initially. 
And when you want to use. Use it with the global declared variable i.e. RomanNumerals by writing function name after that.
Example:-
```
 RomanNumerals.toRoman(1000); // should return 'M'
 RomanNumerals.fromRoman('M'); // should return 1000
 RomanNumerals.toRoman(5000); // should return 'V̅' i.e. upper bar represent 1000 and V represent 5.
```

Features/Functionalities
---------

- User can use this helper to convert **Number**(1 to 3,999,999) to **Roman Numeral**.
- User can convert to **Roman Numeral** to **Number**.

Assumptions
----------
- User can add number from **1 to 3,999,999**. As 3,999,999 is the longest number represented by Roman numerals. The numbers(>3999) in thousands are usually written with a bar over the base numeral.
- Minus signs and decimal points are not allowed as there is no concept of parts of a number or negative numbers.
- User not be able to enter 4 Roman numerals in a row. It's against the rules to have 4 or more in a row.

Error Handling
------------
- Used Try/catch block for error handling.
- Used Regex for validating some conditions:
  * **/[^\d]/g**: For eleminating anything which is not numerical.
  * **/[^ivxlcdmIVXLCDM̅]**: For making sure that user is entering the right keyword.
  * ***/(.[̅]*)\1\1\1/**: From making sure that user is not entering four same charater in a row(which is againt the Roman numeral rules).


### Many thanks for looking out !
