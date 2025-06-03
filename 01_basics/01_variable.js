//variable ko declare krne ke do tareeke h, Let and Var lekin hm Var nhi use krte because of issue in block and functional scope only let;
// and constant  ke liye only Const
//-------------------------------------------------------------------------------------------------------------------

const accountId = "Harsh"
var pass = "12345"
let accountCity = "Chennai"
accountName = "Shiva"
let accountState;

// accountId = "amrit";                // we cannot change constant

accountName = "Kapoor"

accountCity = "Delhi"

pass = "54321"

console.table([accountCity, accountId, pass, accountName, accountState]);