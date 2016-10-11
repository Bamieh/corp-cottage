export default Ember.Route.extend({
  model() {
    return Ember.$.get( '/MOCK_TEAMS.json' );
  }
});
