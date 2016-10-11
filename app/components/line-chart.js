import Ember from 'ember';
const {get, set} = Ember;


export default Ember.Component.extend({
  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    }
  },
  chartData: Ember.computed('model.@each.name', 'model.@each.line.length', function(){
    const promiseArray = get(this,'model');
    
    return promiseArray.map((cur)=>{
      // get(cur, 'line')
      console.log(get(cur, 'fullData'))
      return get(cur, 'fullData');
    });
   }),
});
