function import_form_duo(){
    resetAll();
    preparer_duo();
}

function preparer_duo() {
    var str = "";
    str += "<div class='carte_row carte_justify_space'>";
        str += "<form onsubmit='duoSubmit(event)' method='post' class='zone_border width_50'>";
            str += "<div class='zone carte_left'>";
                str += "<h1>Dresseur : </h1>";
                str += "<p>* : informations obligatoires</p>";
                str += "<div><span title='Exemples : Dianthéa, Red, Alain'>";
                    str += "<label>Nom* :&nbsp</label>";
                    str += "<input type='text' id='dresseur_nom' name='dresseur_nom' required/>";
                str += "</span></div>";
                str += "<div><span title='Exemples : -2700, 0'>";
                    str += "<label>Epoque* :&nbsp</label>";
                    str += "<input type='number' id='dresseur_epoque' name='dresseur_epoque' value='0' required/>";
                str += "</span></div>";
            str += "</div>";
                
            str += "<div class='zone carte_left'>";
                str += "<h1>Pokemons : </h1>";
                str += "<p><span title='Les formes/époques peuvent rester remplies, seul le nom défini la présence ou non d'un pokemon'>";
                    str += "Purement facultatif, ne remplir les noms que ceux concernés";
                str += "</span></p>";
                str += "<div>";
                    str += "<h2>Pokemon 1 : </h2>";
                    str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                        str += "<label>Nom :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon1_nom' name='dresseur_pokemon1_nom'/>";
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                        str += "<label>Epoque :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon1_epoque' name='dresseur_pokemon1_epoque' value='Moderne'/>";  
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                        str += "<label>Forme :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon1_forme' name='dresseur_pokemon1_forme' value='Normal'/> ";
                    str += "</span></div>";
                str += "</div>";
                str += "<div>";
                    str += "<h2>Pokemon 2 : </h2>";
                    str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                        str += "<label>Nom :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon2_nom' name='dresseur_pokemon2_nom'/>";
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                        str += "<label>Epoque :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon2_epoque' name='dresseur_pokemon2_epoque' value='Moderne'/>";  
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                        str += "<label>Forme :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon2_forme' name='dresseur_pokemon2_forme' value='Normal'/>";
                    str += "</span></div>";
                str += "</div>";
                str += "<div>";
                    str += "<h2>Pokemon 3 : </h2>";
                    str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                        str += "<label>Nom :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon3_nom' name='dresseur_pokemon3_nom'/>";
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                        str += "<label>Epoque :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon3_epoque' name='dresseur_pokemon3_epoque' value='Moderne'/>";  
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                        str += "<label>Forme :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon3_forme' name='dresseur_pokemon3_forme' value='Normal'/>";
                    str += "</span></div>";
                str += "</div>";
                str += "<div>";
                    str += "<h2>Pokemon 4 : </h2>";
                    str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                        str += "<label>Nom :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon4_nom' name='dresseur_pokemon4_nom'/>";
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                        str += "<label>Epoque :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon4_epoque' name='dresseur_pokemon4_epoque' value='Moderne'/>";  
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                        str += "<label>Forme :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon4_forme' name='dresseur_pokemon4_forme' value='Normal'/>"; 
                    str += "</span></div>";
                str += "</div>";
                str += "<div>";
                    str += "<h2>Pokemon 5 : </h2>";
                    str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                        str += "<label>Nom :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon5_nom' name='dresseur_pokemon5_nom'/>";
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                        str += "<label>Epoque :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon5_epoque' name='dresseur_pokemon5_epoque' value='Moderne'/>";  
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                        str += "<label>Forme :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon5_forme' name='dresseur_pokemon5_forme' value='Normal'/>"; 
                    str += "</span></div>";
                str += "</div>";
                str += "<div>";
                    str += "<h2>Pokemon 6 : </h2>";
                    str += "<div><span title='Exemples : Haydaim, Flambusard, Mistigrix'>";
                        str += "<label>Nom :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon6_nom' name='dresseur_pokemon6_nom'/>";
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Moderne, -2700, -1800'>";
                        str += "<label>Epoque :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon6_epoque' name='dresseur_pokemon6_epoque' value='Moderne'/>";  
                    str += "</span></div>";
                    str += "<div><span title='Exemples : Normal, Automne, Femelle'>";
                        str += "<label>Forme :&nbsp</label>";
                        str += "<input type='text' id='dresseur_pokemon6_forme' name='dresseur_pokemon6_forme' value='Normal'/>"; 
                    str += "</span></div>";
                str += "</div>";
            str += "</div>";

            str += "<div class='zone carte_left'>";
                str += "<input type='submit' id='submit' value='Afficher le code du Duo'>";
            str += "</div>";
        str += "</form>";

        str += "<div id='infos_duo' class='zone carte_left zone_border width_50'></div>";
    str += "</div>";

    all_page.innerHTML = str;
}

function duoSubmit(event) {
    event.preventDefault();
    let ret = "";

    var nom = document.getElementById('dresseur_nom').value;
    var epoque = document.getElementById('dresseur_epoque').value;
    var dresseur_pokemon1_nom = document.getElementById('dresseur_pokemon1_nom').value;
    var dresseur_pokemon2_nom = document.getElementById('dresseur_pokemon2_nom').value;
    var dresseur_pokemon3_nom = document.getElementById('dresseur_pokemon3_nom').value;
    var dresseur_pokemon4_nom = document.getElementById('dresseur_pokemon4_nom').value;
    var dresseur_pokemon5_nom = document.getElementById('dresseur_pokemon5_nom').value;
    var dresseur_pokemon6_nom = document.getElementById('dresseur_pokemon6_nom').value;

    if (dresseur_pokemon1_nom || dresseur_pokemon2_nom || dresseur_pokemon3_nom 
            || dresseur_pokemon4_nom ||dresseur_pokemon5_nom || dresseur_pokemon6_nom) {
        ret += "duo = ";
    
        if (dresseur_pokemon1_nom) {
            var dresseur_pokemon1_epoque = document.getElementById('dresseur_pokemon1_epoque').value;
            var dresseur_pokemon1_forme = document.getElementById('dresseur_pokemon1_forme').value;

            ret += "{<br>";
            ret += "&emsp;'dresseur_titre' : '" + titre_dresseur(nom, epoque) + "',<br>";
            ret += "&emsp;'pokemon_titre' : '" + titre_pokemon(dresseur_pokemon1_nom, dresseur_pokemon1_epoque, dresseur_pokemon1_forme) + "',<br>";
            ret += "},<br>";
        }
        if (dresseur_pokemon2_nom) {
            var dresseur_pokemon2_epoque = document.getElementById('dresseur_pokemon2_epoque').value;
            var dresseur_pokemon2_forme = document.getElementById('dresseur_pokemon2_forme').value;

            ret += "{<br>";
            ret += "&emsp;'dresseur_titre' : '" + titre_dresseur(nom, epoque) + "',<br>";
            ret += "&emsp;'pokemon_titre' : '" + titre_pokemon(dresseur_pokemon2_nom, dresseur_pokemon2_epoque, dresseur_pokemon2_forme) + "',<br>";
            ret += "},<br>";
        }
        if (dresseur_pokemon3_nom) {
            var dresseur_pokemon3_epoque = document.getElementById('dresseur_pokemon3_epoque').value;
            var dresseur_pokemon3_forme = document.getElementById('dresseur_pokemon3_forme').value;

            ret += "{<br>";
            ret += "&emsp;'dresseur_titre' : '" + titre_dresseur(nom, epoque) + "',<br>";
            ret += "&emsp;'pokemon_titre' : '" + titre_pokemon(dresseur_pokemon3_nom, dresseur_pokemon3_epoque, dresseur_pokemon3_forme) + "',<br>";
            ret += "},<br>";
        }
        if (dresseur_pokemon4_nom) {
            var dresseur_pokemon4_epoque = document.getElementById('dresseur_pokemon4_epoque').value;
            var dresseur_pokemon4_forme = document.getElementById('dresseur_pokemon4_forme').value;

            ret += "{<br>";
            ret += "&emsp;'dresseur_titre' : '" + titre_dresseur(nom, epoque) + "',<br>";
            ret += "&emsp;'pokemon_titre' : '" + titre_pokemon(dresseur_pokemon4_nom, dresseur_pokemon4_epoque, dresseur_pokemon4_forme) + "',<br>";
            ret += "},<br>";
        }
        if (dresseur_pokemon5_nom) {
            var dresseur_pokemon5_epoque = document.getElementById('dresseur_pokemon5_epoque').value;
            var dresseur_pokemon5_forme = document.getElementById('dresseur_pokemon5_forme').value;

            ret += "{<br>";
            ret += "&emsp;'dresseur_titre' : '" + titre_dresseur(nom, epoque) + "',<br>";
            ret += "&emsp;'pokemon_titre' : '" + titre_pokemon(dresseur_pokemon5_nom, dresseur_pokemon5_epoque, dresseur_pokemon5_forme) + "',<br>";
            ret += "},<br>";
        }
        if (dresseur_pokemon6_nom) {
            var dresseur_pokemon6_epoque = document.getElementById('dresseur_pokemon6_epoque').value;
            var dresseur_pokemon6_forme = document.getElementById('dresseur_pokemon6_forme').value;

            ret += "{<br>";
            ret += "&emsp;'dresseur_titre' : '" + titre_dresseur(nom, epoque) + "',<br>";
            ret += "&emsp;'pokemon_titre' : '" + titre_pokemon(dresseur_pokemon6_nom, dresseur_pokemon6_epoque, dresseur_pokemon6_forme) + "',<br>";
            ret += "},<br>";
        }
    }
    
    infos_duo.innerHTML = ret;
}

function titre_dresseur(nom, epoque) {
    let text = nom;
    if (epoque != 0) text += ' (' + epoque + ")";
    return text;
}

function titre_pokemon(nom, epoque, forme) {
    let text = nom;
    if (epoque != "Moderne" && forme == "Normal") text += ' (' + epoque + ")";
    if (forme != "Normal" && forme == "Moderne") text += ' (' + forme + ")";
    if (epoque != "Moderne" && forme != "Normal") text += ' (' + epoque + ", " + forme + ")";
    return text;
}