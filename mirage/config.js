export default function() {

  // ---
  // Movies
  // ---
  this.get('/movies', (db, request) => {
    return {
      data: [{
        type: 'movie',
        id: 1,
        attributes: {
          name: 'Star Wars: Episode VII',
          'image-url': '/assets/image1.jpg',
          metascore: 81,
          year: 2015,
          budget: 245000000,
          'has-oscar': false,
          'has-leonardo-dicaprio-starred-in-this-movie': false
        }
      },{
        type: 'movie',
        id: 2,
        attributes: {
          name: 'The Aviator',
          'image-url': '/assets/image2.jpg',
          metascore: 77,
          year: 2004,
          budget: 110000000,
          'has-oscar': true,
          'has-leonardo-dicaprio-starred-in-this-movie': true
        }
      },{
        type: 'movie',
        id: 3,
        attributes: {
          name: 'Forrest Gump',
          'image-url': '/assets/image3.jpg',
          metascore: 82,
          year: 1994,
          budget: 55000000,
          'has-oscar': true,
          'has-leonardo-dicaprio-starred-in-this-movie': false
        }
      },{
        type: 'movie',
        id: 4,
        attributes: {
          name: 'The Martian',
          'image-url': '/assets/image4.jpg',
          metascore: 80,
          year: 2015,
          budget: 108000000,
          'has-oscar': false,
          'has-leonardo-dicaprio-starred-in-this-movie': false
        }
      },{
        type: 'movie',
        id: 5,
        attributes: {
          name: 'Interstellar',
          'image-url': '/assets/image5.jpg',
          metascore: 74,
          year: 2014,
          budget: 165000000,
          'has-oscar': true,
          'has-leonardo-dicaprio-starred-in-this-movie': false
        }
      }]
    };
  });

  // ---
  // Filters
  // ---
  this.get('/movie-filters', (db, request) => {
    return {
      data: [{
        type: 'movie_filter',
        id: 1,
        attributes: {
          label: 'Has Oscar',
          name: 'has_oscar',
          type: 'boolean'
        }
      }, {
        type: 'movie_filter',
        id: 2,
        attributes: {
          label: 'Has Leonardo DiCaprio starred in this movie',
          name: 'has_leonardo_dicaprio_starred_in_this_movie',
          type: 'boolean'
        }
      }, {
        type: 'movie_filter',
        id: 3,
        attributes: {
          label: 'Year from',
          name: 'year_from',
          type: 'number'
        }
      }, {
        type: 'movie_filter',
        id: 4,
        attributes: {
          label: 'Year to',
          name: 'year_to',
          type: 'number'
        }
      }, {
        type: 'movie_filter',
        id: 5,
        attributes: {
          label: 'Metascore from',
          name: 'metascore_from',
          type: 'number'
        }
      }, {
        type: 'movie_filter',
        id: 6,
        attributes: {
          label: 'Metascore to',
          name: 'metascore_to',
          type: 'number'
        }
      }]
    };
  });
}
