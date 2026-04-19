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