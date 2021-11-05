import Ember from 'ember';

var  model = null;
export default Ember.Route.extend({

    model()
    {
        return [1,2,3,4,5];
    },

    beforeModel()
    {
        this.transitionTo("teachers");
    },

    afterModel()
    {
         this.transitionTo("teachers");
    }


});
