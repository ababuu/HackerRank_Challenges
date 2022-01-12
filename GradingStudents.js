function gradingStudents(grades) {
    // Write your code here
    let output=[];
    for(let i=0; i<grades.length;i++){
        if(((grades[i]+2)%5===0 || (grades[i]+1)%5===0) && grades[i]>=38){
            if((grades[i]+2)%5===0){
                output.push(grades[i]+2);
            }
            else{
                output.push(grades[i]+1);
            }
        }
        else{
            output.push(grades[i]);
        }
    }
    return output;
}
