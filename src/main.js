const liste = document.querySelector("#liste");
const liste_petite = document.querySelector("#liste_petite");
const mapDiv = document.getElementById('map');
mapDiv.style.display = "none";

initialiserMap();

/* ajouter le bouton concerné */
const btn_import_pk = document.querySelector("#bouton_import_pokemon");
const btn_import_dr = document.querySelector("#bouton_import_dresseur");
const btn_import_ln = document.querySelector("#bouton_import_lune");
const btn_import_map = document.querySelector("#bouton_import_map");

btn_import_pk.addEventListener("click", import_datas_pokemon);
btn_import_dr.addEventListener("click", import_datas_dresseur);
btn_import_ln.addEventListener("click", import_datas_lune);
btn_import_map.addEventListener("click", import_datas_map);

function resetAll() {
    btn_import_dr.value = "Afficher les dresseurs";
    btn_import_pk.value = "Afficher les pokemons";
    btn_import_ln.value = "Afficher les lunes";
    btn_import_map.value = "Afficher la map";
    liste.innerHTML = "";
    liste_petite.innerHTML = "";
    nettoyerCarte();
    liste.classList = "liste";
    liste_petite.classList = "liste_petite";
}

function nettoyerCarte() {
     if (window.map instanceof L.Map) {
        window.map.eachLayer(layer => window.map.removeLayer(layer));
        window.map.setView([0, 0], 0);
    }
    mapDiv.style.display = "none";
}

/* POKEMONS */
function import_datas_pokemon(){
    if (btn_import_pk.value == "Afficher les pokemons") {
        resetAll();
        liste.classList += " card";
        Pokemon.import_pokemons();
        btn_import_pk.value = "Pokemons affichée !";
    }
}

function preparer_carte_pokemon(val) {
    var str = "";
    var infos = Pokemon.all_pokemons[val].getAttributes();
    str += initialiser_carte_pokemon(infos);
    liste.innerHTML += str;
}

function initialiser_carte_pokemon(infos) {
    var str = "";
    str += "<div id='carte_type' class='" + infos.type1 + " carte_column zone'>";

        str += "<div id='carte_entete' class='zone carte_left carte_row carte_justify_space'>";
            str += "<h2>" + infos.titre +"</h2>";
            str += "<div class='carte_row carte_justify_right'>";
                str += "<img class='img_20' src='images/icons/types/" + infos.type1 +".png'>";
                if(infos.type2 != "") str += "<img class='img_20 marg_left' src='images/icons/types/" + infos.type2 + ".png'>";
            str += "</div>";
        str += "</div>";

        str += "<div id='carte_img' class='zone Blanc self_center'>";
            str += "<img class='img_50' src='images/pokemons/" + infos.image + "'>";
        str += "</div>";

        str += "<div id='carte_dresseur' class='zone Blanc carte_row carte_left'>";
            str += "<p><b>Dresseur(s) : </b>" + infos.dresseurs.join(", ") + "</p>";
        str += "</div>";

        if (infos.atk_sign_nom != "") {
        str += "<div id='carte_talents' class='zone Blanc carte_column space carte_left'>";
            str += "<p class='bold'>Attaque signature :&nbsp</p>";
            str += "<ul>";
                str += "<li><b>Nom : </b>" + infos.atk_sign_nom +"</li>";
                str += "<li><b>Type : </b>" + infos.atk_sign_type +"</li>";
                str += "<li><b>Précision : </b>" + infos.atk_sign_precision +"%</li>";
                str += "<li><b>Puissance : </b>" + infos.atk_sign_puissance +"</li>";
            str += "</ul>";
            str += "<p>" + infos.atk_sign_description + "</p>";
        str += "</div>";
        }

        str += "<div id='carte_infos' class='zone Blanc carte_column carte_left'>";
            
            str += "<div id='carte_dangerosite' class='carte_row space'>";
                str += "<p><b>Dangerosité : </b>" + infos.dangerosite + "</p>";
            str += "</div>";

            str += "<div id='carte_table_des_types' class='carte_column space'>";
                str += "<p class='bold'>Faiblesses :&nbsp</p>";
                str += "<div id='carte_faiblesses' class='carte_row space'>";
                    for (let val in infos.faiblesses) {
                        str += "<img class='img_8 marge_left' src='images/icons/types/" + infos.faiblesses[val] +".png'>";
                    }
                str += "</div>";

                str += "<p class='bold'>Résistances :&nbsp</p>";
                str += "<div id='carte_resistances' class='carte_row space'>";
                    for (let val in infos.resistances) {
                        str += "<img class='img_8 marge_left' src='images/icons/types/" + infos.resistances[val] +".png'>";
                    }
                str += "</div>";
            str += "</div>";
        str += "</div>";
    str += "</div>";
    return str;
}

/* DRESSEURS */
function import_datas_dresseur(){
    if (btn_import_dr.value == "Afficher les dresseurs") {
        resetAll();
        liste.classList += " card";
        Dresseur.import_dresseurs();
        btn_import_dr.value = "Dresseurs affichés !";
    }
}

function preparer_carte_dresseur(val) {
    var str = "";
    var infos = Dresseur.all_dresseurs[val].getAttributes();
    str += initialiser_carte_dresseur(infos);
    liste.innerHTML += str;
}

function initialiser_carte_dresseur(infos) {
    var str = "";
    str += "<div id='carte_type' class='Dresseur carte_dresseur_grid zone zone_large'>";
        str += "<div id='dresseur_img' class='zone_dresseur Blanc carte_center self_center'>";
            str += "<img class='img_dresseur' src='images/dresseurs/" + infos.image + "'>";
        str += "</div>";

        str += "<div id='dresseur_entete' class='zone_dresseur carte_left'>";
            str += "<h1>" + infos.nom + "</h1>";
        str += "</div>";
        
        str += "<div id='dresseur_description' class='zone_dresseur Blanc carte_column carte_left'>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Rôle(s) : </b>" + infos.role + "</p>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Grade : </b>" + infos.grade + "</p>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Pokemon(s) : </b>" + infos.pokemons.join(", ") + "</p>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Caractère : </b>" + infos.caractere + "</p>";
            str += "</div>";
            str += "<div class='margin'>";
                str += "<p><b>Goûts :&nbsp</b></p>";
                str += "<ul>";
                    str += "<li><b>Aime : </b>" + infos.aime + "</li>";
                    str += "<li><b>N'aime pas : </b>" + infos.aime_pas + "</li>";
                str += "</ul>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Relations : </b>" + infos.relations +"</p>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Epithètes : </b>" + infos.epithetes + "</p>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Descendant(e) : </b>" + infos.descendant + "</p>";
            str += "</div>";
            str += "<div class='carte_row margin'>";
                str += "<p><b>Région et époque : </b>" + infos.region + " (" + infos.epoque + ")</p>";
            str += "</div>";
        str += "</div>";

        str += "<div id='dresseur_bonus' class='zone_dresseur Blanc carte_column carte_left'>";
            str += "<h2>Informations supplémentaires :&nbsp</h2>";
            str += "<p>" + infos.infos_sup + "</p>";
        str += "</div>";
    str += "</div>";
    return str;
}

/* LUNES */
function import_datas_lune(){
    if (btn_import_ln.value == "Afficher les lunes") {
        resetAll();
        liste_petite.classList += " card";
        Lune.import_lunes();
        btn_import_ln.value = "Lunes affichés !";
    }
}

function preparer_carte_lune(val) {
    var str = "";
    var infos = Lune.all_lunes[val].getAttributes();
    str += initialiser_carte_lune(infos);
    liste_petite.innerHTML += str;
}

function initialiser_carte_lune(infos) {
    var str = "";
    str += "<div id='carte_type' class='Lune zone zone_large carte_column'>";
        str += "<div class='carte_row'>";
            str += "<div id='lune_img' class='zone_lune carte_center self_center'>";
                str += "<img class='img_lune' src='images/lunes/" + infos.image + "'>";
            str += "</div>";

            str += "<div id='lune_entete' class='zone_lune carte_left'>";
                str += "<h1>" + infos.nom + "</h1>";
            str += "</div>";
        str += "</div>";
        
        str += "<div id='lune_description' class='zone_lune Blanc carte_column carte_left margin'>";
            str += "<h2>Qualités :&nbsp</h2>";
            str += "<p>" + infos.qualites + "</p>";
        str += "</div>";

        str += "<div  id='lune_bonus' class='zone_lune Blanc carte_column carte_left'>";
            str += "<h2>Rites :&nbsp</h2>";
            str += "<p>" + infos.rites + "</p>";
        str += "</div>";
    str += "</div>";
    return str;
}

/* MAP */
function import_datas_map() {
    const isVisible = !mapDiv.classList.contains('hidden-map');
    if (isVisible) {
        mapDiv.classList.add('hidden-map');  // cache la map
        btn_import_map.value = "Afficher la map";
    } else {
        mapDiv.classList.remove('hidden-map');  // réaffiche la map
        btn_import_map.value = "Map affichée !";
        window.map.invalidateSize(true);        // force Leaflet à recalculer les tuiles
    }
}

function initialiserMap() {
    const w = 1280, h = 768;
    window.map = L.map(mapDiv, {
        crs: L.CRS.Simple,
        minZoom: 0,
        maxZoom: 2
    });
    const bounds = [[0,0],[h,w]];
    const cols = 5;
    const rows = 3;
    const tileW = w / cols;
    const tileH = h / rows;
    window.map.setMaxBounds(bounds);
    window.map.fitBounds(bounds);
    
    // ajout des tuiles
    for(let x=0; x<cols; x++){
        for(let y=0; y<rows; y++){
            const northWest = [y*tileH, x*tileW];
            const southEast = [(y+1)*tileH, (x+1)*tileW];
            const imgBounds = [northWest, southEast];
            L.imageOverlay(`images/map/0/${x}/${y}.png`, imgBounds).addTo(window.map);
        }
    }
    
    // groupes de markers
    const villesGroup = L.layerGroup();
    const monstresGroup = L.layerGroup();
    
    const v1 = L.marker([700,500], {icon: city}).bindPopup("Capitale");
    const v2 = L.marker([500,600], {icon: cityPort}).bindPopup("Village");
    villesGroup.addLayer(v1).addLayer(v2);
    
    const m1 = L.marker([300,200], {icon: cityLizard}).bindPopup("Grotte des trolls");
    monstresGroup.addLayer(m1);
    
    villesGroup.addTo(window.map);
    
    const overlays = {
        "Villes": villesGroup,
        "Zones dangereuses": monstresGroup
    };
    L.control.layers(null, overlays).addTo(window.map);
}

