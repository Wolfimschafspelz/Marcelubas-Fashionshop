
var selectColorRed = document.getElementById('color-control-red');
var selectColorBlue = document.getElementById('color-control-blue');
var selectColorGreen = document.getElementById('color-control-green');
var jackeImage = document.getElementById('item-picture');

var currentColor = 'jacke-red';

selectColorRed.onclick = function() {
    jackeImage.classList.remove(currentColor);
    currentColor = 'jacke-red';
    jackeImage.classList.add(currentColor);
}

selectColorBlue.onclick = function() {
    jackeImage.classList.remove(currentColor);
    currentColor = 'jacke-blue';
    jackeImage.classList.add(currentColor);
}

selectColorGreen.onclick = function() {
    jackeImage.classList.remove(currentColor);
    currentColor = 'jacke-green';
    jackeImage.classList.add(currentColor);
}