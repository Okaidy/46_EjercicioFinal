$(document).ready( function() {
  console.log('El docuemnto de recipe esta listo  ;)');
	$('.js-menu').hide();

  showItems();
});

function showItems() {
  $('.js-show-recipe').click(function () {
    console.log('recipe');
    $('.page.recipe').removeClass('make');
  });

  $('.js-show-make').click(function () {
    console.log('make');
    $('.page.recipe').addClass('make');
  });
}
