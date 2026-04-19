class Dresseur {
    static all_dresseurs = {};

    nom;
    region;
    epoque;
    role;
    grade;
    aime;
    aime_pas;
    caractere;
    relations;
    epithetes;
    descendant;
    infos_sup;
    titre;
    image;
    pokemons;

	constructor(i) {

		this.nom = dresseur[i]['nom'];
        this.region = dresseur[i]['region'];
		this.epoque = dresseur[i]['epoque'];
        this.role = dresseur[i]['role'];
        this.grade = dresseur[i]['grade'];
        this.aime = dresseur[i]['aime'];
        this.aime_pas = dresseur[i]['aime_pas'];
        this.caractere = dresseur[i]['caractere'];
        this.relations = dresseur[i]['relations'];
        this.epithetes = dresseur[i]['epithetes'];
        this.descendant = dresseur[i]['descendant'];
        this.infos_sup = dresseur[i]['infos_sup'];

		this.titre = this.initialiserTitre();
		this.image = this.initialiserImage();
        this.pokemons = this.initialiserPokemons();
	}

	initialiserTitre() {
		let text = this.nom;
        if (this.epoque != 0) text += " (" + this.epoque + ")";
		return text;
	}

	initialiserImage() {
		var nom_image = String(this.nom);
        if (this.epoque != 0) nom_image += "_" + this.epoque;
		return nom_image;
	}

	getAttributes () {
		var ret = {};
        ret['nom'] = this.nom;
        ret['region'] = this.region;
		ret['epoque'] = this.epoque;
        ret['role'] = this.role;
        ret['grade'] = this.grade;
        ret['aime'] = this.aime;
        ret['aime_pas'] = this.aime_pas;
        ret['caractere'] = this.caractere;
        ret['relations'] = this.relations;
        ret['epithetes'] = this.epithetes;
        ret['descendant'] = this.descendant;
        ret['infos_sup'] = this.infos_sup;
        ret['titre'] = this.titre;
        ret['image'] = this.image;
        ret['pokemons'] = this.pokemons;
		return ret;
	}

	static import_dresseurs() {
        for (var i=0; i<dresseur.length; i++) {
			var obj = new Dresseur(i);
			var key = String(obj.nom);
            Dresseur.all_dresseurs[key] = obj;
			preparer_carte_dresseur(key);
        }
	}

	static getDresseurs() {
		return Dresseur.all_dresseurs;
	}

	initialiserPokemons() {
		let list = [];
		for (let val in duo) {
			if (duo[val].dresseur_titre == this.titre) {
				list.push(duo[val].pokemon_titre);
			}
		}
		return list;
	}
}
