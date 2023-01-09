var countItems = 0;

var btnToCheckout = document.getElementById("proceed-to-checkout");
var btnToItems = document.getElementById("back-to-itempage");

let sum = document.getElementById("red_sum");
let itm_prc = document.getElementById("red_price");
let amt = document.getElementById("quantity").innerHTML;

var id_val = [];
var img_src = ["./jacke.png", "./jacke_blau.png", "./jacke_gruen.png"];
var descript = ["Modische Herrenjacke in rot. Sowohl als Arbeitskleidung, als auch chic in der Freizeit tragbar." , 
                "Modische Herrenjacke in blau. Sowohl als Arbeitskleidung, als auch chic in der Freizeit tragbar.", 
                "Modische Herrenjacke in grün. Sowohl als Arbeitskleidung, als auch chic in der Freizeit tragbar."];
var price_prod = [289.99, 279.99, 350.00];

function startPage(){
    document.getElementById("red_sum").innerHTML = Number(amt) * price_prod[0];
}

function updateTable(){
    for (var i=0; i<img_src.length; i++){
        document.getElementById().innerHTML = img_src[i];
    }
}

function displayItems(countItems){
    if (countItems == 0){
        document.getElementById("infobox").innerHTML = "Der Warenkorb ist leer!";
    }
}
