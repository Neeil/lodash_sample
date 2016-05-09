var _ = require('lodash');

var workers = [
    {'name' : "Frank",  "age" :"23", "sex":"Female"},
    {'name' : "Jason",  "age" :"32", "sex":"Female"},
    {'name' : "Charlie","age" :"16", "sex":"Female"},
    {'name' : "June",   "age" :"33", "sex":"Female"},
    {'name' : "Queen",  "age" :"23", "sex":"Female"}
];

// Get All names form workers.
var names = _.chain(workers)
  .map(function(worker){
    return worker.name;
  })
  .join(" , ")
  .value();
console.log(names);


var youngest = _.chain(workers)
              .min(function(worker){
                  return worker;
              })
              .value();
console.log(youngest);