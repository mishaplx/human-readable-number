
module.exports = function (number) {
    return humanNumbers(number);
}
let obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    "five":"five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16:"sixteen",
    17:"seventeen",
    18: "eighteen",
    19:"nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    "space": " ",
};
function humanNumbers(number) {
    if (number == 0) {
        return obj[0];
    } else if (number > 0 && number <= 13) {
        return obj[number];
    }
    else if (number > 10 && number < 20) {
        return obj[number];
    } else if (number > 19 && number % 10 == 0 && number < 91) {
        return obj[number];
    } else if (number > 20 && number % 10 !== 0 && number < 100) {
        return obj[number - (number % 10)] + obj["space"] + obj[number % 10];
    } else if (number == 100) {
        return obj[1] + obj["space"] + obj[100];
    } else if (number % 100 == 0) {
        return obj[number / 100] + obj["space"] + obj[100];
    }
    else if (number > 119 && number < 999 && number%10 == 0) {
        return obj[Math.floor(number/100) ] + ' hundred ' + obj[number%100]
     }    
    else if (number > 100 && number <= 999 && Math.floor((number % 100) / 10) != 0 && Math.floor((number % 100) / 10) != 1) {
        return obj[Math.floor(number / 100)] + obj["space"] + obj[100] + obj["space"] + obj[Math.floor((number % 100) / 10) * 10] + obj["space"] + obj[number % 10];
    }
    else if (number > 100 && number <= 999 && number % 100 <= 13 && Math.floor((number % 100) / 10) == 0 || Math.floor((number % 100) / 10) == 1) {
        return obj[Math.floor(number / 100)] + obj["space"] + obj[100] +  obj["space"] + obj[number % 100] 
    }
    else if (number > 100 && number <= 999 && number % 100 > 13 && number % 100 < 20) {
        return obj[Math.floor(number / 100)] + obj["space"] + obj[100] +  obj["space"] + obj[(number % 100)]
    }
}

