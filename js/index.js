$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });


  $(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});












$(document).ready(function() {
  
  $("#do_login").click(function() { 
     closeLoginInfo();
     $(this).parent().find('span').css("display","none");
     $(this).parent().find('span').removeClass("i-save");
     $(this).parent().find('span').removeClass("i-warning");
     $(this).parent().find('span').removeClass("i-close");
     
      var proceed = true;
      $("#login_form input").each(function(){
          
          if(!$.trim($(this).val())){
              $(this).parent().find('span').addClass("i-warning");
            $(this).parent().find('span').css("display","block");  
              proceed = false;
          }
      });
     
      if(proceed) //everything looks good! proceed...
      {
          $(this).parent().find('span').addClass("i-save");
          $(this).parent().find('span').css("display","block");
      }
  });
  
  //reset previously results and hide all message on .keyup()
  $("#login_form input").keyup(function() { 
      $(this).parent().find('span').css("display","none");
  });

openLoginInfo();
setTimeout(closeLoginInfo, 1000);
});














function openLoginInfo() {
  $(document).ready(function(){ 
    $('.b-form').css("opacity","0.01");
    $('.box-form').css("left","-37%");
    $('.box-info').css("right","-37%");
  });
}

function closeLoginInfo() {
  $(document).ready(function(){ 
    $('.b-form').css("opacity","1");
    $('.box-form').css("left","0px");
    $('.box-info').css("right","-5px"); 
  });
}

$(window).on('resize', function(){
    closeLoginInfo();
});