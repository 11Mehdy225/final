// le panier mis a jour 
var quantite = document.getElementById('quantite1');
var total = document.querySelector('.total');

function updateTotal() {
    const prix = parseInt(document.getElementById('prix').value);
  const quantiteValue = parseInt(quantite.value);
  const nouveauTotal = prix * quantiteValue;
  total.textContent = `total: ${nouveauTotal.toFixed(2)}fcfa`;
}

document.querySelector('.btn-decre').addEventListener('click', () => {
  if (quantite.value > 1) {
    quantite.value--;
    updateTotal();
  }
});

document.querySelector('.btn-incre').addEventListener('click', () => {
  quantite.value++;
  updateTotal();
});

quantite.addEventListener('input', () => {
  if (quantite.value < 1) {
    quantite.value = 1;
  }
  updateTotal();
});