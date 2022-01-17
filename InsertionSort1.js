function insertionSort1(n, arr) {
    // Write your code here
    let element = arr[n-1];
    for(var i=n-2;i>=0 && arr[i]>element;i--){
        arr[i+1]=arr[i];
        console.log(arr.join(' '));
    }
    arr[i+1]=element;
    console.log(arr.join(' '));
}
