module.exports = 

function reverseArr(arr) { 

	let resultArr = [];
	for(let i=arr.length-1; i>=0; i--){
		resultArr.push(arr[i])
	}

	arr = resultArr;
}