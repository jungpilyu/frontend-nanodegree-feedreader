/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a URL defined and is not empty', function() {
           allFeeds.forEach(function(aFeed) {
             expect(aFeed.url).toBeDefined();
             expect(aFeed.url).toMatch(/^http(|s)\:\/\//);
           })
         });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined and is not empty', function() {
           allFeeds.forEach(function(aFeed) {
             expect(aFeed.name).toBeDefined();
             expect(aFeed.name.length).not.toBe(0);
           })
         });

    });


    /* This is a new test suite named "The menu" */
    describe('The menu', function() {
      /* This is a test that ensures the menu element is
       * hidden by default.
       */
        body = document.body;
       it('has the menu element hidden by default', function() {
         expect(body.classList.contains('menu-hidden')).toBe(true);
       });
       /* This is a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        menuIcon = document.querySelector('.menu-icon-link');
        it('becomes toggled when clicked', function() {
          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).not.toBe(true);
          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    /* This is a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* This is a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * This test requires
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       beforeEach(function(done) {
         loadFeed(0, done);
       });
       it('have at least one element in the feed container', function(done) {
         numOfEntries = document.querySelectorAll('.feed .entry').length;
         expect(numOfEntries).toBeGreaterThan(1);
         done();
       });
    });

    /* This is a new test suite named "New Feed Selection" */
    const defineSuite = (oldID, newID) => {
      describe(`New Feed Selection of ID=${newID} after ID=${oldID}`, function() {
          /* This is a test that ensures when a new feed is loaded
           * by the loadFeed function that the content actually changes.
           */
           let oldContent;
           let newContent;
           container = document.querySelector('.feed');
           beforeEach(function(done) {
             loadFeed(oldID, function() {
               oldContent = container.innerText;
               loadFeed(newID, done);
             });
           });
          it(`ensures the new feed content different from the previous one`, function(done) {
            newContent = container.innerText;
            expect(oldContent).not.toEqual(newContent);
            done();
          });
      });
    }
    const num = allFeeds.length;
    /* call defineSuite() with a selection combination. */
    defineSuite(3, 0); /* selection of ID=3 after ID=1 */
}());
