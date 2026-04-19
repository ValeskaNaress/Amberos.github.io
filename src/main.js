const liste = document.querySelector("#liste");
const liste_petite = document.querySelector("#liste_petite");
const all_page = document.querySelector("#all_page");
const mapDiv = document.getElementById('map');

/* ajouter le bouton concerné */
const btn_import_pk = document.querySelector("#bouton_import_pokemon");
const btn_import_dr = document.querySelector("#bouton_import_dresseur");
const btn_import_ln = document.querySelector("#bouton_import_lune");
const btn_import_map = document.querySelector("#bouton_import_map");
const btn_import_form = document.querySelector("#bouton_import_form");

btn_import_pk.addEventListener("click", import_datas_pokemon);
btn_import_dr.addEventListener("click", import_datas_dresseur);
btn_import_ln.addEventListener("click", import_datas_lune);
btn_import_map.addEventListener("click", import_datas_map);
btn_import_form.addEventListener("click", choiceForm);

/* CONTROLLER */

function resetAll() {
    btn_import_dr.value = "Afficher les dresseurs";
    btn_import_pk.value = "Afficher les pokemons";
    btn_import_ln.value = "Afficher les lunes";
    btn_import_map.value = "Afficher la map";
    liste.innerHTML = "";
    liste_petite.innerHTML = "";
    all_page.innerHTML = "";
    nettoyerCarte();
    liste.classList = "liste";
    liste_petite.classList = "liste_petite";
    all_page.classList = "all_page";
}

function choiceForm(){
    if(btn_import_form.value == "form_pokemon") {
        import_form_pokemon();
    } else if(btn_import_form.value == "form_dresseur") {
        import_form_dresseur();
    } else if(btn_import_form.value == "form_duo") {
        import_form_duo();
    }
}

/* MAP */
function nettoyerCarte() {
    if (window.map instanceof L.Map) {
        window.map.remove();
        window.map = null;
    }
    mapDiv.style.display = "none";
}

function import_datas_map() {
    if (btn_import_map.value == "Afficher la map") {
        resetAll();
        mapDiv.style.display = "block";
        initialiser_map();
        btn_import_map.value = "Map affichée !";
    }
}

function initialiser_map() {
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

    for(let x=0; x<cols; x++){
        for(let y=0; y<rows; y++){
            const northWest = [y*tileH, x*tileW];
            const southEast = [(y+1)*tileH, (x+1)*tileW];
            const imgBounds = [northWest, southEast];
            L.imageOverlay(`images/map/0/${x}/${y}.png`, imgBounds).addTo(window.map);
        }
    }

    // Groupes de markers
    var villesGroup = L.layerGroup();
    var monstresGroup = L.layerGroup();

    // Ajout de markers aux groupes
    var v1 = L.marker([700,500], {icon: city}).bindPopup("Capitale");
    var v2 = L.marker([500,600], {icon: cityPort}).bindPopup("Village");
    villesGroup.addLayer(v1).addLayer(v2);

    var m1 = L.marker([300,200], {icon: cityLizard}).bindPopup("Grotte des trolls");
    monstresGroup.addLayer(m1);

    // Ajouter certains par défaut
    villesGroup.addTo(window.map);

    // Controls de calques
    var overlays = {
        "Villes": villesGroup,
        "Zones dangereuses": monstresGroup
    };

    L.control.layers(null, overlays).addTo(window.map);
}