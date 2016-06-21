import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  imageUrl: attr(),
  metascore: attr(),
  budget: attr(),
  hasOscar: attr(),
  hasLeonardoDicaprioStarredInThisMovie: attr()
});
