var App = Ember.Application.create();

App.Router.map(function(){
    this.resource('addition', {path: '/add'});
});

App.AdditionController = Ember.Controller.extend({
    c: function(){
        return parseInt(this.get('a')) + parseInt(this.get('b'));
    }.property('a', 'b')
});
