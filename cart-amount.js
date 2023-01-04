var countItems = 0;

var btnToCheckout = document.getElementById("proceed-to-checkout");
var btnToItems = document.getElementById("back-to-itempage");


function displayItems(countItems){
    if (countItems == 0){
        document.getElementById("infobox").innerHTML = "Der Warenkorb ist leer!";
    }
}
