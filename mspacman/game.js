function init() {
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext("2d");
    var image = new Image();
    image.src = 'pacman10-hp-sprite.png';

    image.addEventListener("load", function() {
    	//board: start at 322 to the right, 0 down. image is 464x135
    	ctx.drawImage(image, 322, 0, 463, 138, 230, 0, 463, 138);
    	//ms pacman: start 83 to the right, 23 down. image is 13x14
    	ctx.drawImage(image, 84, 23, 17, 17, 268, 30, 17, 17);
    }, false);
}
