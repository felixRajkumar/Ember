import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('about', function() {
      this.route('location', {
          path: '/about/:location_id'
      });
      this.route('job');
      path: '/aboutme'
    });
});

export default Router;
