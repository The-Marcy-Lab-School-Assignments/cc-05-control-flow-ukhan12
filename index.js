//1
function absoluteValue(num){
    if(num > 0){
        return num;
    }else if(num < 0){
        return (num * -1);
    }else 
        return 'null';
  
}

console.log(absoluteValue(-55));

//2
function multiplesOfFourAndSix(){
    let arr = [];
    for(let i=1; i<101; i++){
        if(i%4===0 && i%6===0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(multiplesOfFourAndSix());




