$(document).ready(function () {
    var i = Math.floor(Math.random() * 20) + 1;
    path = 'img/looking-for-mates/' + i + '.jpg';
    $('#bee').attr('src', path);
});