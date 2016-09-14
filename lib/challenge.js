'use strict';


// runs a function on every val in an array and returns true if ANY vals are true
function any(arr, fun){
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return true;
    }
  }
  return false;
}


// runs a function for every val in an arry and returns true if NO vals are true
function none(arr, fun){
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return false;
     }
  } return true;
}

//runs a function for every val in the array and returns true if only one of
// the vals are true
function one(arr, fun){
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if ( fun(arr[i]) ) {
      res++;
     }
   }

   return res === 1;
}


// runs a function for every val in the array and returns true if every val is true
function all( arr, fun ) {
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false;
    }
  }
    return true;
}

module.exports = {
  all,
  none,
  one,
  any
};
