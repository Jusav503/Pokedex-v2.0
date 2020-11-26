//para crear una classe, 
//una classe es como un molde en una fabrica, 
//la idea es poder crear tantas pokedex como queramos
class Pokedex{
	nombre = '';
	listaPokemon = null;
	paginacion = 12;
	columnas = 4;


	//es un metodo que se ejecuta por defecto 
	//cuando creamos un objeto de esta clse
	constructor(nom,pag,col){
		this.nombre = nom || '';
		this.paginacion = pag || 12;
		this.columnas = col || 4;
		console.log('constructor');
		console.log('nombre:' + this.nombre);
		console.log('paginacion:' + this.paginacion);
		console.log('columnas:' + this.columnas);
	}

	//Petición REST a la base de datos, para cargar los pokemon
	// new Pokemon(.....) -> en listaPokemon (this.listaPokemon)
	load(callback){
		console.log('loading Pokemon...');
		var _this = this;
		$.ajax({
		  url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
		  method:'get', //POST
		  dataType: 'json' //string, xml, json, script, or html
		})
		.done(function(d) { //success
			console.log(d);
			_this.listaPokemon = new Array();
			for (var i = 0; i < d.pokemon.length; i++) {
				var p = d.pokemon[i];  				//ids,nums,nam,imgs,tipo,altura,peso,caramelo,contc,huevo,sp,avg,sptime,multi,weak,next
				_this.listaPokemon.push(new Pokemon(p.id, p.num, p.name, p.img, p.type, p.height));
			}
		})
		.fail(function(e) {
			console.error("error");
			$('.container').html('<h3>error, no se han podido cargar los pokemon</h3>');
		})
		.always(function() {
			callback();
		});

	}

	toHtml(){
		var r = '';

		for (var i = 0; i < this.listaPokemon[i].length; i++) {
			r += this.listaPokemon[i].toHtml();
		}
		return r;
	}


	//TODO: crear metodo añadir pokemon
}