function countingSort(arr) {
    // Write your code here
    let tally=[];
    for(let i=0;i<100;i++){
        tally[i]=0;
    }
    let current;
    let tallied=[];
    for(let i=0;i<arr.length;i++){
        current=arr[i];
        for(let j=0;j<arr.length && !tallied.includes(current);j++){
            if(current==arr[j]){
                tally[current]++;
            }
        }
        tallied.push(current);
    }
    return tally;
}
