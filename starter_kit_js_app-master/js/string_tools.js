//return true if stringValue has a valid number (float or int) format
function isValidNumber(stringValue){
  if(stringValue == null){
    return false;
  }
  var n = stringValue.search(/^-?(0\.\d+|[1-9]+\d*(\.\d+|\d*)|0)$/);

  if(n != -1){
    return true;
  }else{
    return false;
  }
}


function isValidNaturalNumber(stringValue){
  if(stringValue==null){
    return false;
  }
  var n = stringValue.search(/^([1-9]\d*|0)$/);

  if(n != -1){
    return true;
  }else{
    return false;
  }
}

//helper function
function removeFrontZeros(number){
  var i=0;
  while(i<number.length && number[i]=="0"){
    i++;
  }
  if(i==number.length){
    i--;
  }
  return number.substring(i,number.length);
}

//helper function
function addFrontZeroes(stringNumber,numberOfZeroes){
  var zeroes="";
  var sign="";
  if(stringNumber[0]=="-"){
    sign = "-";
    stringNumber = stringNumber.substring(1);
  }
  for(i=0;i<numberOfZeroes;i++){
    zeroes = zeroes.concat("0");
  }
  var unsigned = zeroes.concat(stringNumber);
  var completeStringNumber = sign.concat(unsigned);
  return sign.concat(zeroes.concat(stringNumber));
}


function convertValueToNumber(numericValue){
  return parseStringToNumber(numericValue.toString());
}


function parseStringToNumber(stringNumber){
  var sign = stringNumber[0]=="-" ? "-" : "" ;
  var digitsAfterComma = 0;
  stringNumber = stringNumber.replace("-","");
  if(stringNumber.indexOf(".")!=-1){
    digitsAfterComma = stringNumber.length-stringNumber.indexOf(".")-1;
    stringNumber = stringNumber.replace(".","");
  }
  stringNumber = removeFrontZeros(stringNumber);
  stringNumber = sign.concat(stringNumber);
  intNumber = parseInt(stringNumber,10);
  return [intNumber,digitsAfterComma];
}

function numberToString(number){
  var lengthNumber = number[0].toString().length;
  if(number[0].toString()[0]=="-"){
    lengthNumber = lengthNumber-1;
  }
  if(number[1]>=lengthNumber){
    number[0] = addFrontZeroes(number[0].toString(),(number[1]-lengthNumber+1));
  }
  var numberString = number[0].toString();

  if(number[1]>0){
    var numberStringPrefix = numberString.substring(0,numberString.length-number[1]);
    var numberStringSuffix = numberString.substring(numberString.length-number[1],numberString.length);
    numberString = numberStringPrefix.concat(".",numberStringSuffix);
  }
  if(number[1]<0){
    for(i=0;i>number[1];i--){
      number[0]= number[0]*10;
    }
    numberString = number[0].toString();
  }
  return numberString;
}
