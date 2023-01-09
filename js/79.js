function largestOfFour(arr) {
    let finalArray = []
    
    for (let i = 0; i < arr.length; i++){
        let MaxFromEveryArray = -2000
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > MaxFromEveryArray){
                MaxFromEveryArray = arr[i][j]
            }
        }
        finalArray.push(MaxFromEveryArray)  
    }
    
    return finalArray
}
  
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));