var calculator = (function () {
      return {

        add: function (fn,sn) {
          return fn+sn;
        },

        subtract: function(fn,sn){
          return fn-sn;
        },

        multiply: function(fn,sn){
          return fn*sn;
        },

        divide: function(fn,sn){
          return fn/sn;
        },

        factorial: function(fn){
          var silnia = 1;
          var i = fn;
          while(i>1){
            silnia = silnia * i;
            i = i-1;
          }
          return silnia;
        },

      };
})();
