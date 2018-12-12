# Testing feedreader app with Jasmine

[shot]: ./images/shot.png

## Overview

This work was done as a partial fulfillment of the requirements for "Front-End Web Developer Nanodegree" of the Udacity. The project tests the Udacity feedreader application with Jamine javascript-testing framework.

## External Library Dependency
This project depends on [jQuery](https://jquery.com/), [handlebars](https://handlebarsjs.com/), and of course [Jasmine](http://jasmine.github.io/).

## Running tests
Download or clone the project files and open the `index.html` file with your favorite browser.
Jasmine will automatically execute the test suites. Test results will be seen at the bottom of the app.

## Testsuites
- `RSS Feeds` suite : checks about the RSS feeds definitions, the `allFeeds` variables in the app.
- `The menu` suite : checks about the menu element operation.
- `Initial Entries` suite : `loadFeed()` function check involving asynchronous `done()` function.
- `New Feed Selection` suite : Another `loadFeed()` function check.

## Screen shot
The test result page looks like the image below.
![screen shot][shot]
