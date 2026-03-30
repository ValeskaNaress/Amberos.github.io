class Pokemon {
    static all_pokemons = {};

	nom;
	epoque;
	forme;
	type1;
	type2;
	atk_sign_nom;
	atk_sign_type;
	atk_sign_description;
	atk_sign_precision;
	atk_sign_puissance;
	evolution_nom;
	evolution_stade;
	dangerosite;
	titre;
	image;
	dresseurs = [];

	constructor(i) {

		this.nom = pokemon[i]['nom'];
		this.epoque = pokemon[i]['epoque'];
        this.forme = pokemon[i]['forme'];
		this.type1 = pokemon[i]['type1'];
		this.type2 = pokemon[i]['type2'];
		this.atk_sign_nom = pokemon[i]['atk_sign_nom'];
		this.atk_sign_type = pokemon[i]['atk_sign_type'];
		this.atk_sign_description = pokemon[i]['atk_sign_description'];
		this.atk_sign_precision = pokemon[i]['atk_sign_precision'];
		this.atk_sign_puissance = pokemon[i]['atk_sign_puissance'];
		this.evolution_nom = pokemon[i]['evolution_nom'];
		this.evolution_stade = pokemon[i]['evolution_stade'];
		this.dangerosite = pokemon[i]['dangerosite'];

		this.titre = this.initialiserTitre();
		this.image = this.initialiserImage();
		this.dresseurs = this.initialiserDresseurs();
	}

	initialiserTitre() {
		let text = this.nom;
		if (this.epoque != "Moderne") text += " (" + this.epoque + ")";
		return text;
	}

	initialiserImage() {
		var nom_image = String(this.nom); 
		if (this.forme != "Normal") {
			nom_image += "_"+this.forme;
		}
		if (this.epoque != "Moderne") {
			nom_image += "_"+this.epoque;
		}
		nom_image += ".webp";
		return nom_image;
	}

	getAttributes () {
		var ret = {};
		ret["nom"] = this.nom;
		ret["image"] = this.image;
		ret["epoque"] = this.epoque;
		ret["forme"] = this.forme;
		ret["type1"] = this.type1;
		ret["type2"] = this.type2;
		ret["atk_sign_nom"] = this.atk_sign_nom;
		ret["atk_sign_type"] = this.atk_sign_type;
		ret["atk_sign_description"] = this.atk_sign_description;
		ret["atk_sign_precision"] = this.atk_sign_precision;
		ret["atk_sign_puissance"] = this.atk_sign_puissance;
		ret["evolution_nom"] = this.evolution_nom;
		ret["evolution_stade"] = this.evolution_stade;
		ret["dangerosite"] = this.dangerosite;
		ret["titre"] = this.titre;
		ret["dresseurs"] = this.dresseurs;

		let scoreFaiblesses = this.initialiserFaiblesses();
		ret['faiblesses'] = scoreFaiblesses[0];
		ret['resistances'] = scoreFaiblesses[1];
		ret['immunites'] = scoreFaiblesses[2];

		return ret;
	}

	static import_pokemons() {
        for (var i=0; i<pokemon.length; i++) {
			var obj = new Pokemon(i);
			var key = String(obj.nom); 
			if (obj.forme != "Normal") {
				key += "_"+obj.forme;
			}
			if (obj.epoque != "Moderne") {
				key += "_"+obj.epoque;
			}
            Pokemon.all_pokemons[key] = obj;
			preparer_carte_pokemon(key);
        }
	}

	static getPokemons() {
		return Pokemon.all_pokemons;
	}

	initialiserFaiblesses() {
		var faiblesse = {};
		var faible = [];
		var resist = [];
		var immun = [];

		faiblesse = table_des_types[this.type1];
		if (this.type2 != "") {
			var faiblesse2 = table_des_types[this.type2];
			for (let val in faiblesse) {
				faiblesse[val] *= faiblesse2[val];
				
			}
		}
		
		for (let val in faiblesse) {
			let score = faiblesse[val];
			if (score > 1) { faible.push(val)}
			else if (score == 0) {immun.push(val)}
			else if (score < 1) { resist.push(val)}
		}

		return [faible, resist, immun];
	}

	initialiserDresseurs() {
		let list = [];
		for (let val in duo) {
			if (duo[val].pokemon_titre == this.titre) {
				list.push(duo[val].dresseur_titre);
			}
		}
		return list;
	}
}