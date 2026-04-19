function import_form_pokemon(){
    resetAll();
    preparer_pokemon();
}

function preparer_pokemon() {
    var str = "";
    str += "<div class='carte_row carte_justify_space'>";
        str += "<form onsubmit='pokemonSubmit(event)' method='post' class='zone_border width_50'>";
            str += "<div class='zone carte_left'>";
                str += "<h1>Pokemon : </h1>";
                str += "<p>* : informations obligatoires</p>";
                str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                    str += "<label>Nom* :&nbsp</label>";
                    str += "<input  type='text' id='pokemon_name' name='pokemon_name' required/>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Amberos, Kalos, Johto'>";
                    str += "<label>Région :&nbsp</label>";
                    str += "<input type='text' id='pokemon_region' name='pokemon_region'/>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                    str += "<label>Epoque* :&nbsp</label>";
                    str += "<input type='text' id='pokemon_epoque' name='pokemon_epoque' value='Moderne' required/>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                    str += "<label>Forme* :&nbsp</label>";
                    str += "<input type='text' id='pokemon_forme' name='pokemon_forme' value='Normal' required/>"; 
                str += "</span></div>";
                str += "<div><span title='Premier type obligatoire'>";
                    str += "<label>Type1* :&nbsp</label>";
                    str += "<select name='pokemon_type1' id='pokemon_type1' required>";
                        str += "<option value='Acier'>Acier</option>";
                        str += "<option value='Combat'>Combat</option>";
                        str += "<option value='Dragon'>Dragon</option>";
                        str += "<option value='Eau'>Eau</option>";
                        str += "<option value='Electrik'>Electrik</option>";
                        str += "<option value='Fee'>Fée</option>";
                        str += "<option value='Feu'>Feu</option>";
                        str += "<option value='Glace'>Glace</option>";
                        str += "<option value='Insect'>Insect</option>";
                        str += "<option value='Normal'>Normal</option>";
                        str += "<option value='Plante'>Plante</option>";
                        str += "<option value='Poison'>Poison</option>";
                        str += "<option value='Psy'>Psy</option>";
                        str += "<option value='Roche'>Roche</option>";
                        str += "<option value='Sol'>Sol</option>";
                        str += "<option value='Spectre'>Spectre</option>";
                        str += "<option value='Tenebres'>Ténèbres</option>";
                        str += "<option value='Vol'>Vol</option>";
                    str += "</select>";
                str += "</span></div>";
                str += "<div><span title='Second type facultatif'>";
                    str += "<label>Type2 :&nbsp</label>";
                    str += "<select name='pokemon_type2' id='pokemon_type2'>";
                        str += "<option value=''>Aucun</option>";
                        str += "<option value='Acier'>Acier</option>";
                        str += "<option value='Combat'>Combat</option>";
                        str += "<option value='Dragon'>Dragon</option>";
                        str += "<option value='Eau'>Eau</option>";
                        str += "<option value='Electrik'>Electrik</option>";
                        str += "<option value='Fee'>Fée</option>";
                        str += "<option value='Feu'>Feu</option>";
                        str += "<option value='Glace'>Glace</option>";
                        str += "<option value='Insect'>Insect</option>";
                        str += "<option value='Normal'>Normal</option>";
                        str += "<option value='Plante'>Plante</option>";
                        str += "<option value='Poison'>Poison</option>";
                        str += "<option value='Psy'>Psy</option>";
                        str += "<option value='Roche'>Roche</option>";
                        str += "<option value='Sol'>Sol</option>";
                        str += "<option value='Spectre'>Spectre</option>";
                        str += "<option value='Tenebres'>Ténèbres</option>";
                        str += "<option value='Vol'>Vol</option>";
                    str += "</select>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Elevée, Faible, Domesticable'>";
                    str += "<label>Dangerosité :&nbsp</label>";
                    str += "<input type='text' id='pokemon_dangerosite' name='pokemon_dangerosite' />";
                str += "</span></div>";
            str += "</div>";

            str += "<div class='zone carte_left'>";
                str += "<h1>Attaque signature : </h1>";
                str += "<p>(Laisser tout vide si pas d'attaque signature)</p>";
                str += "<div><span title='Exemples : Ball'Ombre, Rayon Signal'>";
                    str += "<label>Nom de l'attaque :&nbsp</label>";
                    str += "<input type='text' id='atk_sign_nom' name='atk_sign_nom' />";
                str += "</span></div>";
                str += "<div><span title='Exemples : Spectre, Insect'>";
                    str += "<label>Type de l'attaque :&nbsp</label>";
                    str += "<select name='atk_sign_type' id='atk_sign_type'>";
                        str += "<option value=''>Aucun</option>";
                        str += "<option value='Acier'>Acier</option>";
                        str += "<option value='Combat'>Combat</option>";
                        str += "<option value='Dragon'>Dragon</option>";
                        str += "<option value='Eau'>Eau</option>";
                        str += "<option value='Electrik'>Electrik</option>";
                        str += "<option value='Fee'>Fée</option>";
                        str += "<option value='Feu'>Feu</option>";
                        str += "<option value='Glace'>Glace</option>";
                        str += "<option value='Insect'>Insect</option>";
                        str += "<option value='Normal'>Normal</option>";
                        str += "<option value='Plante'>Plante</option>";
                        str += "<option value='Poison'>Poison</option>";
                        str += "<option value='Psy'>Psy</option>";
                        str += "<option value='Roche'>Roche</option>";
                        str += "<option value='Sol'>Sol</option>";
                        str += "<option value='Spectre'>Spectre</option>";
                        str += "<option value='Tenebres'>Ténèbres</option>";
                        str += "<option value='Vol'>Vol</option>";
                    str += "</select>";
                str += "</span></div>";
                str += "<div><span title='Description physiques, effets secondaires, priorité. <br> pour passer à la ligne.'>";
                    str += "<label>Description de l'attaque :&nbsp</label>";
                    str += "<textarea id='atk_sign_description' name='atk_sign_description' rows='1' ></textarea>";
                str += "</span></div>";
                str += "<div><span title='Choisir 100 pour 'ne rate jamais'.'>";
                    str += "<label>Précision de l'attaque (%) :&nbsp</label>";
                    str += "<input type='number' id='atk_sign_precision' name='atk_sign_precision' min='0' max='100' step='5' value='0' />";
                str += "</span></div>";
                str += "<div><span title='Je devrais même pas avoir à expliquer ça...'>";
                    str += "<label>Puissance de l'attaque :&nbsp</label>";
                    str += "<input type='number' id='atk_sign_puissance' name='atk_sign_puissance' min='0' max='250' step='5' value='0'/>";
                str += "</span></div>";
            str += "</div>";

            str += "<div class='zone carte_left'>";
                str += "<h1>Evolution : </h1>";
                str += "<p>(Laisser tout vide si base / évolution de personne)</p>";
                str += "<div><span title='Exemples : pour Haydaim, noter 'Vivaldaim'. Pour Chenipan, laisser vide.'>";
                    str += "<label>Evolution de :&nbsp</label>";
                    str += "<input type='text' id='evolution_nom' name='evolution_nom' />";
                str += "</span></div>";
                str += "<div><span title='Exemples : pour Haydaim, noter 1. Pour Chenipan, noter 0. pour Méga Dracaufeu, noter 3.'>";
                    str += "<label>Stade d'évolution :&nbsp</label>";
                    str += "<input type='number' id='evolution_stade' name='evolution_stade' min='0' max='3' value='0'/>";
                str += "</span></div>";
            str += "</div>";

            str += "<div class='zone carte_left'>";
                str += "<input type='submit' id='submit' value='Afficher le code du Pokemon'>";
            str += "</div>";
        str += "</form>";
        
        str += "<div id='infos_pokemon' class='zone carte_left zone_border width_50'></div>";
    str += "</div>";

    all_page.innerHTML = str;
}


function pokemonSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('pokemon_name').value;
    var epoque = document.getElementById('pokemon_epoque').value;
    var forme = document.getElementById('pokemon_forme').value;
    var type1 = document.getElementById('pokemon_type1').value;
    var type2 = document.getElementById('pokemon_type2').value;
    var dangerosite = document.getElementById('pokemon_dangerosite').value;
    var atk_sign_nom = document.getElementById('atk_sign_nom').value;
    var atk_sign_type = document.getElementById('atk_sign_type').value;
    var atk_sign_description = document.getElementById('atk_sign_description').value.replace(/\r\n|\n\r|\r|\n/g,'&lt;br&gt;');
    var atk_sign_precision = document.getElementById('atk_sign_precision').value;
    var atk_sign_puissance = document.getElementById('atk_sign_puissance').value;
    var evolution_nom = document.getElementById('evolution_nom').value;
    var evolution_stade = document.getElementById('evolution_stade').value;
    var infos_pokemon =  document.getElementById('infos_pokemon');

    ret = "pokemon = {<br>";
    ret += "&emsp;'nom' : '" + name + "',<br>";
    ret += "&emsp;'epoque' : '" + epoque + "',<br>";
    ret += "&emsp;'forme' : '" + forme + "',<br>";
    ret += "&emsp;'type1' : '" + type1 + "',<br>";
    ret += "&emsp;'type2' : '" + type2 + "',<br>";
    ret += "&emsp;'atk_sign_nom' : '" + atk_sign_nom + "',<br>";
    ret += "&emsp;'atk_sign_type' : '" + atk_sign_type + "',<br>";
    ret += "&emsp;'atk_sign_description' : '" + atk_sign_description + "',<br>";
    ret += "&emsp;'atk_sign_precision' :&nbsp" + atk_sign_precision + ",<br>";
    ret += "&emsp;'atk_sign_puissance' :&nbsp" + atk_sign_puissance + ",<br>";
    ret += "&emsp;'evolution_nom' : '" + evolution_nom + "',<br>";
    ret += "&emsp;'evolution_stade' :&nbsp" + evolution_stade + ",<br>";
    ret += "&emsp;'dangerosite' : '" + dangerosite + "<br>";
    ret += "}<br>";
    ret += "<br>";
    ret += "Merci de nommer l'image : " + image_pokemon(name, forme, epoque) ;

    infos_pokemon.innerHTML = ret;
}

function image_pokemon(nom, forme, epoque) {
    var nom_image = String(nom); 
    if (forme != "Normal") {
        nom_image += "_"+forme;
    }
    if (epoque != "Moderne") {
        nom_image += "_"+epoque;
    }
    nom_image += ".webp";
    return nom_image;
}