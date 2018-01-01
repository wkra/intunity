document.addEventListener("DOMContentLoaded", function () {


  // smooth scroll
  $(function() {
    $('nav a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  // end smooth scroll

//   // social media icons
// (function(){
//   $('.social-media>a').each(function(){$(this).load('svg/' + $(this).attr('data-icon') + '.svg')});
// })();
//   // end social media icons


  // parallax effect
  $('#header').parallax({imageSrc: './img/bg.jpg'});
  $('.parallax-window').parallax({imageSrc: './img/photobg.jpg'}); 
  //end parralax

  // intunity team section function
  (function(){
    //path variable
    var pathname = window.location.pathname; 

    // get data
    // en
    if (pathname === "/en.html"){
      $.ajax({
        url: "./data/intunity-team_en.json",
        type: "GET",
        cache: true,
        success: function (data, status, error) {
          intunityTeamData = data;
          // intunityTeamData = sort(data, sortCity);
          printTeam(intunityTeamData);
        },
        error: function (data, status, error) {
          console.log(status)
          console.log(error)
        }
      });
    } else {
      // pl
      $.ajax({
        url: "./data/intunity-team.json",
        type: "GET",
        cache: true,
        success: function (data, status, error) {
          intunityTeamData = data;
          // intunityTeamData = sort(data, sortCity);
          printTeam(intunityTeamData);
        },
        error: function (data, status, error) {
          console.log(status)
          console.log(error)
        }
      });
    }


    var intunityTeamData = [];

     // print team
    function printTeam(data){
      var currCity = '';
      var city = '<div class="city"><h2>%city%</h2></div><div class="city--team"></div>';
      var person = '<div class="person"><div class="person--photo"><img src="./img/default-person/smallphoto.jpg" alt="%nameAlt%" class="img-responsive"></div><div class="person--name"><h3>%name%</h3><h4>%instrument%</h4><h5 class="read-more" data-moreid="%moreid%">więcej...</h5></div></div><div class="person-text"></div>';

      for (var i = 0; i < data.length; i++){
        if (data[i].city !== currCity){
          if (data[i] !== 0){
            
          }
          currCity = data[i].city;
          var newCity = city.replace('%city%', data[i].city);
          $('.intunityTeamContent').append(newCity)
        }
        var newPerson = '';
        newPerson = person.replace('%name%', data[i].name);
        newPerson = newPerson.replace('%instrument%', data[i].instrument);
        newPerson = newPerson.replace('%nameAlt%', data[i].name);

        // search small photo
        if (data[i].smallphoto !== '' && data[i].url !== ''){
          newPerson = newPerson.replace('default-person', data[i].url);
          newPerson = newPerson.replace('smallphoto.jpg', data[i].smallphoto);
        }
        // if /en.html change "więcej..."
        var pathname = window.location.pathname; 
        
        if (pathname === "/en.html"){
          newPerson = newPerson.replace('więcej...', 'more...');
        }
        // if no person full text remove "więcej"
        // en
        if (pathname === "/en.html"){
          if (data[i].text === ''){
            newPerson = newPerson.replace('<h5 class="read-more" data-moreid="%moreid%">more...</h5>', '');
          }
        } else {
          // pl
          if (data[i].text === ''){
            newPerson = newPerson.replace('<h5 class="read-more" data-moreid="%moreid%">więcej...</h5>', '');
          }
        }

        if (data[i].text !== ''){
          newPerson = newPerson.replace('%moreid%', i);
        }
        // print person
        $('.city--team:last').append(newPerson);

      }
    }


    //event listener
    $('.intunityTeamContent').on( 'click', '.read-more', readMoreFunc);  
    
    //path variable
    var pathname = window.location.pathname; 
    
    // read more function
    function readMoreFunc(){

      // bigphoto template
      var bigPhoto = '<img src="./img/%url%/%bigphoto%" alt="%alt%" class="img-responsive">';
      var newBigPhoto = '';

      //more text change
      var changeMore = 'zwiń...';
      var originalMore = 'więcej...';
      var changeMoreEn = 'less...';
      var originalMoreEn = 'more...';

      // get id
      var id = Number($(this).attr('data-moreid'));

      // classes
      var openClass = 'person-opened';
      var closeClass = 'person-closed';
      
      // put bigphoto
      if (intunityTeamData[id].bigphoto !== ''){
        newBigPhoto = bigPhoto.replace('%url%', intunityTeamData[id].url);
        newBigPhoto = newBigPhoto.replace('%bigphoto%', intunityTeamData[id].bigphoto);
        newBigPhoto = newBigPhoto.replace('%alt%', intunityTeamData[id].name);
      } 
      // first click
      if (!$(this).parent().parent().next().hasClass(closeClass) && !$(this).parent().parent().next().hasClass(openClass)){
        
        // put text
        $(this).parent().parent().next()
        .addClass(openClass)
        .html('<h2><strong>' + intunityTeamData[id].name + '</strong></h2>' + newBigPhoto + intunityTeamData[id].text);
        
        //change read more
        // en ver
        if (pathname === "/en.html"){
          $(this).text(changeMoreEn);
        }
        else {
          // pl ver
          $(this).text(changeMore);
        } 
        

      } else {
        // next clicks

        // toggle class
        $(this).parent().parent().next()
        .toggleClass(openClass).toggleClass(closeClass);
        
        // toggle read more
        // en ver
        if (pathname === "/en.html"){
          
          if ($(this).text() === changeMoreEn){
            $(this).text(originalMoreEn);
          } else {
            $(this).text(changeMoreEn);
          }
        }
        else {
          // pl ver
          if ($(this).text() === changeMore){
            $(this).text(originalMore);
          } else {
            $(this).text(changeMore);
          }
        }
        

      }
    }
    // end read more function



  })();
  // end intunity team

  // OBJECT PARALLAX EFFECT
(function(){
  
    var windowHeight = $(window).height();
    var windowScrollPosTop = $(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPosTop;
    var windowWidth = $(window).width();
  
    // start position flag
    var startFlagScroll = false;
  
    function parallaxEffectFunc(){
      windowHeight = $(window).height();
      windowScrollPosTop = $(window).scrollTop();
      windowScrollPosBottom = windowHeight + windowScrollPosTop;
      windowWidth = $(window).width();
  
      // do not animate on small screen
      if (windowWidth < 768){
        myScrollVal(0, 0, '.photo-1>img');
        myScrollVal(0, 0, '.photo-2>img');
      } else {
        // SET OBJECT
        myScrollVal(-40, 40, '.photo-1>img');
        myScrollVal(30, -30, '.photo-2>img');

        //set start position
        if (startFlagScroll === false){
          startFlagScroll = true;
        }
      }

  
    };
    
    parallaxEffectFunc();
    $(window).scroll(parallaxEffectFunc);
  
    function myScrollVal(startValue, endValue, object, direction){
      if (direction === undefined){
        direction = 'Y';
      }

      var objectOffset = $(object).offset();
      var objectOffsetTop = objectOffset.top;
      var objectOffsetBottom = objectOffsetTop + $(object).outerHeight();
  
      if (windowScrollPosBottom > objectOffsetTop && windowScrollPosTop < (objectOffsetTop+$(object).height())){
  
  //      var scrollTop = $(this).scrollTop();
        $(object).css('transform', 'translate' + direction + '(' + Math.round((startValue+(((windowScrollPosBottom-objectOffsetTop)*(endValue-startValue))/(windowHeight+(objectOffsetBottom-objectOffsetTop))))) + '%)');
      } 
      else if (startFlagScroll === false){
  //      $(this).scrollTop();
        $(object).css('transform', 'translate' + direction + '(' + startValue + '%)');
      }
  
    };
  
  })();
    //end OBJECT PARALLAX EFFECT

// end DOMContentLoaded
});
