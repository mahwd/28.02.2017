function flRow() {
  for (var j = 0; j < 4; j++) {
    document.write("<div class='block-white fl'></div>");
    document.write("<div class='block-black fl'></div>");
    }
}
function frRow() {
  for (var j = 0; j < 4; j++) {
    document.write("<div class='block-white fr'></div>");
    document.write("<div class='block-black fr'></div>");
    }
}

function chess() {
  document.write()
  document.write("<div class='layout'>");
  for (var i = 0; i < 4; i++) {
    flRow();
    frRow();
    }
  document.write("</div>");
}
chess();
