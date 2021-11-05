import Ember from 'ember';

var model = null;
export default Ember.Route.extend({

    model()
    {
        return new Ember.RSVP.Promise(function(resolve)
        {
            resolve({
                message: 'Resolved'
            });
        });

    },


     setupController(controller, model)
     {
          this._super(controller, model);
          console.log(model.message);
     }


});
