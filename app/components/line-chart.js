import Ember from 'ember';

const {get, set} = Ember;

function dateFormat (date, fstr, utc) {
  utc = utc ? 'getUTC' : 'get';
  return fstr.replace (/%[YmdHMS]/g, function (m) {
    switch (m) {
    case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
    case '%m': m = 1 + date[utc + 'Month'] (); break;
    case '%d': m = date[utc + 'Date'] (); break;
    case '%H': m = date[utc + 'Hours'] (); break;
    case '%M': m = date[utc + 'Minutes'] (); break;
    case '%S': m = date[utc + 'Seconds'] (); break;
    default: return m.slice (1); // unknown code, remove %
    }
    // add leading zero if required
    return ('0' + m).slice (-2);
  });
}



const LineChart = Ember.Component.extend({
  chartOptions: Ember.computed('params.[]', function() {
    return {
      chart: {
        type: this.get('type'),
      },
      title: {
        text: this.get('title')
      },
      xAxis: {
        type: 'category',
        title: {
          text: 'Time'
        }
      },
      legend: {
          enabled: !!this.get('legend'),
      },
      yAxis: {
        title: {
          text: '# Of Paying Customers'
        }
      }
    }
  }),
  theme: {
    colors: [
      '#258be2',
      '#666666',
      '#f45b5b',
      '#8085e9',
      '#8d4654',
      '#7798bf',
      '#aaeeee',
      '#ff0066',
      '#eeaaee',
      '#55bf3b',
      '#df5353',
      '#7798bf',
      '#aaeeee'
    ],
  },
  chartData: Ember.computed('model.@each.date', function(){
    const promiseArray = get(this,'model');
    const dataObj = promiseArray.slice(-26).map((cur)=> {
      const FBdate = get(cur, 'date');

      const FBvalue = get(cur, 'value');
      const formatedDate = 
        dateFormat (new Date (FBdate), "%H:%M:%S", true)
      return [
        formatedDate,
        FBvalue
      ];
    });
    return [{
      name: this.get('legend'),
      data: dataObj
    }];
   }),
});

LineChart.reopenClass({
  positionalParams: ['type', 'title', 'legend']
});

export default LineChart