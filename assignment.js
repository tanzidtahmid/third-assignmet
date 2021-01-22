//first function
function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        return "Your input is wrong";
    }
    else if (typeof kilometer !== "number") {
        return "Your input is wrong";
    }
    else {
        var meter = kilometer / 1000;
    }
    return meter;
}
kilometerToMeter();



//second function

function budgetCalculator(watch, phone, laptop) {
    var totalCost = 0;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Your input is wrong";
    }
    else if (typeof watch !== "number" || typeof phone !== "number" || typeof laptop !== "number") {
        return "Your input is wrong";
    }
    else {
        var watchCost = watch * 50;
        var phoneCost = phone * 100;
        var laptopCost = laptop * 500;

        totalCost = watchCost + phoneCost + laptopCost;

    }
    return totalCost;
}
budgetCalculator();



//third function

function hotelCost(days) {
    var rent = 0;
    if (days < 0) {
        return "Your input is wrong";
    }

    else if (typeof days !== "number") {
        return "Your input is wrong";
    }

    else if (days <= 10) {
        rent = days * 100;
    }
    else if (days <= 20) {
        var firstRent = 10 * 100;
        var remoningDays = days - 10;
        var secondRent = remoningDays * 80;
        rent = firstRent + secondRent;
    }
    else {
        var firstRent = 10 * 100;
        var secondRent = 10 * 80;
        var remoningDays = days - 20;
        var thirdRent = remoningDays * 50;
        rent = firstRent + secondRent + thirdRent;
    }
    return rent;
}
hotelCost();




//fourth function

function megaFriend(friendsName) {
    var leargest = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > leargest.length) {
            leargest = element;
        }


    }
    return leargest;
}
megaFriend();

