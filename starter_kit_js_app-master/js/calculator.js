//any given float or integer number has a representation as
// [IntegerValueNumber, digitsAfterComma]
// for example 3.14 will be represented as [314, 2]
// This will allow me to make precise floating point operation
//without rounding errors where in java script 0.2+0.4 is not equal to 0.6
//but some very close value


function convertNumber(number,afterComma){
  var diff = afterComma - number[1];
  for(i=0;i<diff;i++){
    number[0] = number[0]*10;
  }
  number[1]=afterComma;
}

function equalizeAfterCommaValues(number1,number2){
  var biggerAfterCommaValue = number1[1]>number2[1] ? number1[1] : number2[1];
  convertNumber(number1,biggerAfterCommaValue);
  convertNumber(number2,biggerAfterCommaValue);
}

//execute function given as functionName, with 2 parameters as parameters
function execute(functionName , parameters){
  var val1 = document.getElementById(parameters[0]).value;
  var val2 = document.getElementById(parameters[1]).value;
  if(functionName != "factorialNumber"){
    if(isValidNumber(val1) && isValidNumber(val2)){
      if(functionName == "divideNumbers" && parseFloat(val2) ==0 ){
        document.getElementById('result').innerText = 'Nie wolno dzielic przez 0';
      }else{
        var value = window[functionName](parseFloat(val1),parseFloat(val2));
        document.getElementById('result').innerText =" Wynik wynosi : " + value.toString();
      }
    }else{
      document.getElementById('result').innerText = "wprowadz poprawne dane!";
    }
  }else{
    if(isValidNaturalNumber(val1)){
      var value = window[functionName](parseInt(val1));
      document.getElementById('result').innerText =" Wynik wynosi : " + value.toString();
    }else{
      document.getElementById('result').innerText = "wprowadz poprawne dane!";
    }
  }
}

function addNumbers(value1, value2){
    var num1 = convertValueToNumber(value1);
    var num2 = convertValueToNumber(value2);
    equalizeAfterCommaValues(num1,num2);
    var sumaIntNumbers = calculator.add(num1[0],num2[0]);
    var sumaNumber = [sumaIntNumbers,num1[1]];
    var suma = numberToString(sumaNumber);
    return parseFloat(suma);
}

function subtractNumbers(value1,value2){
    var num1 = convertValueToNumber(value1);
    var num2 = convertValueToNumber(value2);
    equalizeAfterCommaValues(num1,num2);

    var roznicaIntValue = calculator.subtract(num1[0],num2[0]);
    var roznicaNumber = [roznicaIntValue,num1[1]];
    var roznica = numberToString(roznicaNumber);
    return parseFloat(roznica);
}

function multiplyNumbers(value1,value2){
    var num1 = convertValueToNumber(value1);
    var num2 = convertValueToNumber(value2);
    var afterCommas = num1[1]+num2[1];
    var iloczynIntValue = calculator.multiply(num1[0],num2[0]);
    var iloczynNumber = [iloczynIntValue,afterCommas];
    var iloczyn = numberToString(iloczynNumber);
    return parseFloat(iloczyn);
}

function divideNumbers(value1,value2){
    var num1 = convertValueToNumber(value1);
    var num2 = convertValueToNumber(value2);
    var afterCommas = num1[1]-num2[1];
    var ilorazIntValue = calculator.divide(num1[0],num2[0]);
    var ilorazValueNumber = convertValueToNumber(ilorazIntValue);
    var ilorazNumber = [ilorazValueNumber[0],afterCommas+ilorazValueNumber[1]];
    var iloraz = numberToString(ilorazNumber);
    return parseFloat(iloraz);
}

function factorialNumber(value){
  return calculator.factorial(value);
}
