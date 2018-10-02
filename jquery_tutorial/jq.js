

//JQuery Introduction

// // $('h1').hide();
// //$('h1#heading1').hide();
// // $('h1.heading2').hide();

// $('p span').css('color', 'red');

// $('ul#list li:first').css('color','red');

// $('ul#list li:last').css('color','blue');

// $('ul#list li:even').css('background-color','yellow');

// $('ul#list li:nth-child(3n)').css('list-style','none');

// $(':text').hide();

// $('[href]').css('color', 'red');
// $('a[href="www.yahoo.com"]').css('color', 'blue');

// // $('*').hide(); //hides everything

$(document).ready(function(){ //A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
  
//Jquery Events
// $('#btn1').click(function(){
//   alert('Button Clicked!');
// });

// $('#btn1').on('click',function(){
//   alert('Button Clicked!');
// });

// $('#btn1').click(function(){
//   $('.para1').hide();
// });

// $('#btn2').click(function(){
//   $('.para1').show();
// });

// $('#btn1').click(function(){
//   $('.para1').toggle();
// });

// $('#btn1').dblclick(function(){
//   $('.para1').toggle();
// });
// $('#btn1').hover(function(){
//   $('.para1').toggle();
// });

// $('#btn1').click(function(e){
//   // alert(e.currentTarget.id);
//   // alert(e.currentTarget.innerHTML);
//   //alert(e.currentTarget.outerHTML);
//   // alert(e.currentTarget.className);
//   // console.log(e);
// });

// $('#btn1').on('mousemove', function(e){
//   // console.log(e);
//   console.log('Coordinates: Y: '+e.clientY+' X:'+e.clientX);
// });

// $(document).on('mousemove', function(e){ //can use a this in any id or class
//   // console.log(e);
//   console.log('Coordinates: Y: '+e.clientY+' X:'+e.clientX);
// });


// $(document).on('mousemove', function(e){ //can use a this in any id or class
//   // console.log(e);
//   $('#coords').html('Coordinates: Y: '+e.clientY+' X:'+e.clientX);
// }); // this one can write out the coordinates on the page

// $('input').focus(function(){ //blur is the opposite of this focus
//   // alert('Focus');
//   $(this).css('background', 'pink');
// });

// $('input').blur(function(){
//   // alert('Focus');
//   $(this).css('background', 'white');
// });

// $('input').keyup(function(e){
//   console.log(e.target.value);
// });


// $('select#gender').change(function(){
//   alert('changed');
// });

// $('#form').submit(function(e){
//   e.preventDefault();
//   var name = $('input#name').val();
//   console.log(name);
// });


//Jquery DOM Manipulation
// $('p.para1').css('color','red');

// $('p.para1').css({color: 'red', background:'#ccc'});// if we want an object with multiple properties to put in we make it look like this surrounding by {}

// // $('p.para2').addClass('myClass');

// $('p.para2').removeClass('myClass');

// $('#btn1').click(function(){
//   $('p.para2').toggleClass('myClass');
// });

//$('#myDiv').text('Hello World');//inserts text

// $('#myDiv').html('<h3>Hello World</h3>');//allows you to put tags
// alert($('#myDiv').text());

// $('ul').append('<li>Append List Item</li>');//puts at the end of the list

// $('ul').prepend('<li>Prepend List Item</li>');//puts at the beginning of list

// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');
// $('ul').before('<h4>hello</h4>');//Will put what you use before the element you determine you want it before
// $('ul').after('<h4>world</h4>');//does the opposite of before
// $('ul').empty();
// $('ul').detach();
// $('a').attr('target','_blank');
// alert($('a').attr('href'));
// $('a').removeAttr('target');

// $('p').wrap('<h1>');//wraps one element with the tag
// $('p').wrapAll('<h1>');//wrapps all of the elements in a tag

// $('#newItem').keyup(function(e){
//   var code = e.which;
//   if(code == 13){//13 is the key for enter so each time enter is pressed the text inside will be appended to the ul as a new li
//     e.preventDefault();
//     $('ul').append('<li>' + e.target.value + '</li>');
//   }
// });



// //This code takes in an array and outputs it onto the page
// // var myArr = ['Jay', 'Jody','Junior', 'Nate']

// // $.each(myArr, function(i, val){
// //   // console.log(val);
// //   $('#users').append('<li>'+ val + '</li>');
  
// // });

// var newArr = $('ul#list li').toArray();

// $.each(newArr, function(i, val){
//   console.log(val.innerHTML);

// });

//Jquery Crash Course - Effects and Animations

$('#btnFadeOut').click(function(){
  // $('#box').fadeOut('fast');
  // $('#box').fadeOut('slow');
  $('#box').fadeOut(3000, function(){
    $('#btnFadeOut').text('Its Gone');
  });
});

$('#btnFadeIn').click(function(){
  // $('#box').fadeIn('fast');
  // $('#box').fadeIn('slow');
  $('#box').fadeIn(3000, function(){
    $('#btnFadeIn').text('Its Back');
  });
});

$('#btnFadeTog').click(function(){
  $('#box').fadeToggle(1000);
});

$('#btnSlideDown').click(function(){
  $('#box').slideDown(3000);
});
$('#btnSlideUp').click(function(){
  $('#box').slideUp(3000);
});
$('#btnSlideTog').click(function(){
  $('#box').slideToggle(3000);
});
$('#btnStop').click(function(){
  $('#box').stop();
});

$('#moveRight').click(function(){
  $('#box2').animate({//with animate you have to pass in an object with some options
    left: 500,
    height: '300px',
    width: '300px',
    opacity: '0.5'
  });
});

$('#moveLeft').click(function(){
  $('#box2').animate({//with animate you have to pass in an object with some options
    left: 0,
    height: '100px',
    width: '100px',
    opacity: '1'
  });
});

$('#moveAround').click(function(){
  var box = $('#box2');
  box.animate({
    left: 300
  });
   box.animate({
    top: 300
  });
   box.animate({
    left:0,
    top: 300
  });
   box.animate({
    left: 0,
    top: 0
  });
});

});