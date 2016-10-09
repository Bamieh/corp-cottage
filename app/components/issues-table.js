import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
});
