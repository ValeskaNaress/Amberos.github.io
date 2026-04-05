class Lune {
    static all_lunes = {};

    nom;
    image;
    qualites;
    rites;

	constructor(i) {

		this.nom = lune[i]['nom'];
        this.image = lune[i]['image'];
		this.qualites = lune[i]['qualites'];
        this.rites = lune[i]['rites'];
	}

	getAttributes () {
		var ret = {};
        ret['nom'] = this.nom;
        ret['image'] = this.image;
		ret['qualites'] = this.qualites;
        ret['rites'] = this.rites;
		return ret;
	}

	static import_lunes() {
        for (var i=0; i<lune.length; i++) {
			var obj = new Lune(i);
			var key = String(obj.nom);
            Lune.all_lunes[key] = obj;
			preparer_carte_lune(key);
        }
	}

	static getLunes() {
		return Lune.all_lunes;
	}
}