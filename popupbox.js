//alert box
//alert box used when we send alert or warning message to thse user , When an alert box pops up, the user will have to click "OK" to proceed.
alert("I am an alert box!");

//confirm box
//confirm box used when we want the user to verify or accept something ,When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
//If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

let x = confirm("Do you want to continue ?");
if (x == true) {
    document.write("User wants to continue!");
    return true;
} else {
    document.write("User does not want to continue!");
    return false;
}

//prompt box
//prompt box used when we want user to input something

let y = prompt("input any positive number");
if (y % 2 == 0) {
    console.log('number is even');
}
else {
    console.log('number is odd');
}