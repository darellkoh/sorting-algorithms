function bubbleSort(array){
	var change = true;
	while(change === true){
		change = false;
		for(var i = 0; i < array.length - 1; i++) {
			if(array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				if (change === false) {
					change = true;
					console.log(array);
				}
			}
		}
	}
	return array;
}
