$(document).ready( function() {
	$('.js-back').hide();
	
	printNews();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

function printNews () {
	var nueva = $('.callout-news').children('p');
  //console.log(nueva);
  nueva.text('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);

	for(var i = 0; i < recipesArray.length; i++) {
    //console.log(recipesArray[i]);
    if (recipesArray[i].highlighted == true) {
      var recipe = recipesArray[i];
      // console.log(recipe);
      renderRecipe(recipe);
    }
  }
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

  var a = $('<a></a>');
  a.addClass('item-recipe');

  var spanAttribution = $('<span></span');
  spanAttribution.addClass('attribution');

  var spanTitle = $('<span></span');
  spanTitle.addClass('title-recipe');
  spanTitle.text(recipe.title);

  var spanMetadata = $('<span></span>');
  spanMetadata.addClass('metadata-recipe');

  var spanAuthor = $('<span></span>');
  spanAuthor.addClass('author-recipe');
  spanAuthor.text(recipe.source.name);

  var spanBookmarks = $('<span></span>');
  spanBookmarks.addClass('bookmarks-recipe');

  var spanIcon = $('<span></span>');
  spanIcon.addClass('icon-bookmark');

  var img = $('<img/>');
  img.attr('src', recipe.source.url);

  spanBookmarks.append(spanIcon);
  spanMetadata.append(spanAuthor, spanBookmarks);
  spanAttribution.append(spanTitle, spanMetadata);
  a.append(spanAttribution, img);

  $('.list-recipes').append(a);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


