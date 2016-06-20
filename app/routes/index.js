import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      movieFilters: this.store.findAll('movie-filter'),
      movies: this.store.findAll('movie')
    });
  }

});
