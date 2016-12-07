$(document).ready( function() {
  console.log('El docuemnto de recipe esta listo  ;)');
	$('.js-menu').hide();

  showItems();

  $('.js-back').click(function() {
    window.location='index.html';
  });
});

function showItems() {
  $('.js-show-recipe').click(function () {
    console.log('recipe');
    $('.page.recipe').removeClass('make');
    $(this).addClass('active');
    $('.js-show-make').removeClass('active');
  });

  $('.js-show-make').click(function () {
    console.log('make');
    $('.page.recipe').addClass('make');
    $(this).addClass('active');
    $('.js-show-recipe').removeClass('active');
  });
}
