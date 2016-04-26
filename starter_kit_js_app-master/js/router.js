var router = (function() {
    var calculatorDiv = document.getElementById('calculator'),
        xmlHttpRequestDiv = document.getElementById('xmlHttpRequest');

    return {
        showXmlHttpRequestDiv: function() {
            calculatorDiv.style.display = 'none';
            xmlHttpRequestDiv.style.display = 'block';
        },
        showCalculatorDiv: function() {
            xmlHttpRequestDiv.style.display = 'none';
            calculatorDiv.style.display = 'block';
        }
    };
})();
