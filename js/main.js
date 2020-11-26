
jQuery(document).ready(function($) {
	var px1 = new Pokedex('Pokedex 1');
	px1.load(function(){
		console.log(px1.listaPokemon);


		$('#pokemon').html(px1.listaPokemon[69].toHtml())
	});

});
