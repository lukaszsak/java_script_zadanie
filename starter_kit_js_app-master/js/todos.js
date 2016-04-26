var todos = (function() {
    var todoList = [{
        title: 'a',
        done: false
    }, {
        title: 'b',
        done: true
    }];

    return {
        numberOfDoneTodos: function() {
            var counter = 0;
            for (var i = 0; i < todoList.length; i++) {
                if (todoList[i].done) {
                    counter = counter + 1;
                }
            }
            return counter;
        }
    };

})();

var TodoCntl = function(todos) {
    this.userName = 'John Example';
    this.summary = function() {
        console.log(this.userName + ', you have done ' + todos.numberOfDoneTodos() + ' ToDos');
    };
};

var todoCntl = new TodoCntl(todos);
todoCntl.summary();
