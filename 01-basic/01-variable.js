const accountId = 123456;
let accountName = "Upendra Tiwari";

var accountEmail = "X6fUz@example.com";

//accountId = 456; // not allowed

accountName = "Nilam Tiwari";

accountEmail = "ut@gmail.com";

accountCity = "Delhi";

let accountState;

//console.log(accountId);

//console.log(accountName);

//console.log(accountEmail);

/*
Prefer not used to var
because it is not supported in ES6 and above
and issue in block scope and functional scope
and we can use let and const
*/
console.log("accountEmail", accountEmail + " " + accountId, accountName, accountCity);
console.table({ accountId, accountName, accountEmail, accountCity, accountState });