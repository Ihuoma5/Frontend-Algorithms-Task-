const checkYuGiOh = (n) => {
    
    if(isNaN(n) === true){
        return `invalid parameter: ${JSON.stringify(n)}`
    }else{
    const numArr = []
    let i 
    for(i=1; i <= n; i++){
        
        if (Number.isInteger(i/2)=== true && Number.isInteger(i/3)=== true && Number.isInteger(i/5)=== true){
            numArr.push("yu-gi-oh")
        } else if(Number.isInteger(i/2)=== true && Number.isInteger(i/3)=== true && Number.isInteger(i/5)=== false){
            numArr.push("yu-gi")
        }else if(Number.isInteger(i/2)=== true && Number.isInteger(i/3)=== false && Number.isInteger(i/5)=== true){
            numArr.push("yu-oh")
        }else if (Number.isInteger(i/2)=== false && Number.isInteger(i/3)=== true && Number.isInteger(i/5)=== true){
            numArr.push("gi-oh")
        }else if (Number.isInteger(i/2)=== true && Number.isInteger(i/3)===false && Number.isInteger(i/5)===false){
            numArr.push("yu")
        }else if (Number.isInteger(i/2)===false && Number.isInteger(i/3)=== true && Number.isInteger(i/5)===false){
            numArr.push("gi")
        }else if (Number.isInteger(i/2)=== false && Number.isInteger(i/3)=== false && Number.isInteger(i/5)=== true){
            numArr.push("oh")
        } else{
            numArr.push(i)
    }
    } return numArr;
}
}
console.log(checkYuGiOh(10)); 
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"))

    