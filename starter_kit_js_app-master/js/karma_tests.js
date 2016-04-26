describe('A suite', function() {

      it('should be valid number',function(){
        expect(true).toBe(isValidNumber("0"));
      });

      it('should be valid number',function(){
        expect(true).toBe(isValidNumber("-123.45"));
      });

      it('should not be valid number',function(){
        expect(false).toBe(isValidNumber("12a3"));
      });

      it('should not be valid number',function(){
        expect(false).toBe(isValidNumber("923.45a"));
      });

      it('should not be valid number',function(){
        expect(false).toBe(isValidNumber("a923"));
      });

      it('should not be valid number',function(){
        expect(false).toBe(isValidNumber("023"));
      });

      it('should not be valid number',function(){
        expect(false).toBe(isValidNumber("0.034.5"));
      });


      it('should be equal',function(){
        expect(4).toBe(addNumbers(-0.5,4.500));
      });

      it('should be equal',function(){
        expect(0).toBe(subtractNumbers(-0.005,-0.005));
      });

      it('should be equal',function(){
        expect(36).toBe(multiplyNumbers(12,3));
      });

      it('should be equal',function(){
        expect(-0.75).toBe(divideNumbers(3,-4.0));
      });

      it('return adding value',function(){
        expect(120).toBe(factorialNumber(5));
      });

});
