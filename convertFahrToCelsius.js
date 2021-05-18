const convertFahrToCelsius = (fahr) => {
  let numberF = Number(fahr);
  if (isNaN(numberF) === true) {
    const dataType = () =>{
        if (fahr.constructor === [].constructor){
            return 'array'
        } else if (fahr.constructor === {}.constructor){
            return 'object'
        }else { 
            return typeof fahr
        }
    }
    return `${JSON.stringify(
      fahr
    )} is not a valid number but a/an ${dataType()}`;
  } else {
    const C = ((fahr - 32) * 5) / 9;
    return C.toFixed(4);
  }
};
console.log(convertFahrToCelsius(10));
console.log(convertFahrToCelsius("Ihuoma"));
console.log(convertFahrToCelsius(["5", 3, 2]));
console.log(convertFahrToCelsius({ temp: 0 }));
