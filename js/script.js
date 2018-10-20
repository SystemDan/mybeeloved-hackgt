$(document).ready(function () {
    var i = Math.floor(Math.random() * 10) + 1;
    path = 'img/looking-for-mates/' + i + '.jpg';
    $('#bee').attr('src', path);
});