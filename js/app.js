document.getElementById('increment').onclick = function() {

	var itemAmount = document.getElementById('itemAmount');
	var itemCost = document.getElementById('newCost');

	if (itemAmount.value > 999) {
		itemAmount.value = 999;
	}

	itemAmount.value++;
	itemCost.value = 65;
	itemCost.value *= itemAmount.value;

}

document.getElementById('decrement').onclick = function() {

	var itemAmount = document.getElementById('itemAmount');
	var itemCost = document.getElementById('newCost');
	var fixedItemCost = 65;

	if (itemAmount.value < 1) {
		itemAmount.value = 1;
	}

	if (itemCost.value < 65) {
		itemCost.value = 65;
	}

	itemAmount.value--;
	itemCost.value -= fixedItemCost;

}

document.getElementById('itemAmount').onchange = function() {

	var itemAmount = document.getElementById('itemAmount');
	var fixedItemCost = 65;
	document.getElementById('newCost').value = fixedItemCost * itemAmount.value;

}



