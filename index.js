function countdown(callback){
    window.setTimeout(function(){callback();},2001);
}

function createMultiplier(multiplyby){
  return function(num){
    return multiplyby*num;
  };
}

function multiplier(num1,num2){
  return num1*num2;

}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);


var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
// var doublerWithBind(2,callback);
// var triplerWithBind;
