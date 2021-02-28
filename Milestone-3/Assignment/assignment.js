// https://github.com/aalhabib001/JS-Assignment

function kilometerToMeter(kilometer) {
    // function to calculate kilometer to meter
    if (kilometer < 0) {
        // checking if the value is less then 0.
        return 'Kilometer can\'t be negative';
    }

    // returning the result with calculting kilometer to meter
    return kilometer * 1000;
}


function budgetCalculator(watchQuntity, phoneQuantity, laptopQuantity) {
    // function to calculate the total price of watch, phone & laptop. with the given quantity in peremeter
    const WATCHPRICE = 50;
    const PHONEPRICE = 100;
    const LAPTOPPRICE = 500;

    if (watchQuntity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        // checking if the value is less then 0.
        return 'watch or phone or laptop quantity can\'t be negative';
    }

    var watchTotalPrice = watchQuntity * WATCHPRICE;
    var phoneTotalPrice = phoneQuantity * PHONEPRICE;
    var laptopTotalPrice = laptopQuantity * LAPTOPPRICE;

    // returning the total price
    return watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
}

function hotelCost(daysToStay) {
    // function to calculate the price of hotel cost that depend on how many days someone stays on the hotel
    if (daysToStay < 0) {
        // checking if the value is less then 0.
        return 'days can\'t be negative';
    }
    var totalCost = 0;
    if (daysToStay > 20) {
        // calculating the cost for the days more than 20
        var temp = daysToStay - 20;
        totalCost += 50 * temp;
        daysToStay -= temp;
    }
    if (daysToStay > 10) {
        // calculating the cost for the days more than 10
        var temp = daysToStay - 10;
        totalCost += temp * 80;
        daysToStay -= temp;
    }
    if (daysToStay > 0) {
        // calculating the cost for the days more than 0
        var temp = daysToStay;
        totalCost += temp * 100;
    }

    // returing the total hotel cost
    return totalCost;

}

function megaFriend(names) {
    // function to find the largest name in an array

    if (!Array.isArray(names)) {
        // checking if the input is an array or not
        return 'Input must be an array';
    }

    if (names.length == 0) {
        // checing if the array have elements of not
        return 'Array can\'t be empty';
    }

    for (var i = 0; i < names.length; i++) {
        // checking if the array contains only string or not
        if (typeof (names[i]) != 'string') {
            return 'Only String is allowed in array'
        }
    }
    var nameLengths = [];

    for (var i = 0; i < names.length; i++) {
        // finding the length of every name in array and push to a new array 
        nameLengths.push(names[i].length);
    }

    var maxLength = nameLengths[0];
    var maxLengthPosition = 0;
    for (var i = 0; i < nameLengths.length; i++) {
        // finding the max length from the array and store the position of it also
        if (maxLength < nameLengths[i]) {
            maxLength = nameLengths[i];
            maxLengthPosition = i;
        }
    }

    // returning the name which have max length
    return names[maxLengthPosition];

}


// for checking outputs 
console.log(kilometerToMeter(12));
console.log(hotelCost(12));
console.log(budgetCalculator(2, 2, 2));
console.log(megaFriend(['Habib', 'Shohan', 'Abir', 'Ali']));