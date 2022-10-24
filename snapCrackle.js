function snapCrackle(maxValue){
    let output = "";
    for(let i = 1; i <= maxValue; i++){
        if( i % 5 === 0 && i % 2 !== 0){
            output +="SnapCrackle, "
        }
        else if(i % 5 === 0){
            output += "Crackle, "
        }
        else if(i % 2 !== 0){
            output += "Snap, "
        }
        else{
            output += [i] + ", "
        }
    }
    return output;
}