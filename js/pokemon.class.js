class Pokemon{
	id = 0; //id de pokemon
	num = ''; //número de pokemon
	name = ''; //nombre del pokemon
	img = ''; //imagen del pokemon
	type = [];
	height = '';
	weight = '';
	candy = '';
	candy_count = 0;
	egg = '';
	spawn_chance = 0;
	avg_spawns = 0;
	spawn_time = '';
	multipliers = [];
	weakness = [];
	next_evolution = [];

	constructor(ids,nums,nam,imgs,tipo,altura,peso,caramelo,contc,huevo,sp,avg,sptime,multi,weak,next){
		this.id = ids || 0;
		this.num = nums || '';
		this.nombre = nam || '';
		this.img = imgs || '';
		this.type = tipo || [];
		this.height = altura || '';
		this.weight = peso || '';
		this.candy = caramelo || '';
		this.candy_count = contc || 0;
		this.egg = huevo || '';
		this.spawn_chance = sp || 0;
		this.avg_spawns = avg || 0;
		this.spawn_time = sptime || '';
		this.multipliers = multi || [];
		this.weakness = weak || [];
		this.next_evolution = next || [];
		this.toConsole();
	}

	toConsole(){
		console.log('id:' + this.id);
		console.log('numero:' + this.num);
		console.log('nombre:' + this.nombre);
		console.log('imagen: ' + this.img);
		console.log('tipo:' + this.type);
		console.log('altura:' + this.height);
		console.log('peso:' + this.weight);
		console.log('caramelo:' + this.candy);
		console.log('contador caramelos:' + this.candy_count);
		console.log('huevo:' + this.egg);
		console.log('ratio spawn:' + this.spawn_chance);
		console.log('avg:' + this.avg_spawns);
		console.log('tiempo spawn:' + this.spawn_time);
		console.log('multiplicador:' + this.multipliers);
		console.log('debilidad:' + this.weakness);
		console.log('evoluciones:' + this.next_evolution);
	}

	toHtml(){
		var p = '';

		p+= '<div>' + 'id:' + this.id + '</div>';
		p+= '<div>' + 'numero:' + this.num + '</div>';
		p+= '<div>' + 'nombre:' + this.nombre + '</div>';
		p+= '<div>' + 'imagen: ' + this.img + '</div>'; // '<img src="+this.img">'
		p+= '<div>' + 'tipo:' + this.type + '</div>';
		p+= '<div>' + 'altura:' + this.height + '</div>';
		p+= '<div>' + 'peso:' + this.weight + '</div>';
		p+= '<div>' + 'caramelo:' + this.candy + '</div>';
		p+= '<div>' + 'contador caramelos:' + this.candy_count + '</div>';
		p+= '<div>' + 'huevo:' + this.egg + '</div>';
		p+= '<div>' + 'ratio spawn:' + this.spawn_chance + '</div>';
		p+= '<div>' + 'avg:' + this.avg_spawns + '</div>';
		p+= '<div>' + 'tiempo spawn:' + this.spawn_time + '</div>';
		p+= '<div>' + 'multiplicador:' + this.multipliers + '</div>';
		p+= '<div>' + 'debilidad:' + this.weakness + '</div>';
		p+= '<div>' + 'evoluciones:' + this.next_evolution + '</div>';


		return p;
	}
}