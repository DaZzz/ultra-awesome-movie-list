
![Screen](https://github.com/DaZzz/ultra-awesome-movie-list/blob/master/public/assets/screen.png?raw=true)

# ULTRA AWESOME MOVIE LIST

This is Ember.js showcase app for demonstration purposes. In this app you will be able to
filter movies with set of following filters:

- `has-oscar`
- `has-leonardo-dicaprio-starred-in-this-movie`
- `year-from`
- `year-to`
- `metascore-from`
- `metascore-to`

There are two expected API endpoints:

- `GET /movies?[filter_name=filter_value]` - returns list of available movies;
- `GET /movie-filters` - returns list of available filters with default values.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

