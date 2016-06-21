import Ember from 'ember';

export default Ember.Controller.extend({

  movieFilters: null,
  isMovieListLoading: false,

  movieFiltersChanged: Ember.observer('movieFilters.@each.value', function () {
    const filters = {};

    this.get('movieFilters').forEach((filter) => {
      filters[filter.get('name')] = filter.get('value');
    });

    this.set('isMovieListLoading', true);
    this.store.query('movie', filters).then((movies) => {
      this.set('movies', movies);
      this.set('isMovieListLoading', false);
    });
  })

});
