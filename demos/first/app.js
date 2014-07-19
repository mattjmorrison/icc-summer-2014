var Calc = function(){
    this.ops = [];
};

Calc.prototype.add = function(a, b){
    var c = a + b;
    this.log(a, '+', b, c);
    return c;
};

Calc.prototype.log = function(a, op, b, c){
    this.ops.push(a + " " + op + " " + b + " = " + c);
};

