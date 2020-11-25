class Pokemon{
	nombre = '';
	id = 0;
	num = '';
	img = '';
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

	constructor(nom,ids,nums,imgs,tipo,altura,peso,caramelo,contc,huevo,sp,avg,sptime,multi,weak,next){
		this.nombre = nom || '';
		this.id = ids || 0;
		this.num = nums || '';
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
		
		console.log('nombre:' + this.nombre);
		console.log('id:' + this.id);
		console.log('numero:' + this.num);
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


	load(){
		console.log('loading Pokemon...');
	}
}