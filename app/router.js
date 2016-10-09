import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('geo-spatial');
  this.route('home');
  this.route('issues');
  this.route('key-metrics');
});

export default Router;
