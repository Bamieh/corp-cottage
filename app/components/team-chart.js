import Ember from 'ember';
import mapData from '../data/us-ca-map';

const teamChartComponent = Ember.Component.extend({
  didInsertElement() {
    const data = this.get('data');
    this.set('chartData', chartDataModel(data));
  },

  chartOptions: {
    title: {
      text: 'California'
    },
    colorAxis: {
      min: 0
    }
  },

  chartData: [
    {
      name: 'Team Allocation',
      data: [],
      mapData: mapData,
      joinBy: 'hc-key',
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  ]
});

teamChartComponent.reopenClass({
  positionalParams: 'data'
});

function chartDataModel(data) {
  return [{
    name: 'Team Allocation',
    data: data,
    mapData: mapData,
    joinBy: 'hc-key',
    dataLabels: {
      enabled: true,
      format: '{point.name}'
    }
  }];
}

export default teamChartComponent;