import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('linedata');
    // var promiseArray = this.store.findAll('linedata');

    // return promiseArray.then(()=> {
    //   return promiseArray.map((cur)=>{
    //     const data = Ember.copy(cur.data);
    //     data.data = Ember.copy(cur.data.line, true);
    //     console.log(data)
    //     return data;
    //   });
    // });
  },
});
