function import_form_dresseur(){
    resetAll();
    preparer_dresseur();
}

function preparer_dresseur() {
    var str = "";
    str += "<div class='carte_row carte_justify_space'>";
        str += "<form onsubmit='dresseurSubmit(event)' method='post' class='zone_border  width_50'>";
            str += "<div class='zone carte_left'>";
                str += "<h1>Dresseur : </h1>";
                str += "<p>* : informations obligatoires</p>";
                str += "<div><span title='Exemples : Dianthéa, Red, Alain'>";
                    str += "<label>Nom* :&nbsp</label>";
                    str += "<input type='text' id='dresseur_nom' name='dresseur_nom' required/>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Amberos, Kalos, Hoenn'>";
                    str += "<label>Region :&nbsp</label>";
                    str += "<input type='text' id='dresseur_region' name='dresseur_region'/>";
                str += "</span></div>";
                str += "<div><span title='Exemples : -2700, 0'>";
                    str += "<label>Epoque* :&nbsp</label>";
                    str += "<input type='number' id='dresseur_epoque' name='dresseur_epoque' value='0' required/>";
                str += "</span></div>";
                str += "<div><span title='Exempels : Métier, Garde, Artisan'>";
                    str += "<label>Rôle :&nbsp</label>";
                    str += "<input type='text' id='dresseur_role' name='dresseur_role' />";
                str += "</span></div>";
                str += "<div><span title='Exemples : Noble, Artisan, Paysan, Religieux'>";
                    str += "<label>Grade :&nbsp</label>";
                    str += "<input type='text' id='dresseur_grade' name='dresseur_grade' />";
                str += "</span></div>";

                str += "<div><span title='Exemples : Nourriture, Sons, Actions, Sports'>";
                    str += "<label>Aime :&nbsp</label>";
                    str += "<textarea id='dresseur_aime' name='dresseur_aime' rows='1'></textarea>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Nourriture, Sons, Actions, Sports'>";
                    str += "<label>Aime pas :&nbsp</label>";
                    str += "<textarea id='dresseur_aime_pas' name='dresseur_aime_pas' rows='1'></textarea>";
                str += "</span></div>";
                str += "<div><span title='Exemples : Patience, peurs, détermiantion, méfiance, naïveté'>";
                    str += "<label>Caractère :&nbsp</label>";
                    str += "<textarea id='dresseur_caractere' name='dresseur_caractere' rows='1'></textarea>";
                str += "</span></div>";
                str += "<div><span title='Noms d'autres personnes'>";
                    str += "<label>Relations :&nbsp</label>";
                    str += "<textarea id='dresseur_relations' name='dresseur_relations' rows='1'></textarea>";
                str += "</span></div>";

                str += "<div><span title='Titre, surnom...'>";
                    str += "<label>Epithètes :&nbsp</label>";
                    str += "<input type='text' id='dresseur_epithetes' name='dresseur_epithetes'/>";
                str += "</span></div>";
                str += "<div><span title='Nom des personnages officiels dont celui ci est le descendant'>";
                    str += "<label>Descendants :&nbsp</label>";
                    str += "<input type='text' id='dresseur_descendant' name='dresseur_descendant'/>";
                str += "</span></div>";

                str += "<div><span title='Tout ce que vous voulez'>";
                    str += "<label>Informations supplémentaires :&nbsp</label>";
                    str += "<textarea id='dresseur_infos_sup' name='dresseur_infos_sup' rows='1'></textarea>";
                str += "</span></div>";
            str += "</div>";

            str += "<div class='zone carte_left'>";
                str += "<input type='submit' id='submit' value='Afficher le code du Dresseur'>";
            str += "</div>";
        str += "</form>";

        str += "<div id='infos_dresseur' class='zone carte_left zone_border width_50'></div>";
    str += "</div>";

    all_page.innerHTML = str;
}

function dresseurSubmit(event) {
    event.preventDefault();
    
    var nom = document.getElementById('dresseur_nom').value;
    var epoque = document.getElementById('dresseur_epoque').value;
    var region = document.getElementById('dresseur_region').value;
    var role = document.getElementById('dresseur_role').value;
    var grade = document.getElementById('dresseur_grade').value;
    var aime = document.getElementById('dresseur_aime').value.replace(/\r\n|\n\r|\r|\n/g,'&lt;br&gt;');
    var aime_pas = document.getElementById('dresseur_aime_pas').value.replace(/\r\n|\n\r|\r|\n/g,'&lt;br&gt;');
    var caractere = document.getElementById('dresseur_caractere').value.replace(/\r\n|\n\r|\r|\n/g,'&lt;br&gt;');
    var relations = document.getElementById('dresseur_relations').value.replace(/\r\n|\n\r|\r|\n/g,'&lt;br&gt;');
    var epithetes = document.getElementById('dresseur_epithetes').value;
    var descendant = document.getElementById('dresseur_descendant').value;
    var infos_sup = document.getElementById('dresseur_infos_sup').value.replace(/\r\n|\n\r|\r|\n/g,'&lt;br&gt;');
    var infos_dresseur = document.getElementById('infos_dresseur');

    ret = "dresseur = {<br>";
    ret += "&emsp;'nom' : '" + nom + "',<br>";
    ret += "&emsp;'region' : '" + region + "',<br>";
    ret += "&emsp;'epoque' : '" + epoque + "',<br>";
    ret += "&emsp;'role' : '" + role + "',<br>";
    ret += "&emsp;'grade' : '" + grade + "',<br>";
    ret += "&emsp;'aime' : '" + aime + "',<br>";
    ret += "&emsp;'aime_pas' : '" + aime_pas + "',<br>";
    ret += "&emsp;'caractere' : '" + caractere + "',<br>";
    ret += "&emsp;'relations' : '" + relations + ",<br>";
    ret += "&emsp;'epithetes' : '" + epithetes + ",<br>";
    ret += "&emsp;'descendant' : '" + descendant + "',<br>";
    ret += "&emsp;'infos_sup' : '" + infos_sup + ",<br>";
    ret += "}<br>";
    ret += "<br>";
    ret += "Merci de nommer l'image : " + image_dresseur(nom, epoque);
    ret += "<br>";
    ret += "Les images secondaires peuvent être numérotées avec _2.png, _3.png... ";
    infos_dresseur.innerHTML = ret;
}

function image_dresseur(nom, epoque) {
    var nom_image = String(nom);
    if (epoque != 0) nom_image += "_" + epoque + "_1";
    nom_image += ".png";
    return nom_image;
}