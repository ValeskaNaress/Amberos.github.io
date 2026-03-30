const liste = document.querySelector("#liste");
const btn_import_pk = document.querySelector("#bouton_import_pokemon");
const btn_import_dr = document.querySelector("#bouton_import_dresseur");

btn_import_pk.addEventListener("click", import_datas_pokemon);
btn_import_dr.addEventListener("click", import_datas_dresseur);

function import_datas_pokemon(){
    if (btn_import_pk.value == "Afficher les pokemons") {
        liste.innerHTML = "";
        Pokemon.import_pokemons();
        btn_import_pk.value = "Pokemons affichée !";
        btn_import_dr.value = "Afficher les dresseurs";
    }
}

function import_datas_dresseur(){
    if (btn_import_dr.value == "Afficher les dresseurs") {
        liste.innerHTML = "";
        Dresseur.import_dresseurs();
        btn_import_dr.value = "Dresseurs affichés !";
        btn_import_pk.value = "Afficher les pokemons";
    }
}

function preparer_carte_pokemon(val) {
    var str = "";
    var infos = Pokemon.all_pokemons[val].getAttributes();
    str += initialiser_carte_pokemon(infos);
    liste.innerHTML += str;
}

function preparer_carte_dresseur(val) {
    var str = "";
    var infos = Dresseur.all_dresseurs[val].getAttributes();
    str += initialiser_carte_dresseur(infos);
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

function initialiser_carte_dresseur(infos) {
    var str = "";
    str += "<div id='carte_type' class='Dresseur carte_grid zone zone_large'>";
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