# from: https://codility.com/demo/results/trainingHTX9VH-9AK/
# score: 100%

function solution(A, K) {
    var i = 0;
    if(A.length > 0){  
        while(i < K){
         A.unshift(A.pop());
        i++;   
        }
    }
    return A;
}
