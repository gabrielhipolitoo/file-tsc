function logError(errorMessage: string) {
  return errorMessage;
}
logError("logging failed");

const logError2 = (errorMessage: string) => {
  return errorMessage;
};
logError2("Required user and password");

// uso de void em variaveis

let variavelVoid: void;
// variavelVoid = 1;
// variavelVoid = null;
variavelVoid = undefined;
console.log(variavelVoid);
