var countItems = 0;

var btnToCheckout = document.getElementById("proceed-to-checkout");
var btnToItems = document.getElementById("back-to-itempage");

var img_src = ["./jacke.png", "./jacke_blau.png", "./jacke_gruen.png"];
var descript = ["Modische Herrenjacke in rot. Sowohl als Arbeitskleidung, als auch chic in der Freizeit tragbar." , 
                "Modische Herrenjacke in blau. Sowohl als Arbeitskleidung, als auch chic in der Freizeit tragbar.", 
                "Modische Herrenjacke in grün. Sowohl als Arbeitskleidung, als auch chic in der Freizeit tragbar."];
var price_prod = [289.99, 279.99, 350.00];


function displayItems(countItems){
    if (countItems == 0){
        document.getElementById("infobox").innerHTML = "Der Warenkorb ist leer!";
    }
}
