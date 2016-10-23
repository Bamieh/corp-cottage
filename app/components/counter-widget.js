import Ember from 'ember';


const counterWidget = Ember.Component.extend({
  willInsertElement: function(){
    // var emberId = this.get('elementId');
    // console.log('elementId', emberId)
    // counter__countup
  },
  didInsertElement() {
    $(document).ready(() => {
      console.log('elementId', $(`#${this.get('elementId')} .counter__countup`)[0])
      
      var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '' 
      };
      var emberId = this.get('elementId');
      const countUpElement = $(`#${this.get('elementId')} .counter__countup`)[0];
      var counter = new CountUp(countUpElement, 0, this.get('value'), 0, 2.5, options);
      counter.start();
    });
  },
});


counterWidget.reopenClass({
  positionalParams: 'value'
});

export default counterWidget