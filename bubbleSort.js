function countSwaps(a) {
    // Write your code here
    var temp=0;
    var count=0;
    for(var i=0; i<a.length; i++){
        for(var j=0;j<a.length-1;j++){
            if(a[j]>a[j+1]){
                temp=a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
                count++;
            }
        }
    }
    var lastIndex=a.length-1;
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[lastIndex]}`);
}
