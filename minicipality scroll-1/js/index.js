/*external js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

window.onload = function() {
  var mountains = document.getElementById("mountains"),
		    tween = TweenLite.fromTo(mountains, 20, {x:0}, {x:-1550, ease:Linear.easeNone});

  var houses = document.getElementById("houses"),
		    tween = TweenLite.fromTo(houses, 10, {x:0}, {x:-4800, ease:Linear.easeNone});
}