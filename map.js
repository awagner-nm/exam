Array.prototype.map = function (cb) { /* YOUR CODE HERE */ 

	let resultArr = [];
	for(let i=0; i<this.length; i++){
		resultArr.push(cb(arr[i]))
	}
	return resultArr
}