"use strict";
function logError(errorMessage) {
    return errorMessage;
}
logError("logging failed");
const logError2 = (errorMessage) => {
    return errorMessage;
};
logError2("Required user and password");
// uso de void em variaveis
let variavelVoid;
// variavelVoid = 1;
// variavelVoid = null;
variavelVoid = undefined;
console.log(variavelVoid);
