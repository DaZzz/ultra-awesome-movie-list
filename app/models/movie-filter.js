import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  label: attr(),
  type: attr(),

  isBoolean: Ember.computed('type', function () {
    return this.get('type') === 'boolean';
  }),

  isNumber: Ember.computed('type', function () {
    return this.get('type') === 'number';
  })
});
