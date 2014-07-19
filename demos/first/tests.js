module('Calc tests', {
    setup: function(){
        this.calc = new Calc();
    }
});

test('1 + 1 = 2', function(){
    equal(this.calc.add(1, 1), 2);
});

test('1 + 2 = 3', function(){
    equal(this.calc.add(1, 2), 3);
});

test('logs operations', function(){
    this.calc.log(1, '+', 1, 2);
    this.calc.log(1, '+', 2, 3);
    deepEqual(this.calc.ops, [
        "1 + 1 = 2",
        "1 + 2 = 3"
    ]);
});

test('add really logs', function(){
    this.calc.add(1, 1);
    this.calc.add(1, 2);
    deepEqual(this.calc.ops, [
        "1 + 1 = 2",
        "1 + 2 = 3"
    ]);
});
