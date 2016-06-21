import { test } from 'qunit';
import moduleForAcceptance from 'ultra-awesome-movie-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | movies list');

test('Should render 5 movies when loaded.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(this.$('.movies-list__card').length, 5, 'should show 5 movies cards');
  });
});

test('Should render 6 filters when loaded.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(this.$('.filter-item').length, 6, 'should show 6 filter items');
  });
});

test('Should render 3 movies with oscar.', function (assert) {
  visit('/');
  click('.checkbox:eq(0)');
  andThen(function () {
    assert.equal(this.$('.movies-list__card').length, 3, 'should show 3 movie card');
  });
});

test('Should render 1 movies with Leonardo DiCaprio.', function (assert) {
  visit('/');
  click('.checkbox:eq(1)');
  andThen(function () {
    assert.equal(this.$('.movies-list__card').length, 1, 'should show 1 movie card');
  });
});

test('Should render 1 movies before 2000.', function (assert) {
  visit('/');
  fillIn('.text-field:eq(1)', '2000');
  andThen(function () {
    assert.equal(this.$('.movies-list__card').length, 1, 'should show 1 movie card');
  });
});