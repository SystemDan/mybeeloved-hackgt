$(document).ready(function () {
    var i = Math.floor(Math.random() * 20) + 1;
    path = 'img/looking-for-mates/' + i + '.jpg';
    $('#bee').attr('src', path);
});

function showBeeMovie() {
    document.getElementById('header').style.display = "none";
    document.getElementById('love-header').style.display = "block";

    document.getElementById('bee-movie').style.display = "block";
    document.getElementById('btns').style.display= "none";
}