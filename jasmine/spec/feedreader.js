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
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /**********************************
         Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         ***********************************/
         //check that URL exists and is not empty
         it('allFeeds Array has URL', ()=>{
            let isUrl=true;
            //check if URL is defined
         allFeeds.forEach((item))=>{
           if(item.url===undefined){
             isUrl=false;
           }
           //check if URL is empty and is a string
           if(item.url !== undefined){
             if(item.url.length===0){
               isUrl=false;
             }
           if(typeof item.url !=='string'){
             isUrl=false;
           }

           }
         }
         });
         //checks flag
         expect(isUrl).toBe(true);
       });


        /**********************************
        : Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         *************************************/
    it('allFeeds Array has NAME',()=>{
      //value for checking valid name
      let isName=true;

      allFeeds.forEach((item))=>{
        if(item.name===undefined){
          //check if NAME has been defined
          isName=false;
        }
        //check length/type if defined
        if(item.name!== undefined){
          if(item.name.length===0){
            isName=false;
          }
          if(typeof item.name!=="string"){
            isName=false;
          }
        }
    });
    //check flag
    expect(isName).toBe(true);
  });


    /*****************
    Write a new test suite named "The menu"
    *******************/
    describe('The menu',()=>{

    })

        /******************
         Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         *****************/
         //check if hidden by default
         it('menu hidden by default',()=>{
           expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

         /********************
         Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          ********************/
          it('menu toggles',()=>{
            //check if visibility toggles
            $('menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').click();
            expect($'body').hasClass('menu-hidden')).toEqual(true);
          });
        });

    /********************
     Write a new test suite named "Initial Entries"
     *********************/
describe('Initial Entries',()=>{

  /*********************
   Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   **********************/
   beforeEach((done)=>{
     loadFeed(0,done);
   });
   it('at least a single .entry element',()=>{
     let element=document.querySelector('.feed');
     //checks if there is at least one .entry element
     expect(element.chldElementCount).toBeGreaterThan(0);
   });

});


    /****************
     Write a new test suite named "New Feed Selection"
     ************/
     describe('New Feed Selection',()=>{
        /********************
         Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         ********************/
         let feedFirst,feedSecond;
        beforeEach((done)=>){
          loadFeed(0, ()=>{
            feedFirst=document.querySelector('.feed').innerHTML;
            loadFeed(1,()=>{
              feedSecond=document.querySelector('.feed').innerHTML;
              done();
            });
          });
        });
        it('content changes', ()=>{
          expect(feedFirst).not.toBe(feedSecond);
        });
  });
}());
