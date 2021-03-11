function squareSpitter(nums){
    let store = [];
    let numArr = nums.toString().split("");
    for(let i=0;i<numArr.length;i++){
        let square = Math.pow(numArr[i],2)
        store.push(square)
    }
    return Number(store.join(""))
    console.log(typeof store)
}

console.log(squareSpitter(3345))