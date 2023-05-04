






$('.singUpButton a').click(function(){
   $(".login-area").hide();
})


// login icon

$(".icons .login").click(function(){
    $(".login-singup-section").css('display', 'block');   
})


$(".icons .login").click(function(e){
    e.preventDefault();
    $(".signUP-area .login-form2").show();
   
});

$(".icons .signup").click(function(e){
    e.preventDefault();
    $(".signUP-area").show();
   
})




// login form close button

$(".signUP-area .right-text span").click(function(){
    $('.signUP-area').css('display','none');
   
});
$(".login-singup-section .right-text span").click(function(){
    $('.login-singup-section').css('display','none');
   
})

// login form close button

// 

    $("header .signup i").click(function(e){
        e.preventDefault();
        $('.signUP-area').css ('display','block');
       
    })
    $("header .account i").click(function(e){
        e.preventDefault();
        $('.login-area').css ('display','block');
       
    })
    $("header .loginButton #SignUP").click(function(e){
        e.preventDefault();
        $('.signup-area').css ('display','block');
       alert('hello')
    })
    
    $('.login-singup-section .layer').click(function(){
        $('.login-singup-section').hide();
        
    })
 $('.signUP-area .layer').click(function(){
        $('.signUP-form').hide();
        
    })



// login form to signup form

$(".login-singup-section .singUpButton #SignUP").click(function(){
    $('.signUP-area').css('display','block');
    $('.login-singup-section').hide();

});

$(".signUP-area .loginButton #login").click(function(e){
    e.preventDefault();
    $('.signUP-area').css('display','none');
    $('.login-singup-section').show();

})





// catagory menu.

$('.catagories2').click(function(){
    $(".catagory-list2 .lists2").show(100);
    $('.catagory-list .lists').hide();
    $(".navigation2 .layer2").css('display','block');
});
$('.catagories').click(function(){
    $('.catagory-list .lists').toggle(300);
})

$('.navigation2 .layer2').click(function(){
    $(".catagory-short-list").hide(100);
})





$('.filter-area .container').click(function(){
    $(' .filter-out-layer').css('display','block');
    
})
$('#remove-filter').click(function(){
    $('.filter-out-layer').toggle(300);
    
});








// Responsive Catagory menu/ Navigation2


    $(".navigation2 .catagories-text2").click(function(){
        $('.navigation2 .catagory-short-list').css('display', 'block');
      
    })


    $(".navigation2 .catagory-botton").click(function(){
        $('.catagory-list2').css('display', 'block');
        $('.navigation2 .menu-area2').hide();
    })
    $(".navigation2 .menu-botton").click(function(){
        $('.catagory-list2').hide();
        $('.navigation2 .menu-area2').show();
    })
    




///   FAQ

    $('.blog-body .qus-ans1 ').click(function(){
        $('.blog-body .qus-ans1 p').toggle(this);
        $('qus-ans1 .pluse').toggle();
    })
    $('.blog-body .qus-ans2 ').click(function(){
        $('.blog-body .qus-ans2 p').toggle(this);
          $('qus-ans2 .pluse').toggle();
    })
    $('.blog-body .qus-ans3 ').click(function(){
        $('.blog-body .qus-ans3 p').toggle(this);
          $('qus-ans3 .pluse').toggle();
    })












$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoPlay: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
});



