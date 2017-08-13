var pickNumber = prompt('Pick any number');
var multiplyBy4 = pickNumber * 4;
var multiplyBy5 = multiplyBy4 * 5;
var divideBySelf = multiplyBy5 / pickNumber;
var subtractBy7 = divideBySelf - 7;

console.log(pickNumber);

alert('Your number is' + ' ' + pickNumber + ' ' + 'And then I will multiply that by 4');
alert('That equals ' + ' ' + multiplyBy4);

alert('Your number is' + ' ' + multiplyBy4 + ' ' + 'And then I will multiply that by 5');
alert('That equals' + ' ' + multiplyBy5);

alert('Your number is' + ' ' + multiplyBy5 + ' ' + 'I will then divide that number by your original number');
alert('That equals' + ' ' + divideBySelf);

alert('Your number is' + ' ' + divideBySelf + ' ' + 'Then .... I will subtract 7');
alert('That equals' + ' ' + subtractBy7);
