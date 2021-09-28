// meu framework
function calcularMedia() {
  var total = 0;
  var qtd = arguments.length;
  var i = 0;
  while(typeof arguments[i] === "number") {
    total += arguments[i];
    i++;
  }
  return (total / qtd).toFixed(2);
}

function sortear(n) {
  var _n = n || 1;
  var nSorteado = Math.random();
  nSorteado = nSorteado * _n;
  nSorteado = Math.floor(nSorteado);
  return nSorteado;
}