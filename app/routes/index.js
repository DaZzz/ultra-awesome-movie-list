import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('movie');
  },

  beforeModel() {
    return this.store.findAll('movie-filter').then((movieFilterSchemas) => {
      this.controllerFor('index').set('movieFilterSchemas', movieFilterSchemas)
      this.controllerFor('index').set('movieFilters', movieFilterSchemas.map((schema) => {
        return Ember.Object.create({
          label: schema.get('label'),
          name: schema.get('name'),
          type: schema.get('type'),
          value: schema.get('defaultValue'),
          isBoolean: schema.get('type') === 'boolean',
          isNumber: schema.get('type') === 'number'
        })
      }))

    })
  }

});
