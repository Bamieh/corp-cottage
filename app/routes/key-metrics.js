import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('linedata');
  },
  updateInterval: null,
  clearUpdateInterval: function(){
    clearInterval(this.updateInterval)
  }.on('deactivate'),
  setUpdateInterval() {
    this.updateInterval = setInterval(() => {
      this.updateSeriesData();
    }, 6000);
  },
  afterModel: function(posts, transition) {
    this.setUpdateInterval();
  },
  updateSeriesData: function() {
    var newPost = this.store.createRecord('linedata', {
      date: new Date().getTime(),
      value: Math.floor((Math.random() * 25) + 1),
    });
    newPost.save();
  },
});
