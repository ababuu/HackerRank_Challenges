function insertionSort1(n, arr) {
    // Write your code here
    const unsorted=arr[n-1];
    let index=null;
    for(let i=n-2;arr[i]>unsorted && i>=0;i--){
        arr[i+1]=arr[i];
        index=i;
        console.log(arr.join(' '));
    }
    arr[index]=unsorted;
    console.log(arr.join(' '));
}
