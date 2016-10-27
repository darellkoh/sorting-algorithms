describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('return an ordered array', function(){
	var array = [2, 8, 45, 9, 12, 4, 7];
	it ('correctly sorts an array', function(){
		expect(bubbleSort(array) ).toEqual([2, 4, 7, 8, 9, 12, 45]);
	});
	it ('does not use the array.sort method', function(){
		var test = {"bar": Array.prototype.sort}
		spyOn(test, 'bar');
		var array = [2, 5, 3];
		bubbleSort(array);
		expect(test.bar).not.toHaveBeenCalled();
	});
});

