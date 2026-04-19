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
        str += "<div id='dresseur_img' class='zone_dresseur Blanc carte_center self_center carte_column'>";
            str += "<img class='img_dresseur' src='images/dresseurs/" + infos.image + "'>"; 
        str += "</div>";
        
        str += "<div class='class_row image_switch'>";
            str += "<input type='button' id='button_<_" + infos.titre + "' name='<' value='<' class='button_image'>";
            //document.getElementById("button_<_" + infos.titre).addEventListener("click", switch_image('previous', infos.titre));
            str += "<input type='button' id='button_>_" + infos.titre + "' name='>' value='>' class='button_image'>";
            //document.getElementById("button_>_" + infos.titre).addEventListener("click", switch_image('next', infos.titre));
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