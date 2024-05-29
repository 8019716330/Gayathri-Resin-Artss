
 /* (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'https://png.pngtree.com/thumb_back/fh260/background/20231229/pngtree-vibrant-resin-art-a-multicolored-marble-surface-with-a-mineral-stone-image_13899469.png' },
              { src: 'https://image.slidesdocs.com/responsive-images/background/mesmerizing-geometric-art-a-masterful-turquoise-and-gold-marble-resin-geode-stone-perfect-for-wall-d%C3%A9cor-and-digital-art-powerpoint-background_4c47ecfc24__960_540.jpg' },
              { src: 'https://c1.wallpaperflare.com/preview/48/216/918/glass-ball-devil-s-wall-resin-k%C3%B6nigstein.jpg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  function sendwhatsapp(){

    var phonenumber = "+919866760988 ";


    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var country = document.querySelector(".country").value;
    var arts = document.querySelector(".arts").value;
    var message = document.querySelector(".message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"Name : "+name+"%0a"
    +"Email : "+email+"%0a"
    +"City: "+country+"%0a"
    +"Number of Arts: "+arts+"%0a"
    +"Message : "+message
    +"%0a%0a";

    window.open(url, '_blank').focus();
   }




*/


   (function ($) {
    "use strict";
  
    // NAVBAR
    $('.navbar-collapse a').on('click', function () {
      $(".navbar-collapse").collapse('hide');
    });
  
    $(function () {
      $('.hero-slides').vegas({
        slides: [
          { src: 'https://png.pngtree.com/thumb_back/fh260/background/20231229/pngtree-vibrant-resin-art-a-multicolored-marble-surface-with-a-mineral-stone-image_13899469.png' },
          { src: 'https://image.slidesdocs.com/responsive-images/background/mesmerizing-geometric-art-a-masterful-turquoise-and-gold-marble-resin-geode-stone-perfect-for-wall-d%C3%A9cor-and-digital-art-powerpoint-background_4c47ecfc24__960_540.jpg' },
          { src: 'https://c1.wallpaperflare.com/preview/48/216/918/glass-ball-devil-s-wall-resin-k%C3%B6nigstein.jpg' },
          { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_0aYcgvGLoF0N_kb46hp45ccTQ-ZyesiNBPllk3nroy_xE__bVGPZlczrxX5BUXjePo&usqp=CAU'},
          { src: 'https://st2.depositphotos.com/20220842/44668/i/450/depositphotos_446683546-stock-photo-abstract-marble-resin-art-background.jpg'},
          { src: 'https://c4.wallpaperflare.com/wallpaper/903/561/262/volume-of-oil-wallpaper-preview.jpg'}
        ],
        timer: false,
        animation: 'kenburns',
      });
    });
  
    // CUSTOM LINK
    $('.smoothscroll').click(function () {
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped, header_height);
      return false;
  
      function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;
  
        $('body,html').animate({
          scrollTop: totalScroll
        }, 300);
      }
    });
  })(window.jQuery);
  
  function sendwhatsapp(){

    var phonenumber = "+918309489563 ";


    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var city = document.querySelector(".city").value;
    var phone = document.querySelector(".phone").value;
    var arts = document.querySelector(".pname").value;
    var message = document.querySelector(".message").value;
    var pname = document.querySelector(".pname").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"Name : "+name+"%0a"
    +"Email : "+email+"%0a"
    +"City: "+city+"%0a"
    +"Phone Number:"+phone+"%0a"
    +"Product Name: "+pname+"%0a"
    +"Message : "+message
    +"%0a%0a";

    window.open(url, '_blank').focus();
   }