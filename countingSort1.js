function countingSort(arr) {
    // Write your code here
    const freqArray=[];
    for(let i=0;i<100;i++){
        freqArray[i]=0;
    }
    
    for(let i=0;i<arr.length;i++){
        freqArray[arr[i]]++;
    }
    
    return freqArray;
}
