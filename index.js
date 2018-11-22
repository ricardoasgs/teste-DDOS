const axios = require("axios");

//oapi/auth/login
//email: ricardoaugustogarcia@hotmail.com
//passsword: @Teste123
var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmRjN2Y2ZGMwOWZjZjIyNWNhYWI5ZjIiLCJuYW1lIjoiUmljYXJkbyBHYXJjaWEiLCJlbWFpbCI6InJpY2FyZG9hdWd1c3RvZ2FyY2lhQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkSGVQcjcvU3MuR2pmcUlVVzhVSGRxTzFyS0ZWbVJTNXZPS29JS1dwSnEzTFpaeUFTN3pNMmUiLCJfX3YiOjAsImlhdCI6MTU0MjgxNjAxNCwiZXhwIjoxNTQyOTAyNDE0fQ.GjiMKA6IqhpTBV19kppFGwoYhh2Fj8kuC-48fnNdkFg";

var creditSchema = {
  name: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  value: 15544458
};

var debtSchema = {
  name: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  value: 15544458,
  status: "PAGO"
};

var billingCycleSchema = {
  userId: "testeeeeeeeeeeeee",
  name: "testeeeeeeeeeeeeeeeeeeeeeee",
  month: "1",
  year: "2018",
  credits: [],
  debts: []
};

var QTD = 0;

for (i = 0; i < 100; i++) {
  billingCycleSchema.credits.push(creditSchema);
  billingCycleSchema.debts.push(debtSchema);
}

//console.log(billingCycleSchema);

const api = axios.create({
  baseURL: "http://191.239.242.108:3006/api/",
  timeout: 10000
});

api.defaults.headers.common["Authorization"] = token;
api.defaults.headers.post["Content-Type"] = "application/json";

for (i = 0; i < 1000; i++) {
  var response = api.post("billingCycles", billingCycleSchema);
  response
    .then(function(result) {
      if (result.status != 201) {
        console.log("Falhou após: ", QTD, " Tentativas");
        process.exit("500");
      }
      console.log(result.status);
      QTD++;
    })
    .catch(function() {
      console.log("Falhou após: ", QTD, " Tentativas");
      process.exit("500");
    });
}

// console.log(billingCycleSchema);
