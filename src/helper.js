function randomTicket(n){
    let arr = new Array(n);
    for(let i = 0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function addNumber(arr){
    return arr.reduce((sum,currVal) => sum + currVal, 0);
}
export {randomTicket , addNumber}