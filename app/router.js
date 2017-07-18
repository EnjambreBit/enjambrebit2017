import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('quienes-somos');
    this.route('portfolio');
    this.route('lab');
    this.route('contacto');
  });
});

export default Router;
