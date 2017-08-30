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
  $('.parallax-window').parallax({imageSrc: '../img/photobg.jpg'}); 
  $('.parallax-window2').parallax({imageSrc: '../img/bg.jpg'});
  //end parralax

  // intunity team section function
  (function(){

    // get data
    $.ajax({
      url: "../data/intunity-team.json",
      type: "GET",
      cache: true,
      success: function (data, status, error) {
        intunityTeamData = sort(data, sortCity);
        printTeam(intunityTeamData);
      },
      error: function (data, status, error) {
        console.log(status)
        console.log(error)
      }
    });

    var intunityTeamData = [];
    var sortCity = ['Kraków', 'Wrocław', 'Łódź', 'Warszawa'];

    // sort data by sortCity
    function sort(data, template){
      var newData = [];
      for (var i = 0; i < template.length; i++){
        for (var ii = 0; ii < data.length; ii++){
          if (template[i] === data[ii].city){
            newData.push(data[ii])
          }
        }
      }
      return newData;
    };

     // print team
    function printTeam(data){
      console.log(data);
      var currCity = '';
      var city = '<div class="city"><h2>%city%</h2></div><div class="city--team"></div>';
      var person = '<div class="person %personEvenOdd%"><div class="person--photo"><img src="/img/default-person/smallphoto.jpg" alt="%nameAlt%" class="img-responsive"></div><div class="person--name"><h3>%name%</h3><h4>%instrument%</h4><h5 class="read-more" data-moreid="%moreid%">więcej...</h5></div></div><div class="person-text %contentid%"></div>';

      for (var i = 0; i < data.length; i++){
        if (data[i].city !== currCity){
          if (data[i] !== 0){
            
          }
          currCity = data[i].city;
          var newCity = city.replace('%city%', data[i].city);
          $('.intunityTeamContent').append(newCity)
        }
        var newPerson = '';
        if (i%2 === 0){
          newPerson = person.replace('%personEvenOdd%', 'personEven');
        }
        if (i%2 !== 0){
          newPerson = person.replace('%personEvenOdd%', 'personOdd');
        }
        if (data[i].smallphoto !== '' && data[i].url !== ''){
          newPerson = newPerson.replace('default-person', data[i].url);
          newPerson = newPerson.replace('smallphoto.jpg', data[i].smallphoto);
        }
        newPerson = newPerson.replace('%nameAlt%', data[i].name);
        newPerson = newPerson.replace('%name%', data[i].name);
        newPerson = newPerson.replace('%instrument%', data[i].instrument);

        if (data[i].text === ''){
          newPerson = newPerson.replace('<h5 class="read-more" data-moreid="%moreid%">więcej...</h5>', '');
        }
        if (data[i].text !== ''){
          newPerson = newPerson.replace('%moreid%', i);
          
        }
        newPerson = newPerson.replace('%contentid%', 'id'+i);
        $('.city--team:last').append(newPerson);

      }
    }

    var bigPhoto = '<img src="/img/%url%/%bigphoto%" alt="%alt%" class="img-responsive">';
    //event listener
    $('.intunityTeamContent').click(function(el){
      if (el.target.className === 'read-more'){
        var id = Number(el.target.attributes[1].value);
        if (intunityTeamData[id].bigphoto !== ''){
          var newBigPhoto = bigPhoto.replace('%url%', intunityTeamData[id].url);
          newBigPhoto = newBigPhoto.replace('%bigphoto%', intunityTeamData[id].bigphoto);
          newBigPhoto = newBigPhoto.replace('%alt%', intunityTeamData[id].name);
          $('.id'+id).html("<h2>" + intunityTeamData[id].name + "</h2>" + newBigPhoto + intunityTeamData[id].text).addClass('person-opened');
        } else {
          $('.id'+id).html("<h2>" + intunityTeamData[id].name + "</h2>" + intunityTeamData[id].text).addClass('person-opened');
        }
       
      }
      // var windowWidth = $(window).width()
      // if (el.target.className === 'read-more'){
      //   var id = Number(el.target.attributes[1].value);
      //   if (windowWidth >= 768 && id%2 === 0){
      //     $('.id'+(id+1)).html("<h2>" + intunityTeamData[id].name + "</h2>" + intunityTeamData[id].text).addClass('person-opened')
      //   } else {
      //     $('.id'+id).html("<h2>" + intunityTeamData[id].name + "</h2>" + intunityTeamData[id].text).addClass('person-opened')
      //   }
        
      // }

    })
    // $('.intunityTeamContent').on( "click", ".read-more", function() {
    //   console.log($( this ).parent().parent().next())
    // });
    // $('.intunityTeamContent').on( "click", ".read-more", function() {
    //   console.log($( this ).parent().parent().next())
    // });

  })()
  // end intunity team

// end DOMContentLoaded
});
