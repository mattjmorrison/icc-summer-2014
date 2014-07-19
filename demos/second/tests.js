module('Tests', {
    setup: function(){
        App.setupForTesting();
        App.injectTestHelpers();
        App.reset();
    }
});

test('Says Hello', function(){
    visit('/');
    andThen(function(){
        equal(find('#greeting').text(), 'Hello ICC');
    });
});

test("1 + 1 = 2", function(){
    visit('/add');
    andThen(function(){
        find('#a').val(1).change();
        find('#b').val(1).change();
        equal(find('#c').text(), 2);
    });
});

test("1 + 2 = 3", function(){
    visit('/add');
    andThen(function(){
        find('#a').val(1).change();
        find('#b').val(2).change();
        equal(find('#c').text(), 3);
    });
});
