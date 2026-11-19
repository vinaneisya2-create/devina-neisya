var nodeLuas;
var nodeKeliling;
var kotakVisual;

function init() {
  nodeLuas = document.getElementById("hasilLuas").firstChild;
  nodeKeliling = document.getElementById("hasilKeliling").firstChild;
  kotakVisual = document.getElementById("kotakVisual");
  hitungGeometri();
}

function hitungGeometri() {
  var p = parseFloat(document.getElementById("panjang").value);
  var l = parseFloat(document.getElementById("lebar").value);

  var luas = p * l;
  var keliling = 2 * (p + l);

  nodeLuas.data = luas;
  nodeKeliling.data = keliling;

  if (!kotakVisual) {
    kotakVisual = document.getElementById("kotakVisual");
  }
  kotakVisual.style.width = (p * 10) + "px";
  kotakVisual.style.height = (l * 10) + "px";
}