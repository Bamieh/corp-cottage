import Ember from 'ember';

export default Ember.Controller.extend({
  navigator: Ember.inject.service(),
  breadCrumbs: Ember.computed('navigator.currentPath', function() {
    var crumbs = this.get('navigator.currentPath').split('.');
    if(this.get('navigator.isIndexRoute')) {
      crumbs.popObject();
    }
    let breadcrumbed = crumbs.
      filter(element => element!= "home")
      .map((crumb, index) => (
        {
          path: crumbs.slice(0, index + 1).join('.'),
          name: crumb
        }
      ));
    return [{path: 'index', name: 'Home'}].concat(breadcrumbed);
  })
});
