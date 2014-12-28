// Depends on this source: https://github.com/davebalmer/turtlewax/blob/master/pen.js

// attach to a canvas tag
var p = new Pen("turtlecanvas");

// say hello
p.jump(10, 20).font("bold 15px Helvetica").text("Hello World!");

// draw a tiny square
p.jump(10, 30).right(10).down(10).left(10).up(10).draw();

// make a yellow hexigon with a thicker line
p.jump(100, 100).fillstyle("#ff0").pensize(2);
for (var i = 0; i < 6; i++)
    p.go(50).turn(60);

p.draw();
