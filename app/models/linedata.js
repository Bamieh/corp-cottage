import DS from 'ember-data';

export default DS.Model.extend({
  "name": DS.attr('string'),
  "line": DS.attr('object'),
  "fullData": Ember.computed('name', 'line', function() {
    return {
      name: this.get('name'),
      data: this.get('line')
    }
  })
});
