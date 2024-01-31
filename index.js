
var asset1 = document.getElementById('texture1');
var asset2 = document.getElementById('texture2');
var asset3 = document.getElementById('texture3');
var asset4 = document.getElementById('texture4');
var asset5 = document.getElementById('texture5');


asset1.addEventListener('click', function () {
    var box = document.getElementById('miCubo');
    box.setAttribute('color', '#ff99ff');
});

asset2.addEventListener('click', function () {
    var box = document.getElementById('miCubo');
    box.setAttribute('color','#b3d9ff');
});

asset3.addEventListener('click', function () {
    var box = document.getElementById('miCubo');
    box.setAttribute('color', '#00ff99');
});

asset4.addEventListener('click', function () {
    var box = document.getElementById('miCubo');
    box.setAttribute('color', '#ffcc66');
});

asset5.addEventListener('click', function () {
    var box = document.getElementById('miCubo');
    box.setAttribute('color', '#cc66ff');
});
